import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='position-relative bottom-0 d-flex w-100 d-flex justify-content-center bg-light'>
            ©{currentYear}
        </footer>
    )
}