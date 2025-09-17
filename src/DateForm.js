import React from "react";  

const DateForm = ({date,setDate,dateColor,setDateColor}) =>{
    return (
        <div>
            <form className="Form">

                <label>Date Time </label>
                <input
                type="text"
                name="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                required></input>
                <br></br>

                <label>Date Color</label>
                <input
                type="color"
                name="dateColor"
                value={dateColor}
                onChange={(e)=>setDateColor(e.target.value)}></input>
                <br></br>

            </form>
        </div>
    )
}
export default DateForm;