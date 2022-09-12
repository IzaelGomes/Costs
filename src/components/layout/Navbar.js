import React from 'react'
import {Link} from  'react-router-dom' 
import Container from './Container'
import styles from './Navbar.module.css'
import logo from   '../../img/costs_logo.png'

const Navbar = () => {
  return (
    <nav  className={styles.navbar}> 

        <Container>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/Newproject">Novo Projeto</Link></li>
                <li className={styles.item}><Link className={styles.item}ink to ="/Company">Empresa</Link></li>
                <li className={styles.item}><Link to="/Contact">Contato</Link></li>               
            </ul>
        </Container>
    
    </nav>
  )
}

export default Navbar