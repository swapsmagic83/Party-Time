import React,{useState} from "react";  
import emailjs from "@emailjs/browser"

const ShareInvite = ({hostName, eventUrl}) =>{
    const [guestEmails,setGuestEmails] = useState([])
    const [newEmail,setNewEmail] = useState('')
    console.log(guestEmails)
    const handleAddEmail = () =>{
        if(newEmail && !guestEmails.includes(newEmail)){
            setGuestEmails([...guestEmails, newEmail])
            setNewEmail('')
        }
    }

    const sendInvites = (e) =>{
        e.preventDefault()
        if(guestEmails.length > 0){
            guestEmails.forEach(email => {
                const templeParams = {
                    to_email: email,
                    host_name:hostName,
                    eventUrl:eventUrl
                }
                emailjs
            .send(
                "service_rratg8g",
                "template_2ho7mvb",
                templeParams,
                "QNkPqoBDCmMOzz3R9"
            )
            .then((res)=>{
                console.log("Success")
            })
            .catch((err)=>{
                console.log(err)
            })
            })
        }
    }
    
 return(
    <div>
    
    <h3>Share your invite</h3>
    <div>
    <input
    type="email"
    value={newEmail}
    placeholder="Enter Guest Email"
    onChange={(e)=>setNewEmail(e.target.value)}
    ></input>
    <button onClick={handleAddEmail}>Add </button>
    </div>
    
    {guestEmails.length > 0 && (
        <div>
            <h6>List of guests invited</h6>
            <ul>
                {guestEmails.map((email)=>(
                    <li> {email}</li>
                ))}
            </ul>
        </div>
    )}
    <button onClick={sendInvites}>Send</button>
    </div>
 )
}
export default ShareInvite;