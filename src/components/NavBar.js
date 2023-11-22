import '../styles/NavBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faChartLine, faCode, faMoon, faSun, faUser} from "@fortawesome/fontawesome-free-solid";
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

    // function scrollElement(id){
    //     console.log(id.target.getAttribute("topic"))
    //     const element = document.getElementById(id.target.getAttribute("topic"))
    //     element.scrollIntoView(true);
    // }

    return (
        <nav className="navbar fixed-top navbar-expand-lg  border-bottom border-grey border-1"
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
                        {/*<a className="nav-link " onClick={scrollElement}  topic="ab-page"*/}
                        {/*   style={theme.fColor1}><FontAwesomeIcon icon={faUser}/> about</a>*/}
                        <a className="nav-link " style={theme.fColor1}><FontAwesomeIcon icon={faUser}/> about</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#skills"
                           style={theme.fColor1}><FontAwesomeIcon
                            icon={faChartLine}/> skills</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#main-port"
                           style={theme.fColor1}><FontAwesomeIcon icon={faCode}/> portfolio</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#contact"
                           style={theme.fColor1}><FontAwesomeIcon icon={faAddressBook}/> contact</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#" onClick={changeNightMode}
                           style={theme.fColor1}><FontAwesomeIcon
                            icon={theme.navbarIcon}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;