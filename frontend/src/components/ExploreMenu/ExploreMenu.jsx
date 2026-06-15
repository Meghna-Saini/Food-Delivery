import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

  const handleCategoryClick = (menuName) => {
    setCategory(prev => prev === menuName ? "All" : menuName)
  }

  return (
    <section className='explore-menu' id='explore-menu'>

      <div className="explore-menu-header">
        <h1>Explore Our Menu</h1>

        <p className='explore-menu-text'>
          Discover a wide range of delicious dishes crafted with fresh,
          high-quality ingredients. From comforting classics to exciting
          new flavors, there's something for everyone.
        </p>

        {category !== "All" && (
          <div className="selected-category">
            Showing: <span>{category}</span>
          </div>
        )}
      </div>

      <div className="explore-menu-list">

        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${
              category === item.menu_name ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? "active" : ""}
            />

            <p>{item.menu_name}</p>
          </div>
        ))}

      </div>

      <hr />
    </section>
  )
}

export default ExploreMenu