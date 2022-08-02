import {useState} from "react";

export default function UpdateTodo(){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
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
            <button onClick={()=>null}>create</button>
        </div>
    )
}