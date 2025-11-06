import React,{useState} from "react";  
import emailjs from "@emailjs/browser"

const ShareEmailInvite = ({hostName, eventUrl,setStage}) =>{
    const [guestEmails,setGuestEmails] = useState([])
    const [newEmail,setNewEmail] = useState('')
    const [isSent,setIsSent] = useState(false)
    
    console.log(guestEmails)
    const handleAddEmail = () =>{
        if(newEmail && !guestEmails.includes(newEmail)){
            setGuestEmails([...guestEmails, newEmail])
            setNewEmail('')
        }
    }
console.log('link',eventUrl)
    // send via email
    const sendInvites = async (e) =>{
        e.preventDefault();
        if(guestEmails.length === 0 || !eventUrl) return;
        try{
            await Promise.all(
                guestEmails.map(email => {
                    const templateParams = {
                        to_email: email,
                        host_name:hostName,
                        eventUrl:eventUrl
                    }
                    return emailjs.send(
                    "service_rratg8g",
                    "template_2ho7mvb",
                    templateParams,
                    "QNkPqoBDCmMOzz3R9"
                )
                })
            )
            console.log("✅ All invites sent successfully");
            setIsSent(true);
        
            // Now safe to clear localStorage
            localStorage.removeItem('eventCardData');
            localStorage.removeItem('hostDetails');
            localStorage.removeItem('stage');
            localStorage.removeItem('inviteId');
            localStorage.removeItem('selectedCard');
        }
        catch(err){
            console.error('Error sending emails',err);
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
    <button onClick={()=>setStage('hostForm')}>Edit Invite</button>
    {guestEmails.length > 0 && (
        <div>
            <h3>List of guests invited</h3>
            {guestEmails.length >0 &&
                <button onClick={sendInvites}>Send To All</button>}
            <ul>
                {guestEmails.map((email,i)=>(
                   
                        <li key={i}> 
                        <span>{email}</span>
                        <button>Edit</button>
                        <button>Remove</button>
                        </li>
                        
                   
                    
                ))}
            </ul>
        </div>
    )}
    {/* {guestEmails.length >0 &&
    <button onClick={sendInvites}>Send To All</button>} */}
    
    </div>
 )
}
export default ShareEmailInvite;