import {faMoon, faSun} from "@fortawesome/fontawesome-free-solid";

export const styleDarkMode = (isNight)=> {
       if(isNight){
           return {
                bgColor1: {
                    backgroundColor: "#262C30",
                },
                bgColor2: {
                    backgroundColor: "#343a40",
                },
                fColor1: {
                    color: "#D3D2D2"
                },
               fColor2: {
                   color: "white"
               },
                fHeadColor1:{
                    color: "#B09AF378"
                },
                fHeadColor2:{
                    color: "#D3D2D2"
                },
                navbarIcon: faMoon
           }
       }

       return {
           bgColor1: {
               backgroundColor: "#f8f9fa",
           },
           bgColor2: {
               backgroundColor: "white",
           },
           fColor1: {
               color: "#535A5E"
           },
           fColor2: {
               color: "black"
           },
           fHeadColor1:{
               color: "mediumblue"
           },
           fHeadColor2:{
               color: "#535A5E"
           },
           navbarIcon: faSun
       }
}