import React, { FC } from 'react'

type TTodosProps = {
    list:{id:number, todo:string}[]
}

const Todos:FC<TTodosProps> = ({list}) => {
    return (
    <div>{list.map((item) => <p key = {item.id}>{item.todo}</p>)}</div>
  )
}

export default Todos