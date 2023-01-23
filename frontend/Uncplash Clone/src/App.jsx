import { useState, useEffect } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import NewPhotoForm from './components/NewPhotoForm'

import './App.css'

function App() {

  const [NewPhotoFormVisibility, setNewPhotoFormVisibility] = useState(false);


  return (
    <div className="App">
      <div className="topbar">
        <div className="logo_block">
          <img src="/my_unsplash_logo.svg" alt="" className="logo_img" />
        </div>
        <div className="searchbar">
          <span className="search-icon material-symbols-outlined">search</span>
          <input type="text" className='search_input' placeholder='Search by name' />
        </div>
        <div className="btn_add_photo" onClick={(e) => {e.stopPropagation(); setNewPhotoFormVisibility(true)}}>Add a photo</div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 950: 2, 1350: 3}}>
        <Masonry className='masonry_grid' gutter='45px'>
            <div className="image_card">
              <img src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
            <div className="image_card image_card_tall">
              <img src="/robin-kutesa-xw_X5oAQ_nI-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
            <div className="image_card">
              <img src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
            <div className="image_card">
              <img src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
            <div className="image_card">
              <img src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
            <div className="image_card image_card_tall">
              <img src="/robin-kutesa-xw_X5oAQ_nI-unsplash.jpg" alt="" className='image_card_picture' />
              <div className="image_card_overlay">
                <button className='btn-card-red'>delete</button>
                <p className="image_card_title">Morbi consequat lectus non orci maximus</p>
              </div>
            </div>
        </Masonry>
      </ResponsiveMasonry>
      

      <NewPhotoForm NewPhotoFormVisibility={NewPhotoFormVisibility} setNewPhotoFormVisibility={setNewPhotoFormVisibility} />
        
      {/* <div className="modal_bg">
        <div id='modalConfirmDelete' className="modalContent">
            <h3 className="modal_title">Are you sure?</h3>
            <form action="" method="post">
              <label htmlFor="password"  className='form_label'>Password</label>
              <input id="password" type="password" className='form_text_input' />
              <div className="form_buttons">
                <button className='btn_form_cancel'>Cancel</button>
                <button className='btn_form_delete'>Delete</button>
              </div>
            </form>
          </div>
        </div> */}
    </div>
  )
}

export default App
