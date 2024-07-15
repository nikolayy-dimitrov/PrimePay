import BackgroundBanner from "../assets/Background-4.png";

const Footer = () => {

    return (
        <footer id="footer" className="w-11/12 mx-auto">
            <div className="absolute bg-bgc h-96 w-11/12 rounded-3xl">

            </div>
            <div className="w-11/12 mx-auto rounded-3xl absolute">
                <img alt="background" src={BackgroundBanner} className="h-96 w-11/12 mx-auto"/>
            </div>
        </footer>
    )
}

export default Footer;