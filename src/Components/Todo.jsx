import { MdEdit } from "react-icons/md";
import {useState } from "react";
const Todo = () => {

const [task, setTask] = useState("");
const [desc, setDesc] = useState("");
const [arr, setArr] = useState([]);
const [edit, setEdit] = useState(null);
const handleForm = (e)=>{
  const obj = {task,desc,id:arr.length+1}
  e.preventDefault();

  if(edit){
  //  let newArr = arr.map(item=> item.id == edit.id ? {}); 
  }
  else if(task && desc){
    setArr([...arr,obj])
    setTask("")
    setDesc("")
  }
}
const deleteTask = (id)=>{
  const del = arr.filter(item=>item.id != id);
  setArr(del);  
}
const editObj = (id)=>{
  let edited = arr.find(item=>item.id == id)
  setTask(edited.task)
  setDesc(edited.desc)
  setEdit(edited) 
}

  return (
  <>
      <h1 className="text-center bg-blue-700 text-white py-3 text-3xl font-bold">
        Get Complete To Complete Your Daily Goals 
      </h1>
  <div className="flex h-[90vh] justify-center items-center w-[90%] mx-auto gap-2">
      <div className="bg-blue-400 w-[90%] md:w-1/2 py-20 mx-auto  flex-1">
        <h1 className="text-white text-2xl text-center underline decoration-2 underline-offset-[12px] ">
          Daily Goals
        </h1>
        <form action="" className="flex flex-col gap-5 mt-10 w-[80%] mx-auto" onSubmit={handleForm}>
          <input
            type="text"
            className="flex-1 p-2"
            name="name"
            placeholder="Enter Task"
          onChange={(e)=>setTask(e.target.value)}
          value={task}/>
          <textarea
            name="desc"
            className="flex-1 p-2"
            placeholder="Description"
             onChange={(e)=>setDesc(e.target.value)} value={desc}>
            </textarea> 
          <button className="flex-1 bg-black text-white py-2">{edit?"Update":"Submit"}</button>
        </form>
      </div>
      <div className={`flex flex-col  mx-auto bg-blue-400 px-5 ${arr.length>0 && "py-6"} flex-1`}> 
      {
        arr.map(item=>( 
          <div key={item.id} className="flex items-center mb-2 bg-white p-2 rounded-md shadow-xl text-black">
          <div className="flex-grow">
            <p className="text-2xl font-medium capitalize">
                {item.task}
           </p>
            <p className="text-gray-700">
              {item.desc}
            </p>
          </div>
          
        <button className="rounded-full w-7 h-7  text-white bg-[crimson] hover:bg-red-700 text-2xl leading-[28px]" onClick={()=>deleteTask(item.id)}> 
            -
        </button>
        <button className="rounded-full px-1 w-7 h-7 text-white bg-green-400 hover:bg-red-700 ml-2  text-xl leading-[28px]" onClick={()=>editObj(item.id)}>
        <MdEdit />
        </button>
        </div>
        
))
      }
      </div>
    </div>
    </>
  );
};
export default Todo;
