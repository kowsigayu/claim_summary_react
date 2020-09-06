import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'

const UpdateClaim = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        id: "",
        name: "",
        claimno: "",
        claimtype: "",
        claimprogram: "",
        startdate: "",
        enddate: ""
    });

    const { name, claimno, claimtype, claimprogram, startdate, enddate} = user;
    
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/viewclaim");
    };

    const loadUser = async e => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <h2>Update Claim Information</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group row">
                    <label for="" className="col-sm-2 col-form-label">Employee Id:</label>
                    <div className="col-sm-10">
                        <input type="text" readonly 
                        className="form-control-plaintext" 
                        name="id" 
                        value={id} 
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="" className="col-sm-2 col-form-label">Employee Name:</label>
                    <div className="col-sm-10">
                        <input type="text" readonly 
                        className="form-control-plaintext" 
                        name="name"
                        value={name}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="" className="col-sm-2 col-form-label">Claim Number:</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        className="form-control" 
                        id="claimNo" 
                        name="claimno" 
                        placeholder="Enter the Claim Number" 
                        value={claimno}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-sm-2" for="">Claim Type:</label>
                    <div className="col-sm-10">
                        <select name="claimtype" value={claimtype}  onChange={e => onInputChange(e)}>
                            <option value="Submitted">Submitted</option>
                            <option value="Received">Received</option>
                            <option value="Pending">Pending</option>
                            <option value="MoreInfoRequired">More Info Required</option>
                            <option value="Denied">Denied</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="" className="col-sm-2 col-form-label">Claim Program:</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        className="form-control" 
                        id="claimProgram" 
                        name="claimprogram" 
                        placeholder="Enter the Claim Program" 
                        value={claimprogram}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="" className="col-sm-2 col-form-label">Claim Start Date:</label>
                    <div className="col-sm-10">
                        <input type="date" 
                        className="form-control" 
                        id="startDate" 
                        name="startdate" 
                        placeholder="Enter the Start Date" 
                        value={startdate}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="" className="col-sm-2 col-form-label">Claim End Date:</label>
                    <div className="col-sm-10">
                        <input type="date" 
                        className="form-control" 
                        id="endDate" 
                        name="enddate" 
                        placeholder="Enter the End date" 
                        value={enddate}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                  {/* <button className="btn btn-outline-primary mr-4">Cancel</button> */}
                  <button type="submit"className="btn btn-primary">Update</button>
                </div>
              </div>
            </form>
        </div>
    );
};

export default UpdateClaim;
