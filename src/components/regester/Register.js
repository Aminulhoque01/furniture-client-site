import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser}= useContext(AuthContext);

    const [error,setError]= useState('');


    const handleForm =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        const confirm= form.confirm.value;
        

        if(password.length < 6){
            toast('please at list 6 crater');
        }

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            toast('successful createUser')
            console.log(user);
            form.reset('');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
        
    }

    return (
        <div>
            <div className="hero min-h-screen  bg-accent">
                <div className="hero-content flex-col lg:">
                    <div className="text-center lg">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    
                    </div>
                    <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                
                                <span className="label-text">Name</span>
                                
                                <input name="name" type="text" placeholder="fullName" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                
                                    <span className="label-text">Email</span>
                                
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                
                                    <span className="label-text">Password</span>
                               
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                             
                                    <span className="label-text">Confirm Password</span>
                              
                                <input name='confirm' type="password" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </Form>
                        <p>You have a account? <Link to='/login' className='text-primary'>Login your account</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;