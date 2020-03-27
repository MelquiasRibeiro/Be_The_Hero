import React from 'react';
import './style.css'
import logoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from  'react-icons/fi'


export default function NewIncident(){


    return(

        <div className="newIncident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="heroes"></img>    
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva detalhadamente este caso para 
                    encontrar um heroi para resolver isso.
                </p>
                <Link className="back-link"to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para Home 
                </Link>
                </section>
                <form>
                <input type="text" placeholder="Titulo do caso"/>
                <textarea type="email" placeholder="Descrição"/>  
                <input type="tel" placeholder="valor em reais"/>
                <button type="submit" className="button"> cadstrar</button>
                </form>
            </div>
        </div>
    )
}