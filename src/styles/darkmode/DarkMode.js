import {faMoon, faSun} from "@fortawesome/fontawesome-free-solid";

export const styleDarkMode = (isNight)=> {
       if(isNight){
           return {
                navbarBackgroundColor: {
                    backgroundColor: "#262C30",
                },
                navbarFontcolor: {
                    color: "#D3D2D2"
                },
                navbarIcon: faMoon
           }
       }

       return {
           navbarBackgroundColor: {
               backgroundColor: "#f8f9fa",
           },
           navbarFontcolor: {
               color: "#535A5E"
           },
           navbarIcon: faSun
       }
}