import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkImg from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregisterd';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if (phone.length > 10) {
        //     <div className="alert alert-warning shadow-lg">
        //         <div>
        //             <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        //             <span>Warning: Phone number should be 10 characters or longer</span>
        //         </div>
        //     </div>
        // }

        // else {

        // }

        fetch('https://genius-car-server-seven-puce.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    // form reset
                    form.reset();
                }
                 
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <div className=" w-full mt-16 ">
                <div id="slide1" className="relative w-full">
                    <div className='carousel-img'>
                        <img src={checkImg} className="w-full" alt="" />
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-32  top-1/2">
                        <h2 className='text-white text-5xl font-bold'>CheckOut</h2>
                    </div>
                </div>
            </div>

            <form onSubmit={handlePlaceOrder} className='my-32 p-24 bg-slate-100 rounded-lg'>
                <h2 className="text-3xl">You are about to order: {title}</h2>
                <h4 className="text-2xl pb-4">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " required />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your Meassage" required ></textarea>
                <input className='btn btn-outline btn-success w-full mt-5' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default CheckOut;