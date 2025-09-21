import { createContext, useContext, useState } from "react";

const AppContext =  createContext()
const AppContextProvider = ({children})=>{
    const [arr, setArr] = useState([])
    const [task, setTask] = useState({name:"",desc:"",id:""})
    const [editObj, setEditObj] = useState(null)
    const obj = {arr,setArr,task,setTask,editObj,setEditObj}
    return <AppContext.Provider value={obj}>{children}</AppContext.Provider>
}
const getData = ()=>{
    return useContext(AppContext)
}
export {AppContextProvider,getData}