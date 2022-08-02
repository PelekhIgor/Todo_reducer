import {useContext, useState} from "react";
import {Context} from "../context";

export default function CreateTodo(){

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const {dispatch} = useContext(Context)
    return (
        <div>
            <input
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input
                type='text'
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            />
            <button onClick={()=>{
                const n= {body , title, id: Date.now()}
                dispatch({type:'create', payload: n})
                setTitle('')
                setBody('')
            }}>create</button>
        </div>
    )
}