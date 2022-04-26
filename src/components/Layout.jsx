import { Toaster } from 'react-hot-toast';
import React from 'react'

import Navbar from './Navbar';

export default function Layout({ children, navbarClass, bodyClass, contentClass }) {
    return (
        <>
            <div name='toaster'><Toaster /></div>
            <div className={bodyClass ? `body ${bodyClass}` : "body"}>
                <Navbar navbarClass={navbarClass} />
                <div className={contentClass ? `page-content ${contentClass}` : "page-content"}>
                    {children}
                </div>
            </div>
        </>
    )
}
