import React, {useState} from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";



const BirthdayCardsList = ({setSelectedCard}) =>{
    const navigate = useNavigate()
    const birthdayCards = ["https://plus.unsplash.com/premium_photo-1663839412063-fd24ec7d2e10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1555607124-8531c7c702d0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1553135422-400ee5852b27?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1551892644-51a6e2e8fc65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                     "https://plus.unsplash.com/premium_photo-1677221924410-0d27f4940396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                      "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                        "https://plus.unsplash.com/premium_photo-1663839331214-3685d7c79c7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                        "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                        "https://images.unsplash.com/photo-1525351159099-81893194469e?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1523757956233-94a86ff74ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                        "https://plus.unsplash.com/premium_photo-1663837827305-a3491793e162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJpcnRoZGF5fGVufDB8fDB8fHww",
                        "https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    const handleClick = (url) =>{
       setSelectedCard(url)
        navigate('/edit', {state:{imgUrl:url}})
    }
    return (
        <div>
            <h1 className="Card-h1">Birthday Cards:</h1>
            <div>
                {birthdayCards.map(card=>(
                    <img className="CardsList-image" src={card} onClick={()=>handleClick(card)}></img>
                ))}
            </div>
        </div>
    )
}
export default BirthdayCardsList;