

import {Todo} from "../models/Todo"
import {useContext, useEffect} from "react";
import {Context} from "../context";
import TodoComponent from "./todo";


const Todos:Todo[] = [
    {
        id:1,
        title: 'greetings',
        body: 'hello world',
    },
    {
        id:2,
        title: 'action',
        body: 'travel',
    }
]

export default function TodosList(){
    const {state, dispatch} = useContext(Context)
    useEffect(() => {dispatch({type: 'get', payload: Todos})},[])

    return (
        <div>
            <div>
                {state.todos.length && state.todos.map((e) => <TodoComponent key={e.id} todo={e}></TodoComponent>)}
            </div>
        </div>
    )
}