import React,{useEffect,useState} from 'react'
import axios from "axios"
export const App = () => {
  const [data,setData]=useState({"user":"","id":0})
  const {user,id}=data
  const onc=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const ons=(e)=>{
    e.preventDefault();

    if(user.length<1)
    {
      alert("name shoulf be >1")
    }
    else if(id<1)
    {
      alert("id should be > 1")
    }
    else{
      console.log(data.user[0],":",data.id[0]);
      axios.post("https://nikhilpro2-da07a-default-rtdb.firebaseio.com/student1.json",data).then(()=>alert("data posted successfully"))
    }
  }
  
const oncbut=()=>{
  axios.get("https://nikhilpro2-da07a-default-rtdb.firebaseio.com/student1.json").then((res)=>{
    console.log(res);
    var o=res.data
    for(let k in o){
      console.log(o[k]["id"][0],":",o[k]["user"][0]);
    }


    //console.log(res.data["-NL11gacsTq1dYcCWct9"]
     // .id[0],":",res.data["-NL11gacsTq1dYcCWct9"]
      //.user[0]);
  })
}
  return (
    <div>
      <form align="center" style={{marginTop:"100px"}} onSubmit={ons}>
        <input type="text" placeholder='name' name="user" onChange={onc}/><br/>
        <input type="number" placeholder='id' name="id" onChange={onc} /><br/>
        <input type="submit" /><br/>
        {user}:{id}
              </form>

              <button onClick={oncbut}>click to retrieve data</button>
            
    </div>
  )
  
}

export default App