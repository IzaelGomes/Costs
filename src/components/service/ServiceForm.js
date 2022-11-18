import React from 'react'
import {useState} from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../project/ProjectForm.module.css'

const serviceForm = ({handleSubmit, btnText, projectData}) => {

    function submit(){

    }

    function handleChange(){

    }

  return (
    <form onSubmit={submit}>
        <Input
        type="text"
        text="Nome do serviço"
        name="cost"
        placeholder="Insira o nome do serviço "
        handleOnchange={handleChange}
        />

        <Input
        type="number"
        text="custo do serviço"
        name="cost"
        placeholder="Insira o nome do serviço "
        handleOnchange={handleChange}
        />


        <Input
        type="text"
        text="Descrição do serviço"
        name="decription"
        placeholder="Descreva o serviço "
        handleOnchange={handleChange}
        />
        <SubmitButton text={btnText} />
    </form>
  )
}

export default serviceForm