import TodosList from "./list";
import CreateTodo from "./create";
import "./layout_style.css"
import {useContext} from "react";
import {Context} from "../context";

export default function Layout(){
    const {state, dispatch} = useContext(Context)
    return(
        <>
            <div className='container'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <CreateTodo></CreateTodo>
                    <button onClick={() => {dispatch({type:'role',payload: state.role === 'admin'?'user':'admin'})}}>{state.role}</button>
                </div>
                <TodosList></TodosList>
            </div>
        </>
    )
}