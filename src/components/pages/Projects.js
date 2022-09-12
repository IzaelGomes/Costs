import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'


const Projects = () => {

  const [projects, setProjects] = useState([]);


  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message;
  }
  console.log(message)

  useEffect(() => {

    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
      .then((data) => {

        setProjects(data)

      }).catch((err) => console.log(err))

  }, [])


  function removeCard(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
      .then((data) => {

        setProjects(projects.filter((project) => project.id !== id))
      }).catch((erro) => console.log(erro))
  }



  return (

    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1> Meus Projetos</h1>
        <LinkButton to='/Newproject' text="Criar Projetos" />
      </div>

      {projects.length === 0 ? <p>Sem projetos cadastrados 😒 </p> : null}

      {message && <Message msg={message} type="success" />}

      <Container customClass="start">

        {projects && projects.map((project) => {

          return <ProjectCard
            id={project.id}
            name={project.nome}
            category={project.category}
            budget={project.budget}
            key={project.id}
            handleRemove={removeCard}

          />
        })}



      </Container>

    </div>
  )
}

export default Projects