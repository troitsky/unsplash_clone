import { useState, useRef, useEffect } from "react"

export default function NewPhotoForm({NewPhotoFormVisibility, setNewPhotoFormVisibility}) {
    const modalRef = useRef(null)
    
    function handleClickOutside(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setNewPhotoFormVisibility(false)
        }
    }

    useEffect(() => {
        if (NewPhotoFormVisibility) {
            document.body.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [NewPhotoFormVisibility])

    return NewPhotoFormVisibility ? (
        <div className="modal_bg" >
            <div id="modalNewPhoto" className="modalContent" ref={modalRef} >
                <h3 className="modal_title">Add a new photo</h3>
                <form action="" method="post">
                <label htmlFor="label"  className='form_label'>Label</label>
                <input id="label" type="text" className='form_text_input' placeholder='Suspendisse elit massa'/>
                <label htmlFor="photo_url"  className='form_label'>Photo</label>
                <input id="photo_url" type="text" className='form_text_input' placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'/>
                <div className="form_buttons">
                    <button className='btn_form_cancel'>Cancel</button>
                    <button className='btn_form_submit'>Submit</button>
                </div>
                </form>
            </div>
        </div>
    ) : null
    
}