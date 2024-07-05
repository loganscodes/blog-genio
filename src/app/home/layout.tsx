import React from 'react'
import { PostProvider } from '../context/PostContext'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <PostProvider>
            <div className='max-w-[1440px] m-auto'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </PostProvider>
    )
}

export default DashboardLayout