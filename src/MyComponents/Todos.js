import React from 'react';
import {Todoitem} from "../MyComponents/Todoitem";

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  let Style={
    color:"blue",
    fontSize:"4vh"
  }
    return (
        <div className="container" style={myStyle}>
          <h3 className="my-3" style={Style} >My Todos List</h3>
          {props.todos.length===0?"No todos to display":
          props.todos.map((todo)=>{
              return(<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    )
          })
          }
       
        </div>
    )
}
