import React from "react";  

const AddressForm = ({address,setAddress,addressColor,setAddressColor}) =>{
    return (
        <div>
            <form className="Form">
            <label>Address:</label>
            <input
                type="text"
                name="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                required></input>
                <br></br>
                <label>Address color</label>
                <input
                type="color"
                name="addressColor"
                value={addressColor}
                onChange={(e)=>setAddressColor(e.target.value)}></input>
                <br></br>
                {/* <button>Done</button> */}
            </form>
        </div>
    )
}
export default AddressForm;