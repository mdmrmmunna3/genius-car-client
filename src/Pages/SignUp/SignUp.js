import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const SignUp = () => {

    const { createUser, setUser, signInGoogle, userUpdate } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
                userUpdate(name)
            })
            .catch((error) => console.error(error))
        form.reset();

    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content gird md:grid-cols-2 gap-20 flex-col lg:flex-row ">
                <div className="text-center ">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={signInGoogle} className="btn btn-outline btn-primary w-full"> <span className='mr-2'>Sign Up With Google</span> <FaGoogle></FaGoogle> </button>
                            <br />
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already Have an account? <Link to='/login' className='text-orange-600 font-bold'>LogIn</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;