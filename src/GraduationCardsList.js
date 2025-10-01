import React from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";


const GraduationCardsList = ({setSelectedCard}) =>{
    const navigate = useNavigate()
    const graduationCards = ["https://plus.unsplash.com/premium_photo-1683749808307-e5597ac69f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                            "https://images.unsplash.com/photo-1627556704302-624286467c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                            "https://images.unsplash.com/photo-1636231945376-3d40fdcbc462?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
                            "https://plus.unsplash.com/premium_photo-1677572452964-91e968d02d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
                            "https://plus.unsplash.com/premium_photo-1713296254777-0a89f05dcb60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                            "https://plus.unsplash.com/premium_photo-1714397546754-3c1ef1be26e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
                            "https://plus.unsplash.com/premium_photo-1683749809617-bb6885a1e7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
                            "https://plus.unsplash.com/premium_photo-1714397507057-238aab87df25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D"
    ]
    const handleClick = (url) =>{
        setSelectedCard(url)
         navigate('/edit', {state:{imgUrl:url}})
     }
    return (
        <>
        <h1 className="Card-h1">Graduation Cards:</h1>
            <div>
                {graduationCards.map(card=>(
                    <img className="CardsList-image" src={card} onClick={()=>handleClick(card)} alt="Graduation party invitation Card"></img>
                ))}
            </div>
        </>
    )
}
export default GraduationCardsList;