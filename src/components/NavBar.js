import '../styles/NavBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faChartLine, faCode, faMoon, faSun, faUser} from "@fortawesome/fontawesome-free-solid";
import {useDispatch, useSelector} from "react-redux";
import {NIGHT_ACTION} from "../actions/types";

function NavBar() {
    const isNight = useSelector(state => state.night)
    const dispatch = useDispatch()

    function changeNightMode() {
        dispatch({
            type: NIGHT_ACTION,
        })
    }


    const styleMorning = {
        backgroundColor: "#f8f9fa",
    }
    const styleNight = {
        backgroundColor: "#262C30",
    }

    const fontMorning = {
        color: "#535A5E"
    }
    const fontNight = {
        color: "#D3D2D2"
    }

    return (
        <nav className="navbar navbar-expand-lg  border-bottom border-grey border-1"
             style={isNight ? styleNight : styleMorning}>
            <a className="navbar-brand ml-5 me-0 pl-5" style={isNight ? fontNight : fontMorning} href="#">LonEr.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-3">
                        <a className="nav-link " href="#main-about"
                           style={isNight ? fontNight : fontMorning}><FontAwesomeIcon icon={faUser}/> about</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#skills"
                           style={isNight ? fontNight : fontMorning}><FontAwesomeIcon
                            icon={faChartLine}/> skills</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#main-port"
                           style={isNight ? fontNight : fontMorning}><FontAwesomeIcon icon={faCode}/> portfolio</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#contact"
                           style={isNight ? fontNight : fontMorning}><FontAwesomeIcon icon={faAddressBook}/> contact</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#" onClick={changeNightMode}
                           style={isNight ? fontNight : fontMorning}><FontAwesomeIcon
                            icon={isNight ? faMoon : faSun}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;