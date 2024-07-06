import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




const DashboardLayout = ({ children }: { children: React.ReactNode }) => {


    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>

    )
}

export default DashboardLayout