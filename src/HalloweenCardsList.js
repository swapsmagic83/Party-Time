import React,{useState,useEffect} from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";
import EventApi from "./api";


const HalloweenCardsList = ({setSelectedCard}) =>{
    const navigate = useNavigate()
    const [halloweenCards,setHalloweenCards] = useState([])
    useEffect(() =>{
        async function getCards() {
            const result = await EventApi.getCardsByOccasion('halloween')
            setHalloweenCards(result)
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
        <h1 className="Card-h1">Halloween Cards:</h1>
            <div>
                {halloweenCards.map((card)=>(
                    <img className="CardsList-image" key={card.id} src={card.img_url} onClick={()=>handleClick(card)} alt="Halloween party invitation Card"></img>
                ))}
            </div>
        </>
    )
}
export default HalloweenCardsList;