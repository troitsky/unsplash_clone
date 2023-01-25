import { useState, useEffect } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import NewPhotoForm from './components/NewPhotoForm'
import PhotoCard from './components/PhotoCard'
import './App.css'

function App() {
  const [NewPhotoFormVisibility, setNewPhotoFormVisibility] = useState(false);
  const [imageData, setImageData] = useState([]);
  /* add image data update */

  async function getImages() {
    try {
      await fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(data => setImageData(data))
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getImages()
  }, [NewPhotoFormVisibility])

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
          {imageData.map( (img, i) => {
            return (
              <PhotoCard 
                key={img._id}
                id={img._id} 
                url={img.url} 
                label={img.label}
              />
            )
          })}
        </Masonry>
      </ResponsiveMasonry>
      

      <NewPhotoForm 
        NewPhotoFormVisibility={NewPhotoFormVisibility} 
        setNewPhotoFormVisibility={setNewPhotoFormVisibility} 
      />
        
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
