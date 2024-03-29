import { useState } from "react";
import style from "./App.module.css";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

function App() {
  const [list, setList] = useState<{id:number, todo:string}[]>([]);
  const addTodo = (todo:string) => {
    setList((prev) => [...prev, {id: Math.random(), todo}])
  }
  return (
    <div className={style.main}>
    <Form addTodo={addTodo}/>
    <Todos list = {list}/>
  </div>
  )
}

export default App;
