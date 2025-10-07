import React,{useState} from "react";  
import emailjs from "@emailjs/browser"

const ShareEmailInvite = ({hostName, eventUrl}) =>{
    const [guestEmails,setGuestEmails] = useState([])
    const [newEmail,setNewEmail] = useState('')
    console.log(guestEmails)
    const handleAddEmail = () =>{
        if(newEmail && !guestEmails.includes(newEmail)){
            setGuestEmails([...guestEmails, newEmail])
            setNewEmail('')
        }
    }
console.log('link',eventUrl)
    // send via email
    const sendInvites = (e) =>{
        e.preventDefault()
        if(guestEmails.length > 0){
            guestEmails.forEach(email => {
                const templateParams = {
                    to_email: email,
                    host_name:hostName,
                    eventUrl:eventUrl
                }
                emailjs
            .send(
                "service_rratg8g",
                "template_2ho7mvb",
                templateParams,
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
    
    <h1>Share your invite</h1>
    <div className="Form">
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
            <h3>List of guests invited</h3>
            <ul>
                {guestEmails.map((email)=>(
                    <li> {email}</li>
                ))}
            </ul>
        </div>
    )}
    {guestEmails.length >0 &&
    <button onClick={sendInvites}>Send</button>}
    
    </div>
 )
}
export default ShareEmailInvite;