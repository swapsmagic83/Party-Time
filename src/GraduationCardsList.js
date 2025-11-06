import React, {useState, useEffect} from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";
import EventApi from "./api";


const GraduationCardsList = ({setSelectedCard}) =>{
    const navigate = useNavigate()
    const [graduationCards,setGraduationCards] = useState([])

    useEffect(()=>{
        async function getCards() {
            const result = await EventApi.getCardsByOccasion('graduation')
            setGraduationCards(result)
        }
        getCards()
    },[])
   
    const handleClick = (card) =>{
        setSelectedCard(card)
        localStorage.setItem('selectedCard',JSON.stringify(card))
        navigate('/edit', {state:{card}})
     }
    return (
        <>
        <h1 className="Card-h1">Graduation Cards:</h1>
            <div>
                {graduationCards.map((card)=>(
                    <img className="CardsList-image" key={card.id} src={card.img_url} onClick={()=>handleClick(card)} alt="Graduation party invitation Card"></img>
                ))}
            </div>
        </>
    )
}
export default GraduationCardsList;