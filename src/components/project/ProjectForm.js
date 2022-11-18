import {useState, useEffect} from 'react'

import React from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

const ProjectForm = ({handleSubmit, btnText, projectData}) => {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {})

  useEffect(() =>{
    fetch("http://localhost:5000/categories", {
    method:"GET", 
    headers:{
      'content-type': 'application/json'
    }
  }).then(res => res.json())
    .then(data =>{  
      setCategories(data)
    })
    .catch(err => console.log(err))
  }, [])
  
  const submit = (e)=>{
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
  }


  function handleCategory(e){
    setProject({...project, category:{
      id: e.target.options[e.target.selectedIndex].value,
      name:e.target.options[e.target.selectedIndex].text
    }})
    console.log(e.target)
    
  }

  
  return (
    <form onSubmit={submit} className={styles.form}>
        
      <Input 
      type="text" 
      name="nome"
      text="Nome do projeto" 
      placeholder="Insira o nome do projeto "
      handleOnchange={handleChange}
      />
       
      <Input 
       type="number"
       name="budget"
       text="Orçamento do projeto" 
       placeholder="Insira o orçamento do projeto"
       handleOnchange={handleChange} 
       />
        
       
       <Select 
       name='category_id' 
       text="Selecione uma categoria"
       options={categories}
       handleOnchange={handleCategory}
       value={project.category ? project.category.id : ''}
       />
        
       <SubmitButton text={btnText}/>
        
    </form>
  )
}

export default ProjectForm