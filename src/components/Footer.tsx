import Logo from "../assets/Logo-1.svg";
import InstagramIcon from "../assets/Insta.svg";
import FacebookIcon from "../assets/Fb.svg";
import TwitterIcon from "../assets/Twiter.svg";
import LinkedIcon from "../assets/In.svg";
import YoutubeIcon from "../assets/Youtube.svg";

const Footer = () => {
    return (
        <footer id="footer" className="w-full mx-auto mt-32 bg-white relative">
            <div className="w-11/12 mx-auto relative">
                {/* Top div with background image */}
                <div className="max-md:hidden w-11/12 mx-auto bg-footer-bg rounded-3xl p-14 flex justify-between items-center absolute top-0 left-0 right-0 -mt-24 z-10">
                    <h2 className="text-primary font-Jost font-semibold text-3xl">
                        Take control of your<br />
                        personal <span className="text-white">finances today</span>
                    </h2>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-12 py-4 rounded-full text-content font-OpenSans"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white px-10 py-4 rounded-full font-Inter font-semibold text-sm"
                        >SUBSCRIBE</button>
                    </form>
                </div>

                {/* Gray background div */}
                <div className="grid md:grid-cols-5 grid-cols-1 max-md:space-y-16 gap-2 py-16 px-16 bg-bgc rounded-3xl md:pt-40 pt-24 relative z-0">
                    <div>
                        <img alt="logo" src={Logo} className="h-10 mb-4"/>
                        <p className="text-content font-OpenSans text-sm mb-6">
                            Lorem ipsum dolor sitonsecteturadipisicing elit
                            sed do eiusmod temporincididunt Laoreet non
                            sagittis aliquam bibendum.
                        </p>
                        <div className="flex gap-6">
                            <a><img alt="Instagram" src={InstagramIcon} className="w-6 h-6" /></a>
                            <a><img alt="Facebook" src={FacebookIcon} className="w-6 h-6" /></a>
                            <a><img alt="Twitter" src={TwitterIcon} className="w-6 h-6"/></a>
                            <a><img alt="LinkedIn" src={LinkedIcon} className="w-6 h-6"/></a>
                            <a><img alt="Youtube" src={YoutubeIcon} className="w-6 h-6"/></a>
                        </div>
                    </div>
                    <div className="ml-20 h-[90%] bg-[#C4C4C4] w-0.5 text-center max-md:hidden rounded-full"></div>
                    <div>
                        <h3 className="text-primary font-medium font-Jost text-lg mb-4">Menu</h3>
                        <ul className="space-y-2 text-content font-OpenSans">
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>How it Work</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-primary font-medium font-Jost text-lg mb-4">Utility pages</h3>
                        <ul className="space-y-2 text-content font-OpenSans">
                            <li>Style guide</li>
                            <li>Password protected</li>
                            <li>404 Not found</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-primary font-medium font-Jost text-lg mb-4">Address</h3>
                        <p className="text-content mb-4 font-OpenSans">
                            1700 W Blancke St, kiyev<br />
                            port south USA, America
                        </p>
                        <p className="text-content mb-6">
                            +3255 456 789<br />
                            mail@primepay.com
                        </p>
                        <button className="bg-secondary text-white font-Inter font-semibold py-3 px-8 rounded-full hover:bg-primary transition duration-200">
                            GET A QUOTE
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center py-4">
                <p className="text-content font-OpenSans">Copyright © <b>Primarily</b> | Designed by VictorFlow Templates</p>
            </div>
        </footer>
    )
}

export default Footer;