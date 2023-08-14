import React from "react"


const CustomButton = (props) => {
    return (
        <button className="aside__Btn"  onClick={props.action}>{props.children}</button>
    )

    
};

export default CustomButton;
