import React, {Fragment} from "react";
import GrayImg from "../shared/grey_img";

const Planet = (props) =>{

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <GrayImg img_url={props.img_url}/>


        </div>
    )

}

export default Planet