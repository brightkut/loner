import './NavBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faChartLine, faCode, faMoon, faSun, faUser} from "@fortawesome/fontawesome-free-solid";
import {useState} from "react";

function NavBar() {

    const [isNight, setIsNight] = useState(false);

    function changeNightMode() {
        setIsNight(!isNight);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-grey border-1">
            <div className="container-fluid">
                <a className="navbar-brand ml-5 me-0 pl-5" href="#">LonEr.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-3">
                            <a className="nav-link " href="#"><FontAwesomeIcon icon={faUser}/> about</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#"><FontAwesomeIcon
                                icon={faChartLine}/> skills</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faCode}/> portfolio</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faAddressBook}/> contact</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#" onClick={changeNightMode}><FontAwesomeIcon
                                icon={isNight ? faMoon : faSun}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;