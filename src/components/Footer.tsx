import BackgroundFooter from "../assets/Background_Footer.svg";
import Logo from "../assets/Logo-1.svg";
import InstagramIcon from "../assets/Insta.svg";
import FacebookIcon from "../assets/Fb.svg";
import TwitterIcon from "../assets/Twiter.svg";
import LinkedIcon from "../assets/In.svg";
import YoutubeIcon from "../assets/Youtube.svg";

const Footer = () => {
    return (
        <footer id="footer" className="w-11/12 mx-auto relative h-full mt-32 flex flex-col">
            <div className="absolute inset-0 bg-bgc rounded-3xl">
                <div
                    className="p-12 flex justify-between items-center pt-20 max-md:hidden absolute rounded-2xl w-11/12 mx-auto -top-[20%] left-0 right-0 h-1/3 overflow-hidden">
                    <img
                        alt="background"
                        src={BackgroundFooter}
                        className="mt-12 absolute top-0 left-0"
                    />
                    <div className="z-10">
                        <h2 className="text-primary font-Jost font-semibold text-3xl">Take control of your<br />
                            personal <span className="text-white">finances today</span>
                        </h2>
                    </div>
                    <div className="z-10">
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-8 py-4 rounded-full text-content font-OpenSans"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-8 py-4 rounded-full font-Inter font-semibold text-sm"
                            >SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <div className="md:flex py-40">
                    <div>
                        <img alt="logo" src={Logo} className="h-1/3"/>
                        <p className="font-OpenSans text-sm">Lorem ipsum dolor sitonsecteturadipisicing elit
                            sed do eiusmod temporincididunt Laoreet non
                            sagittis aliquam bibendum.</p>
                        <div className="flex gap-6 h-1/6">
                            <img alt="Instagram" src={InstagramIcon} />
                            <img alt="Facebook" src={FacebookIcon} />
                            <img alt="Twitter" src={TwitterIcon} />
                            <img alt="LinkedIn" src={LinkedIcon} />
                            <img alt="Youtube" src={YoutubeIcon} />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="mt-auto text-center p-4 z-10">
                <h4>Copyright © Primarily | Designed by VictorFlow Templates </h4>
            </div>
        </footer>
    )
}

export default Footer;