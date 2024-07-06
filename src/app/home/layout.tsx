'use client'
import { PostProvider } from '../context/PostContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <PostProvider>
            <Navbar />
                {children}
            <Footer />
        </PostProvider>
    )
}

export default DashboardLayout