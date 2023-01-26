import { useState, useEffect } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import NewPhotoForm from './components/NewPhotoForm'
import PhotoCard from './components/PhotoCard'
import './App.css'
import DeleteApproveForm from './components/DeleteApproveForm'

function App() {
  const [NewPhotoFormVisibility, setNewPhotoFormVisibility] = useState(false);
  const [deleteApproveFormVisibility, setDeleteApproveFormVisibility ] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState('');
  const [filteredImageData, setFilteredImageData] = useState([]);
  const [pendingGalleryUpdate, setPendingGalleryUpdate] = useState(false);
  const [searchText, setSearchText] = useState('')

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
    if (pendingGalleryUpdate === true) setPendingGalleryUpdate(false)
  }, [pendingGalleryUpdate])

  useEffect(() => {
    if (searchText === "") {return setFilteredImageData(imageData)}

    setFilteredImageData(imageData.filter(img => {
      return img.label.toLowerCase().includes(searchText.toLowerCase())
    }))
  }, [searchText, imageData])


  /* content to display in gallery */
  let galleryContent;
  let searchError;

  if (filteredImageData) {
    if (searchText !== "" && filteredImageData.length === 0) {
      searchError = "Nothing found"
    } else {
      galleryContent = filteredImageData.map( img => 
        <PhotoCard 
          key={img._id}
          id={img._id} 
          url={img.url} 
          label={img.label}
          setPendingGalleryUpdate={setPendingGalleryUpdate}
          setDeleteApproveFormVisibility ={ setDeleteApproveFormVisibility }
          setSelectedCardId={setSelectedCardId}
        />)
    }
  } else {
    galleryContent = null
  }

  

  return (
    <div className="App">
      <div className="topbar">
        <div className="logo_block" onClick={() => setSearchText('')}>
          <img src="/my_unsplash_logo.svg" alt="" className="logo_img" />
        </div>
        <div className="searchbar">
          <span className="search-icon material-symbols-outlined">search</span>
          <input type="text" className='search_input' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search by name' />
        </div>
        <div className="btn_add_photo" onClick={(e) => {e.stopPropagation(); setNewPhotoFormVisibility(true)}}>Add a photo</div>
      </div>
      {searchError && <p className='search_error'>{searchError}</p>}
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 950: 2, 1350: 3}}>
        <Masonry className='masonry_grid' gutter='45px'>
          {galleryContent}
        </Masonry>
      </ResponsiveMasonry>
      

      <NewPhotoForm 
        NewPhotoFormVisibility={NewPhotoFormVisibility} 
        setNewPhotoFormVisibility={setNewPhotoFormVisibility}
        setPendingGalleryUpdate={setPendingGalleryUpdate}
      />

      <DeleteApproveForm 
        deleteApproveFormVisibility={deleteApproveFormVisibility} 
        setDeleteApproveFormVisibility={setDeleteApproveFormVisibility}
        setPendingGalleryUpdate={setPendingGalleryUpdate}
        selectedCardId={selectedCardId}
        setSelectedCardId={setSelectedCardId}
      />
        
    </div>
  )
}

export default App
