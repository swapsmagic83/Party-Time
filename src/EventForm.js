import React, {useState} from "react";
import './Card.css';

const EventForm = ({cardData,setCardData,handleDone}) =>{
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setCardData((prev)=>({
            ...prev,
            [name]:value
        }));
    };
    return (
        <div>
            <div className="Card-form-container" >
                <form className="Form" onSubmit={handleDone}>
                    <div className="Form-input">
                    <label>Heading</label>
                    <input
                    type="text"
                    name="heading"
                    value={cardData.heading}
                    onChange={handleChange}></input>
                    <br></br>
                    <label>Choose Heading color</label>
                    <input
                    type="color"
                    name="headingColor"
                    value={cardData.headingColor}
                    onChange={handleChange}></input>
                    <br></br>
                    </div>

                    <div className="Form-input">
                    <label>Info</label>
                    <input
                    type="text"
                    name="info"
                    value={cardData.info}
                    onChange={handleChange}></input>
                    <br></br>
                    <label>Info Color</label>
                    <input
                    type="color"
                    name="infoColor"
                    value={cardData.infoColor}
                    onChange={handleChange}></input>
                    <br></br>
                    </div>

                    <div className="Form-input">
                    <label>Date Time </label>
                    <input
                    type="text"
                    name="date"
                    value={cardData.date}
                    onChange={handleChange}
                    required></input>
                    <br></br>
                    <label>Date Color</label>
                    <input
                    type="color"
                    name="dateColor"
                    value={cardData.dateColor}
                    onChange={handleChange}></input>
                    <br></br>
                    </div>

                    <div className="Form-input">
                    <label>Address:</label>
                    <input
                    type="text"
                    name="address"
                    value={cardData.address}
                    onChange={handleChange}
                    required></input>
                    <br></br>
                    <label>Address color</label>
                    <input
                    type="color"
                    name="addressColor"
                    value={cardData.addressColor}
                    onChange={handleChange}></input>
                    <br></br>
                    </div>

                    <button className="Button">Done</button>
                </form>
            </div>
        </div>
    )
}
export default EventForm;