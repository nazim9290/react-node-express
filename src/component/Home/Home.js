import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Users from '../Users/Users';

const Home = () => {
    const [users,setUsers]=useState([])
    const nameRef = useRef("")
    const emailRef=useRef("")
    const history=useHistory()

const btnSubmit=(e)=>{
    e.preventDefault()
    const name=nameRef.current.value;
    const email=emailRef.current.value;
    const newuser={name,email}

fetch(`http://localhost:8080/users`,{
    method:"post",
    headers:{
        'content-type':"application/json"
    },
    body:JSON.stringify(newuser)
})
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert("data uplod succesfull")
        e.target.reset()
        }
    })
}

    useEffect(()=>{
      fetch("http://localhost:8080/users")
      .then(res=>res.json())
      .then(data=>setUsers(data))
    },[users]);

    const handledilete=id=>{
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:8080/users/${id}`;
            fetch(url, {
                method:"DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
                <h1>hello users {users.length}</h1>
                <form onSubmit={btnSubmit}>
                    <input type="text" ref={nameRef} name="name" id="" placeholder="your name"/>
                    <input type="email" ref={emailRef} name="email" id="" placeholder="your email"/>
                    <input type="submit" value="Submit" />
                </form>
                {
                    users.map(user=><Users
                    key={user._id}
                    user={user}
                    handledilete={()=>handledilete(user._id)}
                    ></Users>)
                }
        </div>
    );
};

export default Home;