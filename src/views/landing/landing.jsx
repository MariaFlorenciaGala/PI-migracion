import React from 'react'
import { Link } from 'react-router-dom'
//import styles from '../landing/landing.css'

export default function Landing (){
    return (
        <div >
            <h1>LANDING</h1>
            <Link to='./home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}
