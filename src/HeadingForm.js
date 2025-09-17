import React, {useState} from "react";
import './Card.css'

const HeadingForm = ({heading,setHeading,headingColor,setHeadingColor}) =>{
    return (
        <div>
            <div >
                <form className="Form">
                    <label>Heading</label>
                    <input
                    type="text"
                    name="heading"
                    value={heading}
                    onChange={(e)=>setHeading(e.target.value)}></input>
                    <br></br>
                    <label>Choose Heading color</label>
                    <input
                    type="color"
                    name="headingColor"
                    value={headingColor}
                    onChange={(e)=>setHeadingColor(e.target.value)}></input>
                    <br></br>
                </form>
            </div>
        </div>
    )
}
export default HeadingForm;