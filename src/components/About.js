import "../styles/About.scss"
import {useSelector} from "react-redux";
import {styleDarkMode} from "../styles/darkmode/DarkMode";

function About() {
    const isNight = useSelector(state => state.night)
    const theme = styleDarkMode(isNight)

    return (
        <div className="container-fluid" id="main-about" style={theme.bgColor1}>
            <div className="container">
                <h4 id="pronoun" style={theme.fHeadColor2}>Pronoun & Codename</h4>
                <h3 id="code-name"
                    style={theme.fHeadColor1}>He/Him &#129419; LonEr/Disorn &#129419; 孤独な</h3>
                <hr id="line-sep" style={theme.fHeadColor1}/>
                <div className="row row-about">
                    <div className="container col-sm-12 col-md-6 col-lg-6" id="education">
                        <p className="topic-about" style={theme.fColor1}>Education</p>
                        <div className="container con-box">
                            <div className="text-box">
                                <p className="org-name">Internship of summer student training program in NCU Taiwan</p>
                                <small className="year">1 June - 31 July 2018</small>
                                <p className="org-desc">Implemented web application about Kinect(v2) hosting on Heroku
                                    by
                                    using C# and Nodejs to develop frontend and backend with websocket.</p>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Websocket</span>
                                    <span className="tag">NodeJS</span>
                                    <span className="tag">C#</span>
                                    <span className="tag">Heroku</span>
                                </div>
                                <div className="span-tag">
                                    <span className="tag">KinectV2</span>
                                </div>
                            </div>

                        </div>
                        <div className="container con-box">
                            <div className="text-box">
                                <p className="org-name">Kasetsart Univeristy Computer Science</p>
                                <small className="year">2015 - 2019</small>
                                <p className="org-desc">I graduated with a bachelor's degree in Computer Science from
                                    Kasetsart University
                                    Bangkhen , Bangkok .</p>
                                <span className="tag">High School</span>
                            </div>
                        </div>
                    </div>
                    <div className="container col-sm-12 col-md-6 col-lg-6" id="experience">
                        <p className="topic-about" style={theme.fColor1}>Experiences</p>
                        <div className="container con-box">
                            <div className="text-box">
                                <p className="org-name">Working for Accenture Company as Junior and Senior Backend
                                    Developer</p>
                                <small className="year">August 2020 - Present</small>
                                <ul>
                                    <li>To responsible for the project Corporate Portal about transaction management
                                        within a company
                                    </li>
                                    <li>To responsible for the project Maemanee about a merchant management system
                                        integrated with shipping the third party
                                    </li>
                                    <li>Maintained and implemented a new feature on SCB Easy with the part about a
                                        loan
                                    </li>
                                    <li>POC and implemented graceful shutdown when getting the process from Kafka</li>
                                    <li>POC and implemented rate limit by using Envoy filter on Kubernetes</li>
                                    <li>Create test automation script with Robot framework for testing UI and API</li>
                                    <li>Monitoring microservice utilization with Grafana</li>
                                    <li>Supported load test and investigated issue via Jaeger</li>
                                    <li>Investigated and resolved the issue on stage and production environment for all
                                        projects
                                    </li>
                                </ul>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Spring Boot</span>
                                    <span className="tag">Mysql</span>
                                    <span className="tag">Postgres</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Kibana</span>
                                    <span className="tag">AWS S3</span>
                                    <span className="tag">Kubernetes</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">MongoDB</span>
                                    <span className="tag">Redis</span>
                                    <span className="tag">Microservice</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Apache Kafka</span>
                                    <span className="tag">Robot Framework</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Jaeger</span>
                                    <span className="tag">Grafana</span>
                                    <span className="tag">Gitlab</span>
                                    <span className="tag">Jenkins</span>
                                </div>
                            </div>
                        </div>

                        <div className="container con-box">
                            <div className="text-box">
                                <p className="org-name">Working for OnedayCat Company as Junior Backend Developer</p>
                                <small className="year">December 2019 - June 2020</small>
                                <ul>
                                    <li>To responsible for the project about e-commerce connecting with others platform
                                        including Lazada and Shopee
                                    </li>
                                    <li>Designed API by using DDD, CQRS, and Event driven concept</li>
                                    <li>Design database schema on Dynamo DB</li>
                                    <li>Developed the backend part with Node js, Nest js and Typescript with AWS service
                                        including Lambda, S3, API Gateway, SQS, SNS and Cognitio
                                    </li>
                                    <li>Implemented CQRS with Elasticsearch database</li>
                                    <li>Configured Terraform for CI/CD process</li>
                                </ul>

                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Nodejs</span>
                                    <span className="tag">Nestjs</span>
                                    <span className="tag">Typescript</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">DynamoDB</span>
                                    <span className="tag">Amazon S3</span>
                                    <span className="tag">SQS</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">SNS</span>
                                    <span className="tag">Kinesis</span>
                                    <span className="tag">Elasticsearch</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Clean Architecture</span>
                                    <span className="tag">DDD</span>
                                    <span className="tag">Terraform</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">CQRS</span>
                                    <span className="tag">Event Driven</span>
                                    <span className="tag">Cognito</span>
                                </div>

                            </div>
                        </div>

                        <div className="container con-box">
                            <div className="text-box">
                                <p className="org-name">Working for Allianz Technology Company as Junior Backend
                                    Developer</p>
                                <small className="year">July 2019 - November 2019</small>
                                <ul>
                                    <li>Developed the project about chatbot marketplace using Oauth2 for authentication
                                        and Node js . In part of automation into the stages of app deployment (CI/CD
                                        process) used Jenkins and Docker on Openshift
                                    </li>
                                    <li>Migrated Jenkins from on premise server to docker container</li>
                                </ul>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Nodejs</span>
                                    <span className="tag">Mysql</span>
                                    <span className="tag">AzureBot</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Docker</span>
                                    <span className="tag">Jenkins</span>
                                    <span className="tag">Openshift</span>
                                </div>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Swagger</span>
                                    <span className="tag">Linux</span>
                                    <span className="tag">Gitlab</span>
                                </div>
                            </div>
                        </div>

                        <div className="container con-box">
                            <div className="text-box">
                                <p className="org-name">Accenture Hackathon</p>
                                <small className="year">30 -31 March 2019</small>
                                <p className="org-desc">First Runner Up with Accenture Hackathon in topic about how to
                                    use technology to assist disable people who were unemployed</p>
                                <div className="span-tag" id="span-tag-1">
                                    <span className="tag">Html</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">Javascript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;