import '../styles/NavBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faChartLine, faCode, faUser} from "@fortawesome/fontawesome-free-solid";
import {useDispatch, useSelector} from "react-redux";
import {NIGHT_ACTION} from "../actions/types";
import {styleDarkMode} from "../styles/darkmode/DarkMode";

function NavBar() {
    const isNight = useSelector(state => state.night)
    const dispatch = useDispatch()
    const theme = styleDarkMode(isNight)

    function changeNightMode() {
        dispatch({
            type: NIGHT_ACTION,
        })
    }

    function scrollElement(event){
        const element = document.getElementById(event.target.getAttribute("topic"));
        if (element) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg  border-bottom border-grey border-1"
             id = "navbar"
             style={theme.bgColor1}>
            <a className="navbar-brand ml-5 me-0 pl-5" style={theme.fColor1} href="#">LonEr.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-3">
                        <a className="nav-link " href="#" style={theme.fColor1} onClick={scrollElement} topic="main-about" >
                            <FontAwesomeIcon icon={faUser} onClick={scrollElement} topic="main-about"/> About
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#" style={theme.fColor1} onClick={scrollElement} topic="skills">
                            <FontAwesomeIcon icon={faChartLine} onClick={scrollElement} topic="skills"/> Skills
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#" style={theme.fColor1} onClick={scrollElement} topic="main-port">
                            <FontAwesomeIcon icon={faCode} onClick={scrollElement} topic="main-port"/> Portfolio
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#" style={theme.fColor1} onClick={scrollElement} topic="contact">
                            <FontAwesomeIcon icon={faAddressBook} onClick={scrollElement} topic="contact"/> Contact
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" onClick={changeNightMode}
                           style={theme.fColor1}><FontAwesomeIcon
                            icon={theme.navbarIcon}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;