import { useEffect, useState } from 'react';
import arr from '../Components/imageData';
import { twMerge } from 'tailwind-merge';
const FilterGelry = () => {
  const [collection, setCollection] = useState([])
  const [active, setActive] = useState("all")
  useEffect(() => {
    setCollection([...new Set(arr.map(item=>item.cat))])
  }, [])
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-pink-400 gap-3'>
      <h1 className='text-white text-4xl'>Filterable Gallery</h1>
      <div className='flex gap-3'>
        <button className={twMerge(`bg-blue-400 px-8 py-2 text-white`, active == "all"?"bg-blue-900":"")} onClick={()=>setActive("all")}>All</button>
        {
          collection.map(item=>(
            <button className={twMerge(`bg-blue-400 px-8 py-2 text-white`, active == item?"bg-blue-900":"")} key={item} 
            onClick={()=>setActive(item)}>{item}</button>
          ))
        }
      </div>
      <div className="flex justify-center flex-wrap gap-3">
        {
          arr.map(val=>(
            <img src={val.img} alt="" key={val.id}
        className={twMerge(`basis-[250px] object-cover h-52 scale-x-0 duration-500 transition-transform absolute`,(active == val.cat || active == "all")?"scale-x-100 static":"")}/>
          ))
        }
      </div>
    </div>
  )
}

export default FilterGelry;
