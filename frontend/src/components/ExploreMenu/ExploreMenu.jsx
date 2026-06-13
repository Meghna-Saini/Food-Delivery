import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-test'>Choose from a variety of delicious dishes prepared with the finest ingredients.Our chefs use only the freshest ingredients to create dishes that are both satisfying and nutritious.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt={item.name} />
              
              <p>{item.menu_name}</p>
              
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
