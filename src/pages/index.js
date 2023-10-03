import Layout from "../components/sections/Layout";
// import Loader from "../components/sections/Loader";
import LandingSection from "../components/sections/landingsection";
import Clients from "../components/sections/clients";
import Pricing from "../components/sections/pricing"
import Contact from "../components/sections/contact";
import Covers from '../components/sections/Covers';
import Footer from "../components/sections/footer";
// import ToTop from "../components/sections/ToTop";
import WhatsUpIcon from "../components/sections/Whatsupicon";

const Index = () => (

    <Layout 
        pageTitle="Ariel Producion Landing Page" 
        colorSchema="/assets/colors/blue.css" 
    > 
        <LandingSection />
        <Clients />
        <Covers />
        <Pricing />
        <Contact />
        <Footer />
        {/* <ToTop /> */}
        <WhatsUpIcon />
    </Layout>

)

export default Index;