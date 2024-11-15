"use client"
import LoginForm from '@/app/compoents/LoginForm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const LoginModal = () => {
    const router = useRouter();
     const dialogRef = useRef(null);
    useEffect(()=>{
        dialogRef.current?.showModal()
    },[])
    return (
        <dialog
        ref={dialogRef}
        onClose={()=>router.back()}
        className='border p-4 rounded backdrop:bg-slate-300/50  w-[500px]'
        >
            <button
            className='absolute top-2 right-4 border-none'
            onClick={()=> dialogRef.current?.close()}
            >
                xxx
            </button>
          <LoginForm />
        </dialog>
    );
};
export default LoginModal;