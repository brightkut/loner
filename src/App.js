import './styles/App.scss';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <NavBar/>
            <div className="container-fluid profile-main">
                <Profile/>
            </div>
            <div className="container-fluid about-main" id ="ab-page">
                <About/>
            </div>
            <div className="container-fluid">
                <Skill/>
            </div>
            <div className="container-fluid">
                <Portfolio/>
            </div>
            <div className="container-fluid">
                <Contact/>
            </div>
            <div className="container-fluid">
                <Footer/>
            </div>
        </>
    );
}

export default App;
