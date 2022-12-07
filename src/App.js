import './App.scss';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";

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
        </>
    );
}

export default App;
