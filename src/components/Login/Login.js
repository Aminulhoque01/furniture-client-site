import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const{loginUser,googleSingIn}= useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handlerLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        
        const email =form.email.value;
        const password = form.password.value;
        
        console.log(email,password);


        loginUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.rest('')

        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleGoogle = ()=>{
        googleSingIn(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success("successful google login");
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div>
             <div className="hero min-h-screen  bg-accent">
                <div className="hero-content flex-col lg:">
                    <div className="text-center lg">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handlerLogin} className="card-body">
                            
                              
                                 <span className="label-text">Email</span>
                              
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            
                          
                               
                                <span className="label-text">Password</span>
                               
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                               
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </Form>
                        <p>New to Doctors portal <Link to='/register' className='text-primary'>create a New Account</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogle} className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;