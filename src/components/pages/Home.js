import React from 'react'
import savings from '../../img/saving.svg'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos</p>
      <LinkButton to="/Newproject" text='Criar Projetos'/>
      <img src={savings} alt='costs'/>
    </section>
  )
}

export default Home