import { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import './App.css'

function App() {

  return (
    <div className="App">
      <div className="topbar">
        <div className="logo_block">
          <img src="/my_unsplash_logo.svg" alt="" className="logo_img" />
          <div className="logo_text">
            <h1 className="logo_title">My Unsplash</h1>
            <h4 className="logo-subtitle">devchallenges.io</h4>
          </div>
        </div>
        <div className="searchbar">
          <span class="material-symbols-outlined">search</span>
          <input type="text" className='search_input' placeholder='Search by name' />
        </div>
        <div className="btn_add_photo">Add a photo</div>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry>
            <div className="image_card">
              <img src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
        </Masonry>
      </ResponsiveMasonry>
      <div className="modal_bg">
        <div id="modalNewPhoto" className="modalContent">
          <h3 className="modal_title">Add a new photo</h3>
          <form action="" method="post">
            <label htmlFor="label"  className='form_label'>Label</label>
            <input id="label" type="text" className='form_text_input' placeholder='Suspendisse elit massa'/>
            <label htmlFor="photo_url"  className='form_label'>Photo</label>
            <input id="photo_url" type="text" className='form_text_input' placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'/>
            <button className='btn_form_cancel'>Cancel</button>
            <button className='btn_form_submit'>Submit</button>
          </form>
        </div>

        <div id='modalConfirmDelete' className="modalContent">
          <h3 className="modal_title">Are you sure?</h3>
          <form action="" method="post">
            <label htmlFor="password"  className='form_label'>Password</label>
            <input id="password" type="password" className='form_text_input' />
            <button className='btn_form_cancel'>Cancel</button>
            <button className='btn_form_delete'>Delete</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
