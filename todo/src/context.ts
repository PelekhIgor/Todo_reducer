import {createContext} from "react";
import {initialState} from "./store/state";
import {Action} from "./store/reducer";
const initialContext ={
    state: initialState,
    dispatch: (a:Action) => {}

}
export const Context = createContext(initialContext)