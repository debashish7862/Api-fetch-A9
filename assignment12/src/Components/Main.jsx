import './Main.css'
import MyImage from'./table.png'
import ManImage from'./man.png'
import { useState } from 'react'

export default function Main() {


    const[user,setUser]=useState([])


const getUser=()=>{
    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setUser(data.results)
       
    })

}

console.log(user)















  return (
   <>
   <div className="mainBody">
    <div className="left">
        <img src={MyImage} alt="image" />
       

    </div>
    <div className='middle'> 
    <button onClick={getUser}>CLICK ME</button>
    </div>
    
    <div className="right">
    <img src={ManImage} alt="image" />


    </div>
    
   </div>



{
    user.length>0 &&
 <table>
    <thead>
        <tr>
        <th>USER IMAGE</th>
        <th>NAME</th>
        <th>GENDER</th>
        <th>EMAIL</th>
        <th>CITY</th>
        </tr>
    </thead>
   
<tbody>




   {
   user.map((ele)=>{
    return<tr>
        <td><img src={ele.picture.thumbnail}alt="" /></td>
        <td>{ele.name.title}{" "}{ele.name.first}{" "}{ele.name.last}</td>
        <td>{ele.gender}</td>
        <td>{ele.email}</td>
        <td>{ele.location.city}</td>
   
     
    </tr>

   })
}
</tbody>
</table>
}
</>
  )
}

