import './Profile.scss'
import {loadSnowPreset} from "tsparticles-preset-snow";
import Particles from "react-particles"

function Profile() {

    // this customizes the component tsParticles installation
    const customInit = async (engine) => {
        await loadSnowPreset(engine);
    }

    const options = {
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#BEBEBE"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#fffff",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        },
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
    };

    return (
        <div className="container-fluid">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                        <img className="profile" src="/profile.jpg"/>
                        <br/>
                        <br/>
                        <h4 className="role">Software Developer</h4>
                    </div>
                    <div  className="box2 col-sm-12 col-md-12 col-lg-6 justify-content-center">
                        <div className="text">
                            <Particles options={options} init={customInit}/>
                            <div className="container-fluid" id="text-box-profile">
                                <h4>Who am I ?</h4>
                                <p>I'm a teeny Backend Developer who want to learn new thing with 25 years old. For my
                                    free time
                                    I
                                    love more
                                    to coding and play game and my favorite game is Dota2. You ask me if you want to
                                    play haha.
                                    I am
                                    not believe in word
                                    "Genius" but I believe with "Try hard".</p>
                                <div className="group-btn">
                                    <button><i className="fa fa-github"></i></button>
                                    <button><i className="fa fa-linkedin-square"></i></button>
                                    <button><i className="fa fa-steam"></i></button>
                                    <button><i className="fa fa-instagram"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;