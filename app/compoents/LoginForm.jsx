import React from 'react';

const LoginForm = () => {
    return (
        <div className='max-w-[600px] w-full mx-auto py-20'>
             <h2>Login page..............</h2>
               <input type="text" placeholder='email please' className='border-2 border-red-600 h-11 mb-5 block' />
               <input type="text" placeholder='password please' className='border-2 border-red-600 h-11 block' />
               <button>Login</button>
        </div>

    );
};

export default LoginForm;