import './Skill.scss'
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

function Skill() {
    const [totalStar, setTotalStar] = useState(0);
    const [totalCommit, setTotalCommit] = useState(0);
    const [totalRepo, setTotalRepo] = useState(0);
    const [totalFollower, setTotalFollower] = useState(0);
    const [totalFollowing, setTotalFollowing] = useState(0);


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

    return (
        <>
            <div className="container">
                <div className="skill-div">
                    <span className="skill-header">Skills</span>
                    <hr className="line-skill"/>
                </div>
                <div className="row">
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faCode} className="skill-icon"/></div>
                        <div className="title-2">Languages & Runtime</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">Python, Javascript/TypeScript, Java, C#, Html,CSS, R, Kotlin, Nodejs
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faCubes} className="skill-icon"/></div>
                        <div className="title-2">Libraries & Framework</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">Express, Cheerio, Sequelize, Nest.js, Spring Boot, React, Redux,
                            Jquery,
                            Spring, Pandas, Vader Sentiment Analysis, TextBlob, Django, Robot Framework
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faServer} className="skill-icon"/></div>
                        <div className="title-2">Cloud Infrastructure</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">AWS, Docker, Jenkins, Openshift, Kubernetes, AWS S3, Kinesis, SQS, SNS,
                            Apache Kafka, Heroku, Terraform, AWS EC2, Elastic Bean Stalk
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faDatabase} className="skill-icon"/></div>
                        <div className="title-2">Databases</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">Sqlite, MySQL, MongoDB, DynamoDB, PostgresDB, Redis, Elastic Search
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faChessKnight} className="skill-icon"/></div>
                        <div className="title-2">Fundamentals</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">DDD, Clean Architecture, CQRS, SOLID, CI/CD</div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faToolbox} className="skill-icon"/></div>
                        <div className="title-2">Tools</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">Github, Gitlab, Swagger, Vscode, Intelij, Webstorm, Datagrip, DBeaver,
                            Robo3T, Anaconda, Notion, Postman, Insomnia, Iterm
                        </div>
                    </div>
                    <div className="box-skill col-sm-12 col-md-4 col-lg-4 text-center">
                        <div><FontAwesomeIcon icon={faKiwiBird} className="skill-icon"/></div>
                        <div className="title-2">Other Abilities</div>
                        <hr className="line-box-skill"/>
                        <div className="title-3">Dota2, Writting Blog</div>
                    </div>
                </div>
                <div className="row row-repo justify-content-center">
                    <div className="github-boxl col-sm-12 col-md-5 col-lg-5">
                        <div>
                            <p className="repo">Stats</p>
                            <div className="row">
                                <div className="col-sm-8 col-md-8 col-lg-8">
                                    <div className="row">
                                        <div className="ic-cont col-sm-4 col-md-4 col-lg-4">
                                            <FontAwesomeIcon icon={faStar}/>
                                        </div>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <p> Total Star: {totalStar}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="ic-cont col-sm-4 col-md-4 col-lg-4">
                                            <i className="ic fa-solid fa-code-commit"></i>
                                        </div>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <p>Total Commits: {totalCommit}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="ic-cont col-sm-4 col-md-4 col-lg-4">
                                            <i className="ic fa-solid fa-book-bookmark"></i>
                                        </div>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <p>Total Repos: {totalRepo}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="ic-cont col-sm-4 col-md-4 col-lg-4">
                                            <i className="ic fa-solid fa-people-group"></i>
                                        </div>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <p>Follower: {totalFollower}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="ic-cont col-sm-4 col-md-4 col-lg-4">
                                            <i className="ic fa-solid fa-user-plus"></i>
                                        </div>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <p>Following: {totalFollowing}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="github-cont col-sm-4 col-md-4 col-lg-4">
                                    <i className="fa font-github fa-github"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="github-boxr col-sm-12 col-md-5 col-lg-5">
                        <div>
                            <p className="repo">Top Languages By Commit</p>
                            <div className="git-pie">
                                <Chart type="donut"
                                       series={[12.76, 25.53, 36.17, 4.25, 2.12, 2.12, 2.12,]}
                                       options={{
                                           labels: ['Html', 'Javascript', 'Java', 'Typescript', 'Kotlin', 'Python', 'C#'],
                                           title: {
                                               text: "Programming Language"
                                           },
                                           plotOptions: {
                                               pie: {
                                                   donut: {
                                                       labels: {
                                                           total: {
                                                               show: true,
                                                               fontSize: 30,
                                                               color: '#f90000'
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
        </>
    )
}

export default Skill;