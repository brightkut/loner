import {useSelector} from "react-redux";

function Footer() {
    const isNight = useSelector(state => state.night)

    return (
        <section style={{backgroundColor: isNight ? "#262C30" : "#f8f9fa", height: "60px"}}></section>
    )
}

export default Footer;