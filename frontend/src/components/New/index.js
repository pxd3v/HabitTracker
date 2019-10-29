import React, { useState } from 'react'

import api from "../../services/api"

import "./styles.css"

function New(){
    const [name, setName] = useState('');
    const [status, setStatus] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false]);

    async function handleNew(event) {
        event.preventDefault();
            if(name != ''){
            await api.post('/habits', {"name": name, "status": status})
            }
        }
    
    return (
    <div className="Novo">
        <form onSubmit={handleNew}>
            <label htmlFor="name"></label>
            <input 
                id="name"
                placeholder="Insert an name for a new habit"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <label htmlFor="descricao"></label>
            <button id="create">
            <h1>Create new habit</h1>
            </button>
        </form>
    </div>
    )
}

export default New