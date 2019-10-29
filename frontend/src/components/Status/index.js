import React from 'react'

import "./styles.css"
import api from '../../services/api'

function Status(props) {

    async function handleClick() {
        if(props.array[props.numero]){
            props.array[props.numero] = false
        }else props.array[props.numero] = true
        await api.put(`/habits/${props.ownId}`, {"status": props.array})
        // window.location.reload();
    }

    return (
   <button className={props.futuraClasse} onClick={handleClick}></button> 
   )  
}
export default Status