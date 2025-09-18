import React, {useState} from "react";

const HostDetails = () =>{
    const [hostName,setHostName] = useState('')
    const [hostPhone,setHostPhone] = useState('')
    const [hostEmail,setHostEmail] =useState('')
    const [hostAddress, setHostAddress] =useState('')
    return (
        <>
        <div>
            <form>
                <label>Host Name</label>
                <input 
                type="text"
                name="hostName"
                value={hostName}
                required
                onClick={(e)=>setHostName(e.target.value)}
                >
                </input>
                <label>Host Phone Number:</label>
                <input 
                type="text"
                name="hostPhone"
                value={hostPhone}
                required
                onClick={(e)=>setHostPhone(e.target.value)}
                >
                </input>
                <label>Host Email</label>
                <input 
                type="email"
                name="hostEmail"
                value={hostEmail}
                required
                onClick={(e)=>setHostEmail(e.target.value)}
                >
                </input>
                <label>Host Address</label>
                <input 
                type="text"
                name="hostAddress"
                value={hostAddress}
                onClick={(e)=>setHostAddress(e.target.value)}
                >
                </input>
                <button>Next</button>
            </form>
        </div>
        </>
    )
}
export default HostDetails;