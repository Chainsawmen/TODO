import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

type TFormProps = {
    addTodo:(todo:string)=>void    
}

const Form:FC<TFormProps> = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodo(todo)
        setTodo('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange}/>
        <button>Сохранить</button>
    </form>
  )
}

export default Form