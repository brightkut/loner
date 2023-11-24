import '../styles/Portfolio.scss'
import React from "react";
import {useSelector} from "react-redux";
import {styleDarkMode} from "../styles/darkmode/DarkMode";
import {mockUserProfile} from "../api/UserService";

function Portfolio() {
    const isNight = useSelector(state => state.night)
    const theme = styleDarkMode(isNight)

    return (
        <div className="container-fluid" id="main-port" style={theme.bgColor1}>
            <div className="container">
                <div className="port-div">
                    <span className="port-header" style={theme.fHeadColor2}>Portfolio</span>
                    <hr className="line-port" style={theme.fHeadColor2}/>
                    <p style={{
                        fontSize: "20px",
                        fontFamily: "BlinkMacSystemFont",
                        color: theme.fHeadColor2.color
                    }}>My Blog / Website</p>

                    <div className="row py-5">
                        {
                            mockUserProfile.portfolio.map((portfolio)=>{
                                return <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <div className="card h-100">
                                        <img src={portfolio.imageUrl} className="card-img-top card-img" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{portfolio.title}</h5>
                                            <p className="card-text">{portfolio.description}</p>
                                            <a href={portfolio.url} className="btn btn-secondary">{portfolio.buttonName}</a>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;