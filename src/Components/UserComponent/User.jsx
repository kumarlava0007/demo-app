import axios from 'axios';
import React, { useEffect, useState } from 'react';

function User(props) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUser(res.data)
        }, (errorMsg)=>{
            alert("error during fetching data")
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>User Details</h3>
                {
                user.length > 0? <table className="table table-hover mt-5">
                    <thead>
                        <tr className="table-dark">
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(function(data, index) {
                                return <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                </tr>
                                
                            })
                        }
                    </tbody>
                </table>: <h2>Does not have data</h2>
            }

                </div>

            </div>
            
        </div>
    );
}

export default User;