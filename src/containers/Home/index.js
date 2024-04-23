import Banner from "../../components/Banner";
import Content from "../../components/Content";
import Talent from "../../components/talent/talent";

function Home() {
    return (
        <div className="container-home">
        <Banner />
        <Content />
        <Talent />
    </div>
    );
}

export default Home;