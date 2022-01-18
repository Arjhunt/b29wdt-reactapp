import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function UserList() {

    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])

    let fetchUsers= async()=>{
        try {
            let userData = await axios.get("http://localhost:3001/users");
            setUserList(userData.data)
        } catch (error) {
            console.log(error);
        }
    }
    let handleDelete= async(id)=>{
        try {
            let result= window.confirm("Are you sure you want to delete")
            if(result){
            await axios.delete(`http://localhost:3001/user/${id}`)
            alert("user deleted")
            fetchUsers()
            }
        } catch (error) {
            console.log("errr");
        } 
    }

    return (
        <>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3> User list</h3>
                </div>
                <div className='col-lg-6 text-end'>
                    <Link to={"/create"}><button className='btn btn-primary '>Create User</button></Link>
                </div>


                <table class="table table-success table-striped">
                    <tbody>
                        {
                            userList.map((user)=>{
                                return <tr>
                                    <th scope='row'>{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit-user/${user._id}`}>
                                        <button className='btn btn-sm btn-primary'>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDelete(user._id)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserList
