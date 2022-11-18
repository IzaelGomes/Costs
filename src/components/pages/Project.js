import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm';

const Project = () => {

  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();


  useEffect(() => {

    const getProject = async () => {
      try {
        const dataProject = await fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const datas = await dataProject.json();
        setProject(datas);
      } catch (error) {
        console.log(error);
      }
    }
    getProject()
  }, [id])

  const editPost = async (project) => {
    console.log(project)
    setMessage('')
    //budget validation 
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!');
      setType("error");
      return false
    }
    try {
      const projectUpdate = await fetch(`http://localhost:5000/projects/${project.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      })

      const dataUpdate = await projectUpdate.json();
      setProject(dataUpdate);
      setShowProjectForm(false);
      setMessage('Projeto Atualizado');
      setType("success");

    } catch (erro) {
      console.log(erro);
    }
  }




  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }


  return (
    <>
      {project.nome ?
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.nome.toUpperCase()}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? "Editar projeto" : "Fechar"}</button>

              {!showProjectForm ? (
                <div className={styles.project_infor}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.cost}
                  </p>
                </div>

              ) : (
                <div className={styles.project_infor}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}


            </div>
            <div className={styles.service_form_container}>
              <h2>Adcione um serviço:</h2>
              <button className={styles.btn}
                onClick={toggleServiceForm}>
                {!showServiceForm ? "Adcionar serviço" : "Fechar"}
              </button>
              <div className={styles.project_infor}>
                {showServiceForm && <ServiceForm btnText="Adcionar Serviço" />}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              <p>Itens de Serviços</p>
            </Container>
          </Container>
        </div>
        :
        <p>carregando...</p>
      }
    </>
  )
}

export default Project