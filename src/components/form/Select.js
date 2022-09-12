import React from 'react'
import styles from './Select.module.css'

const Select = ({ text, name, options, handleOnchange, value}) => {

  return (
    <div className={styles.form_control} >
        <label htmlFor={name}> {text} </label>
        <select 
        name={name} 
        id={name} 
        onChange={handleOnchange}
        value={value || ''}
        >
            <option> Selectione uma opção </option>
            {options.map((opcao) =>{
           return <option  key={opcao.id} value={opcao.id}> {opcao.name} </option> 
            
            })}
        </select>
    </div>
  )
}

export default Select