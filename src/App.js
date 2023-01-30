import './App.scss';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <>
            <NavBar/>
            <div className="container-fluid profile-main">
                <Profile/>
            </div>
            <div className="container-fluid about-main">
                <About/>
            </div>
            <div className="container-fluid">
                <Skill/>
            </div>
            <div className="container-fluid">
                <Portfolio />
            </div>
        </>
    );
}

export default App;
