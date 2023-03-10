import { useState, useRef, useEffect } from "react"

export default function NewPhotoForm({NewPhotoFormVisibility, setNewPhotoFormVisibility, setPendingGalleryUpdate}) {
    const modalRef = useRef(null)
    const [photoLabel, setPhotoLabel] = useState('')
    const [photoURL, setPhotoURL] = useState('')


    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setNewPhotoFormVisibility(false) }
        }

        if (NewPhotoFormVisibility) {
            document.body.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [NewPhotoFormVisibility])

    const  handleSubmit = async (e) => {
        e.preventDefault();
        if (photoLabel === '' || photoURL === '') {
            console.log('all fields must be not empty')
            return
        }

        try {
            let res = await fetch(`${import.meta.env.VITE_SERVER}/upload`, { 
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                // body: formData
                body: JSON.stringify({
                    label: photoLabel,
                    url: photoURL
                })
            })
            
            // let resJson = await res.json();

            if (res.status === 200) {
                setPhotoLabel('');
                setPhotoURL('');
                setNewPhotoFormVisibility(false);
                setPendingGalleryUpdate(true)
            } else  {
                console.log('error while uploading data')
            }
        }

        catch (error) {
            console.log("Error while adding new photo: ",error)
        }

    }

    return NewPhotoFormVisibility ? (
        <div className="modal_bg" >
            <div id="modalNewPhoto" className="modalContent" ref={modalRef} >
                <h3 className="modal_title">Add a new photo</h3>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <label htmlFor="label"  className='form_label'>Label</label>
                    <input id="label" type="text" className='form_text_input' value={photoLabel} onChange={(e) => setPhotoLabel(e.target.value)} placeholder='Suspendisse elit massa'/>
                    <label htmlFor="photo_url"  className='form_label'>Photo</label>
                    <input id="photo_url" type="text" className='form_text_input' value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} placeholder='https://images.unsplash.com/photo-1584...'/>
                    <div className="form_buttons">
                        <button className='btn btn_form_cancel' onClick={() => setNewPhotoFormVisibility(false)}>Cancel</button>
                        <button className='btn btn_form_submit'  onClick={() => handleSubmit()} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    ) : null
    
}