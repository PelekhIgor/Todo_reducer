import {Todo} from "../models/Todo"
import {useContext, useState} from "react";
import {Context} from "../context";
import "./todo.css"

export default function TodoComponent({todo}:{todo: Todo}){ // принимает пропс в виде todo
    const {state, dispatch} = useContext(Context)
    const [editMode, setMod] = useState(false)
    const [title, setTitle] = useState(todo.title)
    const [body, setBody] = useState(todo.body,)

    return (
        <div className="item">
            <div>{editMode ? <div>
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}
                    />
                    <input type='text' value={body} onChange={(e)=>setBody(e.target.value)}
                    />
                    <button onClick={()=>{
                        dispatch({type:'update', payload:{id:todo.id,title,body}})
                        setMod(false)
                    }}>save</button>
                </div>
                : [ <div>{todo.title}</div>, <div>{todo.body}</div>] }</div>
            <div>
            <button className="btn" onClick={()=>setMod(!editMode) }>edit</button>
            {
                state.role === 'admin'? <button className="btn" onClick={()=>dispatch({type:'delete', payload:todo.id})}>delete</button>:''
            }
        </div>
        </div>
    )
}