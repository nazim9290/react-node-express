import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Updateuser = () => {
    const [user,setUser]=useState({})
    const {id}=useParams()

useEffect(()=>{
    const url=`http://localhost:8080/users/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data))
},[])

const updateName=e=>{
    setUser({ ...user, [e.target.name]: e.target.value })
    // console.log({[e.target.name]: e.target.value});
    // const updatename=e.target.value;
    // const updateUser={name:updatename,email:user.email}
    // setUser(updateUser)
}
// const updateEmail=e=>{
//     // setUser({ ...user, [e.target.name]: e.target.value })
//     // console.log({[e.target.name]: e.target.value});
//     const updateemail=e.target.value;
//     const updateUser={name:user.name,email:updateemail}
//     setUser(updateUser)
// }

    const handleUpdate=e=>{
        e.preventDefault();
        console.log(user);
    const url=`http://localhost:8080/users/${id}`
    fetch(url,{
        method:"PUT",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    }

    return (
        <div>
            <h1>update user : {id}</h1>
            <h1>name : {user.name}</h1>
            <form onClick={handleUpdate}>
                <input onChange={updateName} type="text" value={user.name || ""} name="name" />
                <input onChange={updateName} type="email" value={user.email || ""} name="email" />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Updateuser;