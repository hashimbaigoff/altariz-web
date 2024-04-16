import Header from "./Header/Header";
import WelcomePage from "./Header/Welcomepage";

import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <WelcomePage />
            <Footer />
        </>
    );
}

export default Home;