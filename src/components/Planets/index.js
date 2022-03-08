import React, {Fragment} from "react";
import Planet from "./Planet";

const Planets = () =>{

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Planet name = "Mercurio" description = "Mercúrio é o menor e mais interno planeta do Sistema Solar" img_url= "https://upload.wikimedia.org/wikipedia/commons/b/b8/Internal_Structure_of_Mercury_%28pt%29.jpg"/>
            <Planet/>
            <Planet/>
            <Planet/>
        </Fragment>
    )

}

export default Planets