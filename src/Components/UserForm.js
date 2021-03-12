import React, { Components } from 'react';
import { useState } from 'react';
// import styles from './UserForm.module.css/';

const UserForm = () => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    }
    return (
        <div class="container">
            <div className="main">
                <form onSubmit={ createUser }>
                <div className="input">
                    <label>First Name:</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)} />
                </div>
                <div className="input">
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div className="input">
                    <label>Email Address:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <label>Password:</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div className="input">
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                </div>
                {/* <button type="submit">Submit Form</button> */}
                </form>
            </div>
            <div className="results">
                <h5>Results:</h5>
            </div>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </div>
        
    )
}
export default UserForm;