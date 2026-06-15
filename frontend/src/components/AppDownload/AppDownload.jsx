import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <section className='app-download' id='app-download'>

      <h2>Get the Foodiez App</h2>

      <p className='app-download-text'>
        Order your favorite meals anytime, anywhere.
        Enjoy faster checkout, exclusive offers, real-time order tracking,
        and seamless food delivery right to your doorstep.
      </p>

      <div className="app-download-platforms">
        <img
          src={assets.play_store}
          alt="Download on Google Play"
        />

        <img
          src={assets.app_store}
          alt="Download on the App Store"
        />
      </div>

    </section>
  )
}

export default AppDownload