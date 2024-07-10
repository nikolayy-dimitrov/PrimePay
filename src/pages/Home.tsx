import { SelectedPage } from "../utils/types.ts";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HeroBackground from "../assets/Background-4.png";
import PhoneImg from "../assets/Image-1.png";
import MessageImg from "../assets/Icon-Message.svg";
import MoneyImg from "../assets/Icon-Cash.svg";
import CardImg from "../assets/Icon-Card.svg";
import CreateAccIcon from "../assets/Create-Account-Icon.svg";
import AttachIcon from "../assets/Attach-Account-Icon.svg";
import SendIcon from "../assets/Send-M-Icon.svg";
import BackgroundThird from "../assets/Background-Img-3-section.svg";
import MobileImgTwo from "../assets/Mobile-Image-Home-Example-2.svg";
import PlayIcon from "../assets/Play.svg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {

    return <section id="home" className="gap-16 py-10 md:pb-0 bg-white">
        {/* Hero section */}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className="mt-12 z-10">
                <div className="z-20 absolute inset-0 flex justify-center items-center -mt-14">
                    <div className="text-center max-md:p-10">
                        <h2 className="font-semibold font-Jost text-5xl">Ready To Launch Your
                            <h2> Online <span className="text-white max-md:text-secondary">Payment</span> App </h2>
                        </h2>
                        <div className="flex items-center justify-center pt-6">
                            <p className="font-OpenSans font-semibold">A Simple Yet Modern Solution To Showcase Your
                                App</p>
                        </div>
                        <div className="mt-10">
                            <AnchorLink
                                className="text-bgc text-sm font-Inter font-semibold rounded-3xl bg-primary px-8 py-4 relative"
                                onClick={() => setSelectedPage(SelectedPage.Home)}
                                href={`#${SelectedPage.Home}`}
                            >GET STARTED</AnchorLink>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-end justify-center h-screen">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img alt="home-page-hero-background" src={HeroBackground}
                             className="w-11/12 max-md:hidden"/>
                        <img alt="money-icon" src={MoneyImg}
                             className="absolute size-52 left-[25%] bottom-[10%] max-md:hidden"/>
                        <img alt="money-icon" src={CardImg}
                             className="absolute size-36 right-[25%] bottom-[5%] max-md:hidden"/>
                    </div>
                    <div className="z-20 -mb-96 ml-4 h-full flex items-center justify-center">
                        <img alt="phone-app-image" src={PhoneImg} className="h-5/6 absolute"/>
                    </div>
                </div>
            </div>
        </motion.div>
        {/* 2nd section */}
        <div className="flex items-center justify-center py-20 mt-72">
            <div className="absolute bg-bgc w-11/12 rounded-3xl md:h-5/6">
                <div className="z-10 absolute left-[28%] top-[5%]">
                    <img alt="message-icon" src={MessageImg} className="max-md:hidden size-32"/>
                </div>
                <div className="flex items-end justify-center h-full">
                    <div className="grid md:grid-cols-3 bottom-10 gap-8 pb-32 p-20">
                        <div className="flex flex-col items-center">
                            <img alt="create-account-icon" src={CreateAccIcon} className="mb-4"/>
                            <h4 className="font-Jost font-medium text-center mb-2">Create An Account</h4>
                            <p className="font-OpenSans text-center">Aspernatur sit adipisci quaerat unde Redug Lagre
                                dolor sit amets consectetus. gencies define their new business</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img alt="attach-acc-icon" src={AttachIcon} className="mb-4"/>
                            <h4 className="font-Jost font-medium text-center mb-2">Attach Bank Accounts</h4>
                            <p className="font-OpenSans text-center">Aspernatur sit adipisci quaerat unde Redug Lagre
                                dolor sit amets consectetus. gencies define their new business</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img alt="attach-acc-icon" src={SendIcon} className="mb-4"/>
                            <h4 className="font-Jost font-medium text-center mb-2">Send Money</h4>
                            <p className="font-OpenSans text-center">Aspernatur sit adipisci quaerat unde Redug Lagre
                                dolor sit amets consectetus. gencies define their new business</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* 3rd section */}
        <div className="py-20 mt-60">
            <div className="flex flex-col items-center">
                <div className="w-10/12 max-w-6xl mx-auto mb-16">
                    <div className="flex gap-8">
                        <div className="flex-1 font-Jost font-semibold text-4xl">
                            <h2 className="text-gray-txt">Send and receive<h2 className="text-primary">payments
                                <span className="text-gray-txt"> easily</span></h2></h2>
                            <p className="font-OpenSans font-normal text-xs text-balance mt-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit,<br /> sed do eiusmod tempor incididunt</p>
                            <p className="font-OpenSans font-normal text-xs text-balance mt-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
                                sed do eiusmod tempor incididunt ut labore et dolore<br /> magna aliqua.</p>
                            <div className="border-gray-line mt-6 rounded-3xl w-1/2 border bg-gray-line"></div>
                            <div className="flex items-center gap-4 mt-6">
                                <div
                                    className="shadow flex justify-center items-center border border-orange-300 bg-orange-300 rounded-full h-16 w-16">
                                    <img alt="play-icon" src={PlayIcon} className="size-5"/>
                                </div>
                                <div>
                                    <h5 className="text-sm font-OpenSans font-bold">Lorem Ipsum Dolor Sit</h5>
                                    <p className="text-xs font-OpenSans font-normal text-secondary">Amet, Consectetur →</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <img alt="background-image" src={BackgroundThird}
                                 className="rounded-[30px] w-4/5 h-auto"/>
                        </div>
                    </div>
                </div>
                <div className="z-20 ml-[28%] h-full flex items-end  justify-start">
                    <img alt="example-mobile-image" src={MobileImgTwo} className="-mb-72 absolute h-5/6"/>
                </div>
                <div className="p-16 w-10/12 bg-bgc rounded-3xl h-40 mb-20 flex items-center">
                    <div className="grid grid-cols-3 w-2/3">
                        <div className="text-left">
                            <h4 className="font-Jost font-semibold text-xl">12.000 +</h4>
                            <p className="font-OpenSans text-xs">Downloaded</p>
                        </div>
                        <div className="text-left">
                            <h4 className="font-Jost font-semibold text-xl">$10 M</h4>
                            <p className="font-OpenSans text-xs">Transactions</p>
                        </div>
                        <div className="text-left">
                            <h4 className="font-Jost font-semibold text-xl">1.000 +</h4>
                            <p className="font-OpenSans text-xs">Feedback</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="rounded-full border-gray-line w-10/12 border bg-gray-line"></div>
        </div>
    </section>
}

export default Home;