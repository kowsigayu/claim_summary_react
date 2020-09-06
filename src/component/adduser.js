import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Adduser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        id: "",
        name: "",
        claimno: "",
        claimtype: "",
        claimprogram: "",
        startdate: "",
        enddate: ""
    });

    const { id, name, claimno, claimtype, claimprogram, startdate, enddate } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/viewclaim");
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form control-lg"
                            name="id"
                            placeholder="Enter the Employee Id"
                            value={id}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form control-lg"
                            name="name"
                            placeholder="Enter the Employee Name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form control-lg"
                            name="claimno"
                            placeholder="Enter the Claim Number"
                            value={claimno}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select name="claimtype" value={claimtype} onChange={e => onInputChange(e)}>
                            <option value="select">select</option>
                            <option value="Submitted">Submitted</option>
                            <option value="Received">Received</option>
                            <option value="Pending">Pending</option>
                            <option value="MoreInfoRequired">More Info Required</option>
                            <option value="Denied">Denied</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form control-lg"
                            name="claimprogram"
                            placeholder="Enter the Claim Program"
                            value={claimprogram}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="date"
                            className="form-control form control-lg"
                            name="startdate"
                            placeholder="Enter the Start Date"
                            value={startdate}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="date"
                            className="form-control form control-lg"
                            name="enddate"
                            placeholder="Enter the End date"
                            value={enddate}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Adduser;
