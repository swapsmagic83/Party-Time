import React, {useState} from "react";
import ShareInvite from "./ShareInvite";

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
            <form className="Card-Edit-form" onSubmit={handleSubmit}>
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


                <label>Host Address</label>
                <input 
                type="text"
                name="hostAddress"
                value={hostAddress}
                onChange={(e)=>setHostAddress(e.target.value)}
                >
                </input>
                <br></br>


                <button type="button" onClick={handleBack}>Previous</button>
                <button type="submit">Next</button>
            </form>
    
        </div>
        </>
    )
}
export default HostDetails;