import React from 'react';
import { useState } from 'react';
// import styles from './UserForm.module.css/';

const UserForm = () => {
    const [firstName, setFirstName ] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastName ] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail ] = useState("");
    const [emailError, setEmailError ] = useState("");
    const [password, setPassword ] = useState("");
    const [passwordError, setPasswordError ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");
    const [confirmError, setConfirmError ] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirst = e => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstError("First name must be at least two characters");
        }else{
            setFirstError("");
        }
    }
    const handleLast = e => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastError("Last name must be at least two characters.");
        }else{
            setLastError("");
        }
    }
    const handleEmail = e => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters.");
        }else{
            setEmailError("");
        }
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters.")
        }else{
            setPasswordError("");
        }
    }
    const handleConfirm = e => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length !== password.length ){
            console.log(e.target.value + " vs " + { password });
            setConfirmError("Confirm password must match password. ")
        }else{
            setConfirmError("");
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        if(!passwordError && !confirmError && !firstError && !lastError && !emailError){
            if(firstName && lastName && email && password && confirmPassword){
                const newUser = { firstName, lastName, email, password, confirmPassword };
                console.log("Welcome", newUser);
                setHasBeenSubmitted( true );
            }else{

                if(!firstName){
                    setFirstError("First name is required.");
                }
                if(!lastName){
                    setLastError("Last name is required.");
                }
                if(!email){
                    setEmailError("Email is required.");
                }
                if(!password){
                    setPasswordError("Password is required");
                }
                if(!confirmPassword){
                    setConfirmError("Confirm Password is required.");
                }
            }
        }
    }
    
    const formMessage = () => {
        if( hasBeenSubmitted) {
            return "Thanks for your input."
        }else{
            return "Please submit the form. "
        }
    }
    return (
        <div class="container">
            <div className="main">
                <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div className="input">
                    <label>First Name:</label>
                    <input type="text" onChange={ handleFirst } placeholder="Enter First Name" />
                    {
                        firstError ? 
                        <p style = {{color: 'red'}}>{ firstError }</p> :
                        ''
                    }
                </div>
                <div className="input">
                    <label>Last Name:</label>
                    <input type="text" onChange={ handleLast } placeholder="Enter Last Name"/>
                    {
                        lastError ? 
                        <p style={{color: 'red'}}>{lastError}</p>:
                        ''
                    }
                </div>
                <div className="input">
                    <label>Email Address:</label>
                    <input type="text" onChange={ handleEmail } placeholder="Enter Email"/>
                    {
                        emailError ? 
                        <p style={{color: 'red'}}>{emailError}</p>:
                        ''
                    }
                </div>
                <div className="input">
                    <label>Password:</label>
                    <input type="password" onChange={ handlePassword } placeholder="Enter Password"/>
                    {
                        passwordError ? 
                        <p style={{color: 'red'}}>{ passwordError }</p>:
                        ''
                    }
                </div>
                <div className="input">
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ handleConfirm } placeholder="Re-Enter Password"/>
                    {
                        confirmError ? 
                        <p style={{color: 'red'}}>{ confirmError }</p>:
                        ''
                    }
                </div>
                <button type="submit">Submit Form</button>
                </form>
            </div>
            <div className="results">
            </div>
            {
                hasBeenSubmitted ?
                    <p>First Name: { firstName }</p> :
                    <p></p>
            }
            {
                hasBeenSubmitted ?
                    <p>Last Name: { lastName }</p> :
                    <p></p>
            }
            {
                hasBeenSubmitted ?
                    <p>Email: { email }</p> :
                    <p></p>
            }
            {
                hasBeenSubmitted ?
                    <p>Password { password }</p> :
                    <p></p>
            }
            {
                hasBeenSubmitted ?
                    <p>Confirm Password: { confirmPassword }</p> :
                    <p></p>
            }
        </div>
        
    )
}
export default UserForm;