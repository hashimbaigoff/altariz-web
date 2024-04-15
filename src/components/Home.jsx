import Header from "./Header/Header";
import WelcomePage from "./Header/Welcomepage";

import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";

function Home() {
    return (
        <>
            <Header />
            <WelcomePage/>        
            <Navbar/>
        <Footer/>
        </>
    );
}

export default Home;