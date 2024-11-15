import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-9 py-4'>
            <Link href="/"> Home</Link>
            <Link href="/store"> Store</Link>
            <Link href="/about"> About</Link>
            <Link href="login"> Login</Link>
        </div>
    );
};


export default Header;