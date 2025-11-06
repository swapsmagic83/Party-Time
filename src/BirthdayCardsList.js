import React, {useState, useEffect} from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";
import EventApi from "./api";



const BirthdayCardsList = ({setSelectedCard}) =>{
    const navigate = useNavigate();
    const [birthdayCards,setBirthdayCards] = useState([]);
   
        
        useEffect(() =>{
            async function getCards() {
                    const result = await EventApi.getCardsByOccasion('birthday')
                    setBirthdayCards(result)
            }
            getCards()
        },[]);
    
    const handleClick = (card) =>{
       setSelectedCard(card)
       localStorage.setItem('selectedCard',JSON.stringify(card))
       navigate('/edit', {state:{card}})
    };
    return (
        <div>
            <h1 className="Card-h1">Birthday Cards:</h1>
            <div>
                {birthdayCards.map((card)=>(
                    <img className="CardsList-image" key={card.id} src={card.img_url} onClick={()=>handleClick(card)} alt="Birthday party invitation Card"></img>
                ))}
            </div>
        </div>
    )
}

export default BirthdayCardsList;