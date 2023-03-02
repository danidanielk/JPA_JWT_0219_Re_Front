import { useEffect, useState } from "react"

function Test2({list}){
    // const [name, setName] = useState('')
    // const [age, setAge] = useState(0)
  
    const [title,setTitle] = useState('')
    const [photo,setPhoto] = useState('')
useEffect(()=>{
console.log(list)
    // setName(list.name)
    // setAge(list.age)
setTitle(list?.title || '')
setPhoto(list?.photo || '')
},[list])

    return(
        <><>

{/* {name}{age} */}
{title}{photo}
        </></>
    )
}
export default Test2