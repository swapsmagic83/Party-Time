import React from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const HalloweenCardsList = ({setSelectedCard}) =>{
    const navigate = useNavigate()
    const halloweenCards = ["https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbGxvd2VlbnxlbnwwfHwwfHx8MA%3D%3D",
                            "https://plus.unsplash.com/premium_photo-1663840243176-1b4e4527e514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFsbG93ZWVufGVufDB8fDB8fHww",
                            "https://images.unsplash.com/photo-1492515114975-b062d1a270ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbGxvd2VlbnxlbnwwfHwwfHx8MA%3D%3D",
                            "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbGxvd2VlbnxlbnwwfHwwfHx8MA%3D%3D"
    ]
    const handleClick = (url) =>{
        setSelectedCard(url)
         navigate('/edit', {state:{imgUrl:url}})
     }
    return (
        <>
        <h1 className="Card-h1">Halloween Cards:</h1>
            <div>
                {halloweenCards.map(card=>(
                    <img className="CardsList-image" src={card} onClick={()=>handleClick(card)}></img>
                ))}
            </div>
        </>
    )
}
export default HalloweenCardsList;