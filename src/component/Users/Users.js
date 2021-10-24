import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const {name,email,_id}=props.user;

    // const handledilet=id=>{
    //     fetch("http://localhost:8080/users",{
    //         method:"DELETE"
    //     }).then(res=>res.json())
    //     .then(data=>setUsers(data))
    // }
    return (
        <div>
            <ul>
                <li>{name} :: {email} </li>
                <Link to={`/users/update/${_id}`}> <button>update</button> </Link>
                            
                <button onClick={()=>props.handledilete({_id})} >delete</button>
            </ul>
        </div>
    );
};

export default Users;