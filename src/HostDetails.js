import React, {useState} from "react";
import ShareInvite from "./ShareEmailInvite";

const HostDetails = ({handleBack, onHostSubmit,hostDetails,setHostDetails}) =>{
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setHostDetails((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        onHostSubmit(hostDetails)
    }
    return (
        <>
        <div className="Card-form-container">
            <form className="Form" onSubmit={handleSubmit}>
                <div className="Form-input">
                <label >Host Name</label>
                <input 
                
                type="text"
                name="hostName"
                value={hostDetails.hostName}
                required
                onChange={handleChange}
                >
                </input>
                <br></br>
                </div>

                <div className="Form-input">
                <label>Host Phone Number:</label>
                <input 
                type="text"
                name="hostPhone"
                value={hostDetails.hostPhone}
                required
                onChange={handleChange}
                >
                </input>
                <br></br>
                </div>

                <div className="Form-input">
                <label>Host Email</label>
                <input 
                type="email"
                name="hostEmail"
                value={hostDetails.hostEmail}
                required
                onChange={handleChange}
                >
                </input>
                <br></br>
                </div>

                <div className="Form-input">
                <label>Host Address</label>
                <input 
                type="text"
                name="hostAddress"
                value={hostDetails.hostAddress}
                onChange={handleChange}
                >
                </input>
                <br></br>
                </div>

                
                <button className="Button" type="button" onClick={handleBack}>Previous</button>
                <button className="Button" type="submit">Next</button>
              
            </form>
    
        </div>
        </>
    )
}
export default HostDetails;