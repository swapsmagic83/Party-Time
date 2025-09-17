import React, { useState} from "react";
import './Card.css'
import HeadingForm from "./HeadingForm";
import DateForm from "./DateForm";
import AddressForm from "./AddressForm";
import InfoForm from "./InfoForm";
import ResultCard from "./ResultCard";


const Card = ({selectedCard}) =>{
    const [date,setDate] = useState('')
    const [address, setAddress] = useState('')
    const [info,setInfo] = useState('')
    const [infoColor,setInfoColor] = useState('black')
    const [heading,setHeading] = useState('')
    const [headingColor, setHeadingColor] = useState('black')
    const [dateColor,setDateColor] = useState('black')
    const [addressColor,setAddressColor] = useState('black')
    const [showCard,setShowCard] = useState(false)
    const [showEditForm, setShowEditForm] = useState(true)
    
    const handleDone = (e) =>{
        e.preventDefault()
        setShowCard(true)
        setShowEditForm(false)
    }

    const handleBack = () =>{
        setShowEditForm(true)
        setShowCard(false)

    }
    return (

        <div className="editor-container">
            
            {selectedCard && showCard===false &&(
            <div className="Card-container">
               
            <img className="Card-image" src={selectedCard}></img>
            <div className="heading-overlay-text">
            <h3 style={{color:headingColor}}>{heading}</h3>    
            </div>
            <div className="overlay-text">

                <h4 style={{color:infoColor}}>{info}</h4>
                <h4 style={{color:dateColor}}>{date}</h4>
                <h4 style={{color:addressColor}}>{address}</h4></div>
                
            </div>)}
            {showEditForm &&
            <div className="Card-form-container">
            
            <form onSubmit={handleDone} className="Card-Edit-form">
               
                <HeadingForm heading={heading} setHeading={setHeading} headingColor={headingColor} setHeadingColor={setHeadingColor}/>
                <InfoForm info={info} setInfo={setInfo} infoColor={infoColor} setInfoColor={setInfoColor}/>
                <DateForm date={date} setDate={setDate} dateColor={dateColor} setDateColor={setDateColor} />
                <AddressForm address={address} setAddress={setAddress} addressColor={addressColor} setAddressColor={setAddressColor}/>
               {date && address&&( <button className="Button">Done</button>)}
            </form>
            </div>}
            {showCard &&
            <div>
                <ResultCard selectedCard={selectedCard}
                heading={heading} headingColor={headingColor}
                date={date} dateColor={dateColor}
                info={info} infoColor={infoColor}
                address={address} addressColor={addressColor} 
                handleBack={handleBack}/>
                </div>}
        </div>
    )
}
export default Card;