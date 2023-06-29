import AboutProjectHeader from "../AboutProjectHeader/AboutProjectHeader";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

import './Main.css';
import Footer from "../Footer/Footer";

function Main(props) {

    return (
        <>
            <AboutProjectHeader />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;
