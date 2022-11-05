import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="h-20 mb-12 pt-12 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end mr-4">

                {
                    user?.uid ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* <img src="https://placeimg.com/80/80/people" alt='' /> */}
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a href='/' className="justify-between">
                                        Profile
                                        <span className="badge"></span>
                                    </a>
                                </li>
                                <li><Link onClick={logOut}>Logout</Link></li>
                            </ul>
                        </div>
                        :
                        <> <Link to='/login' className='mr-2 text-2xl'><FaUserCircle></FaUserCircle></Link> </>
                }
                <button className="btn btn-outline btn-warning">Appoinment</button>
            </div>
        </div>
    );
};

export default Header;