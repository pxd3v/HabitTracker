import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import "./styles.css"
import Status from "../Status/index"

var i = 0
var idAux = 0;
let arrayAux = [];
function Main () {

    const [habits, setHabits] = useState([])

    useEffect(() => {
        async function loadHabits() {
            const response = await api.get('/habits')
            setHabits(response.data)        
        }
        
        loadHabits()
    
    }, [habits])

    return(
            <div className="habit=list">
                {habits.map(habit => (
                    <article key={habit._id}>
                        <p>{habit.name}</p>
                        <span>{i=0}{idAux = habit._id}{arrayAux = habit.status}</span>
                        <ul>
                            {habit.status.map(valor => {
                                return (<Status numero={i} key={i++} ownId={idAux} array={arrayAux} futuraClasse={valor ? 'true' : 'false'}/>)
                            })}
                        </ul>

                    </article>
                ))
                }
            </div>
        )
    }


export default Main