import React from 'react';
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from  'react-icons/fi'
import './style.css'

export default function logon(){


    return(

        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="heroes"></img>    

            <form>
                <h1>Faça Seu Login</h1>

                <input type="text" placeholder="seu ID"/> 
                <button type="submit" className="button"> entrar</button>
                <a href=" ">
                    <FiLogIn size={16} color="#e02041"/>
                    não tenho cadastro 
                </a>
            </form>

            </section>

            <img src={herosImg} alt="heroes"></img>
        </div>
    )
}