import '../styles/Skill.scss'
import axios from "axios";
import React, {useEffect, useState} from 'react';
import {
    faChessKnight,
    faCode,
    faCubes,
    faDatabase,
    faKiwiBird,
    faServer,
    faToolbox,
    faStar
} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Chart from 'react-apexcharts'
import {useSelector} from "react-redux";
import {styleDarkMode} from "../styles/darkmode/DarkMode";
import {mockUserProfile} from "../api/UserService";

function Skill() {
    const [totalStar, setTotalStar] = useState(0);
    const [totalCommit, setTotalCommit] = useState(0);
    const [totalRepo, setTotalRepo] = useState(0);
    const [totalFollower, setTotalFollower] = useState(0);
    const [totalFollowing, setTotalFollowing] = useState(0);
    const isNight = useSelector(state => state.night)
    const theme = styleDarkMode(isNight)


    const GET_AUTHORIZE_HEADER_WITH_TOKEN = (token) => {
        return {
            headers: {
                'Authorization': "Bearer " + token
            }
        }
    }

    useEffect(() => {
        async function getDetailRepo() {
            const api = axios.create({
                baseURL: "https://api.github.com"
            })

            const token = process.env.ACCESS_TOKEN
            const getStar = await api.get("/users/brightkut/starred", GET_AUTHORIZE_HEADER_WITH_TOKEN(token))
            const getCommits = await api.get("/search/commits?q=author:brightkut", GET_AUTHORIZE_HEADER_WITH_TOKEN(token));
            const getRepo = await api.get("/search/repositories?q=user:brightkut", GET_AUTHORIZE_HEADER_WITH_TOKEN(token));
            const getUser = await api.get("/user", GET_AUTHORIZE_HEADER_WITH_TOKEN(token));

            setTotalStar(getStar.data.length)
            setTotalCommit(getCommits.data.total_count)
            setTotalRepo(getRepo.data.total_count)
            setTotalFollower(getUser.data.followers)
            setTotalFollowing(getUser.data.following)
        }

        getDetailRepo()

    }, []);

    const styleMorning = {
        backgroundColor: "white",
        paddingBottom: "2 rem"
    }
    const styleNight = {
        backgroundColor: "#343a40",
        paddingBottom: "2rem"
    }

    return (
        <div className="container-fluid pb-5" style={isNight ? styleNight : styleMorning}>
            <div className="container" id="skills" style={isNight ? styleNight : styleMorning}>
                <div className="skill-div">
                    <span className="skill-header" style={theme.fColor1}>Skills</span>
                    <hr className="line-skill" style={theme.fColor1}/>
                </div>
                <div className="row">
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faCode} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Languages & Runtime</div>
                        <hr className="line-box-skill" style={theme.fColor2}/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.languages}
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faCubes} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Libraries & Framework</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.libraries}
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faServer} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Cloud Infrastructure</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.clouds}
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faDatabase} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Databases</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.databases}
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faChessKnight} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Fundamentals</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.fundamentals}
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faToolbox} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Tools</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.tools}
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faKiwiBird} className="skill-icon"/></div>
                        <div className="title-2" style={theme.fColor2}>Other Abilities</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3" style={theme.fColor2}>{mockUserProfile.skills.abilities}</div>
                    </div>
                </div>
                <div className="row row-repo justify-content-center">
                    <div className="github-boxl col-sm-12 col-md-5 col-lg-5">
                        <div>
                            <p className="repo" style={theme.fColor2}>Stats</p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 col-lg-8">
                                        <div className="row">
                                            <div className="ic-cont col-4 col-sm-4 col-md-4 col-lg-4"
                                                 style={theme.fColor2}>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </div>
                                            <div className="col-8 col-sm-8 col-md-8 col-lg-8"
                                                 style={theme.fColor2}>
                                                <p> Total Star: {totalStar}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="ic-cont col-4 col-sm-4 col-md-4 col-lg-4"
                                                 style={theme.fColor2}>
                                                <i className="ic fa-solid fa-code-commit"></i>
                                            </div>
                                            <div className="col-8 col-sm-8 col-md-8 col-lg-8"
                                                 style={theme.fColor2}>
                                                <p>Total Commits: {totalCommit}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="ic-cont col-4 col-sm-4 col-md-4 col-lg-4"
                                                 style={theme.fColor2}>
                                                <i className="ic fa-solid fa-book-bookmark"></i>
                                            </div>
                                            <div className="col-8 col-sm-8 col-md-8 col-lg-8"
                                                 style={theme.fColor2}>
                                                <p>Total Repos: {totalRepo}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="ic-cont col-4 col-sm-4 col-md-4 col-lg-4"
                                                 style={theme.fColor2}>
                                                <i className="ic fa-solid fa-people-group"></i>
                                            </div>
                                            <div className="col-8 col-sm-8 col-md-8 col-lg-8"
                                                 style={theme.fColor2}>
                                                <p>Follower: {totalFollower}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="ic-cont col-4 col-sm-4 col-md-4 col-lg-4"
                                                 style={theme.fColor2}>
                                                <i className="ic fa-solid fa-user-plus"></i>
                                            </div>
                                            <div className="col-8 col-sm-8 col-md-8 col-lg-8"
                                                 style={theme.fColor2}>
                                                <p>Following: {totalFollowing}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="github-cont col-4 col-sm-4 col-md-4 col-lg-4"
                                         style={theme.fColor2}>
                                        <i className="fa font-github fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="github-boxr col-sm-12 col-md-5 col-lg-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <p className="repo" style={theme.fColor2}>Top Languages By
                                        Commit</p>
                                    <Chart type="donut"
                                           series={[12.76, 25.53, 36.17, 4.25, 2.12, 2.12, 2.12,]}
                                           width={350}
                                           height={200}
                                           options={{
                                               labels: ['Html', 'Javascript', 'Java', 'Typescript', 'Kotlin', 'Python', 'C#'],
                                               chart: {
                                                   foreColor: isNight ? "white" : "black"
                                               },
                                               title: {
                                                   text: "Programming Language",
                                                   style: {
                                                       color: isNight ? "white" : "black"
                                                   }
                                               },
                                               plotOptions: {
                                                   pie: {
                                                       donut: {
                                                           size: "50%",
                                                           labels: {
                                                               total: {
                                                                   show: true,
                                                                   fontSize: 30,
                                                                   color: isNight ? "black" : "white"
                                                               }
                                                           }
                                                       }
                                                   }
                                               },
                                               dataLabels: {
                                                   enabled: true
                                               }
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;