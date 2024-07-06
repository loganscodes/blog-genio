import { PostProvider } from '../context/PostContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <PostProvider>
            <Navbar />
            {children}
            <Footer />
        </PostProvider>
    )
}

export default DashboardLayout