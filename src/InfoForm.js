import React from "react";

const InfoForm = ({info,setInfo,infoColor,setInfoColor}) =>{
    return (
        <div>
            <form className="Form">
            <label>Info</label>
                <input
                type="text"
                name="info"
                value={info}
                onChange={(e)=>setInfo(e.target.value)}></input>
                <br></br>
                <label>Info Color</label>
                <input
                type="color"
                name="infoColor"
                value={infoColor}
                onChange={(e)=>setInfoColor(e.target.value)}></input>
                <br></br>
            </form>
        </div>
    )
}
export default InfoForm;