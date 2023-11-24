import "../styles/About.scss"
import {useSelector} from "react-redux";
import {styleDarkMode} from "../styles/darkmode/DarkMode";
import {mockUserProfile} from "../api/UserService";

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
                        {mockUserProfile.educations.map((education, index) => (
                            <div key={index} className="container con-box">
                                <div className="text-box">
                                    <p className="org-name">{education.topic}</p>
                                    <small className="year">{education.period}</small>
                                    <p className="org-desc">{education.details}</p>
                                    {education.learnings.map((learn, learnIndex) => (
                                        <div key={learnIndex} className="span-tag" id={`span-tag-${learnIndex + 1}`}>
                                            {
                                                Array.isArray(learn.key) ? (
                                                    learn.key.map((l, lIndex) => (
                                                        <span key={lIndex} className="tag">{l}</span>
                                                ))
                                            ) : (
                                                <span className="tag">{learn.key}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="container col-sm-12 col-md-6 col-lg-6" id="experience">
                        <p className="topic-about" style={theme.fColor1}>Experiences</p>
                            {mockUserProfile.experiences.map((exp, index) =>{
                                return <div key={index} className="container con-box"><div className="text-box">
                                    <p className="org-name">{exp.topic}</p>
                                    <small className="year">{exp.period}</small>
                                    <ul>
                                        {exp.tasks.map((t, i)=>{
                                            return <li key={i} >{t}</li>
                                        })}
                                    </ul>
                                    {exp.learnings.map((learn, learnIndex) => (
                                        <div key={learnIndex} className="span-tag" id="span-tag-1">
                                            {
                                                Array.isArray(learn.key) ? (
                                                    learn.key.map((l, lIndex) => (
                                                        <span key={lIndex} className="tag">{l}</span>
                                                    ))
                                                ) : (
                                                    <span className="tag">{learn.key}</span>
                                                )}
                                        </div>
                                    ))}
                                </div>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;