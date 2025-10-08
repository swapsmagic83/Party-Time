import React, {useState} from "react";
import ShareInvite from "./ShareEmailInvite";

const HostDetails = ({handleBack, onHostSubmit}) =>{
    const [hostName,setHostName] = useState('')
    const [hostPhone,setHostPhone] = useState('')
    const [hostEmail,setHostEmail] =useState('')
    const [hostAddress, setHostAddress] =useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(hostName)
        
        onHostSubmit({hostName,hostPhone,hostEmail,hostAddress})
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
                value={hostName}
                required
                onChange={(e)=>setHostName(e.target.value)}
                >
                </input>
                <br></br>
                </div>

                <div className="Form-input">
                <label>Host Phone Number:</label>
                <input 
                type="text"
                name="hostPhone"
                value={hostPhone}
                required
                onChange={(e)=>setHostPhone(e.target.value)}
                >
                </input>
                <br></br>
                </div>

                <div className="Form-input">
                <label>Host Email</label>
                <input 
                type="email"
                name="hostEmail"
                value={hostEmail}
                required
                onChange={(e)=>setHostEmail(e.target.value)}
                >
                </input>
                <br></br>
                </div>

                <div className="Form-input">
                <label>Host Address</label>
                <input 
                type="text"
                name="hostAddress"
                value={hostAddress}
                onChange={(e)=>setHostAddress(e.target.value)}
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