export default function PhotoCard({id, label, url, setDeleteApproveFormVisibility, setSelectedCardId}) {
    
    return (
        <div className="image_card">
        <img src={url} alt="" className='image_card_picture' />
        <div className="image_card_overlay">
        <button className='btn-card-red' onClick={(e) => {
            e.stopPropagation(); 
            setDeleteApproveFormVisibility(true); 
            setSelectedCardId(id)}
        }>delete</button>
        <p className="image_card_title">{label}</p>
        </div>
    </div>
    )
    
}