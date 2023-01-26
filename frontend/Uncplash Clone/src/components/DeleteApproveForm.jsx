import { useState, useRef, useEffect } from "react"

export default function DeleteApproveForm({
    deleteApproveFormVisibility, 
    setDeleteApproveFormVisibility, 
    setPendingGalleryUpdate,
    selectedCardId,
    setSelectedCardId
    }) {
    const modalRef = useRef(null)
    const [password, setPassword] = useState('')


    /* Добавить возврат ошибки и не закрывать форму, если пароль неверный */
    function deleteImage() {
        try {
          fetch(`http://localhost:3000/${selectedCardId}?password=${password}`, {method: 'DELETE'})
          .then(setPendingGalleryUpdate(true))
          .then(setSelectedCardId(''))
          .then(setDeleteApproveFormVisibility(false))
        } catch(err) {
          console.log(err)
        }
      }


    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setDeleteApproveFormVisibility(false) }
        }

        if (deleteApproveFormVisibility) {
            document.body.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [deleteApproveFormVisibility])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === '') {
            console.log('all fields must be not empty')
            return
        }

        deleteImage()


    }

    return deleteApproveFormVisibility ? (

        <div className="modal_bg">
            <div id='modalConfirmDelete' className="modalContent" ref={modalRef}>
                <h3 className="modal_title">Are you sure?</h3>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <label htmlFor="password"  className='form_label'>Password</label>
                    <input id="password" type="password" className='form_text_input' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="form_buttons">
                        <button className='btn btn_form_cancel'>Cancel</button>
                        <button className='btn btn_form_delete' type="submit">Delete</button>
                    </div>
                </form>
            </div>
        </div> 
    ) : null
    
}