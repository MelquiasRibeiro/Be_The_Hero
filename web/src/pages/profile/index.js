import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import {FiPower, FiTrash2} from  'react-icons/fi'


export default function Profile(){


    return(

        <div className="profile-container">
            <header>
            <img src={logoImg} alt="heroes"></img>
            <span>Bem vindo, Ong</span>    
            <Link className="button" to="/incidents/new">
                Cadastrar novo caso
            </Link>
            <button type="button">
                <FiPower size={18} color="#e02041"/>
            </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>
                        CASO:
                    </strong>
                    <p>teste teste teste</p>
                    <strong>
                        DESCRIÇÂO:
                    </strong>
                    <p>test test test test</p>
                    <strong>
                        Valor:
                    </strong>
                    <p>R$10000</p>
                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>
                <li>
                    <strong>
                        CASO:
                    </strong>
                    <p>teste teste teste</p>
                    <strong>
                        DESCRIÇÂO:
                    </strong>
                    <p>test test test test</p>
                    <strong>
                        Valor:
                    </strong>
                    <p>R$10000</p>
                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>
                <li>
                    <strong>
                        CASO:
                    </strong>
                    <p>teste teste teste</p>
                    <strong>
                        DESCRIÇÂO:
                    </strong>
                    <p>test test test test</p>
                    <strong>
                        Valor:
                    </strong>
                    <p>R$10000</p>
                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>
                <li>
                    <strong>
                        CASO:
                    </strong>
                    <p>teste teste teste</p>
                    <strong>
                        DESCRIÇÂO:
                    </strong>
                    <p>test test test test</p>
                    <strong>
                        Valor:
                    </strong>
                    <p>R$10000</p>
                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>
            </ul>

        </div>
    )
}