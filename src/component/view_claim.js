import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const ViewClaim = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="App">
            <h2>Claim Summary</h2>
            <table class="table table-hover table-">
                <thead>
                    <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Claim Number</th>
                        <th scope="col">Claim Type</th>
                        <th scope="col">Claim Program</th>
                        <th scope="col">Claim Start Date</th>
                        <th scope="col">Claim End Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.claimno}</td>
                                <td>{user.claimtype}</td>
                                <td>{user.claimprogram}</td>
                                <td>{user.startdate}</td>
                                <td>{user.enddate}</td>
                                <td>
                                    <Link className="btn btn-outline-success mr-2" to={`/updateclaim/${user.id}`}>Update</Link>
                                    <Link className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewClaim;
