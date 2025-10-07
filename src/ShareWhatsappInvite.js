import React,{useState} from "react";
import "./Card.css"

const ShareWhatappInvite = ({hostName,eventUrl})=>{
    const [guestNumbers,setGuestNumbers] = useState([])
    const [newNumber, setNewNumber] = useState('')
    const [countryCode,setCountryCode] = useState('+1')

    const handleAddNumber = () =>{
        if(newNumber){
            const fullNumber = `${countryCode}${newNumber}`
            if(!guestNumbers.includes(fullNumber)){
                setGuestNumbers([...guestNumbers,fullNumber])
                setNewNumber('')
            }
        }
        
    }
    const message = `Hey ${hostName} has invited you to an event!
                     Check the invitation here: ${eventUrl}`
    const createWhatsappLink  = (number) =>{

        return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    }
    return (
        <div>
            <h1>Share invite via WhatsApp</h1>
            <div>
                <select
                value={countryCode}
                onChange={(e)=>setCountryCode(e.target.value)}>
                    <option value="+1">🇺🇸 +1 (USA)</option>
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+61">🇦🇺 +61 (Australia)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+49">🇩🇪 +49 (Germany)</option>
                    <option value="+81">🇯🇵 +81 (Japan)</option>
                    <option value="+33">🇫🇷 +33 (France)</option>
                </select>
                <input
                type="tel"
                value={newNumber}
                placeholder="Enter number here"
                onChange={(e)=>setNewNumber(e.target.value)}></input>
                <button onClick={handleAddNumber}>Add Number</button>
            </div>
            {guestNumbers.length > 0 &&
            <div>
                <ul>
                    {guestNumbers.map(num =>(
                        <li>{num}
                        <a
                        href={createWhatsappLink(num)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ShareInvite-a"
                        >
                            Send Invite</a></li>
                    ))}
                </ul>
                </div>}
        </div>
    )
}
export default ShareWhatappInvite;