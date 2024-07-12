import {SelectedPage} from "../utils/types.ts";
import {motion} from "framer-motion";
import IconsImg from "../assets/Image.png";
import AboutImgSecurity from "../assets/About-Image-1.svg";
import AboutImgFast from "../assets/About-Image-2.svg";
import AboutImgMerchantTwo from "../assets/About-Image-3.svg";
import AboutImgMerchant from "../assets/About-Image-4.svg";
import AboutBackground from "../assets/About-Background.png";
import PhotoOne from "../assets/Photo.jpg";
import PhotoTwo from "../assets/Photo-1.jpg";
import PhotoThree from "../assets/Photo-2.jpg";
import Star from "../assets/Star.svg";
import Award from "../assets/Award.svg";
import AppExample from "../assets/Example-Img-1.png";
import AppExampleTwo from "../assets/Example-Img-2.png";
import AppExampleThree from "../assets/Example-Img-3.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const StarRating = ({count = 5}) => (
    <div className="flex space-x-2">
        {Array(count).fill(null).map((_, i) => <img key={i} alt="star" src={Star}/>)}
    </div>
);

const AboutUs = ({setSelectedPage}: Props) => {
    return <section id="aboutus" className="mx-auto w-5/6 py-16">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        >
            <div>
                <div className="text-center">
                    <h2 className="text-3xl font-Jost font-semibold text-gray-txt">Why is it <br/>Worth Choosing <span
                        className="text-primary">PrimePay.</span></h2>
                </div>
                <div className="mt-10">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                        <div className="md:col-span-2 p-8 border-bgc rounded-2xl border bg-bgc">
                            <div className="grid md:grid-cols-2 text-center items-center">
                                <div className="text-left">
                                    <h3 className="font-Jost font-medium text-2xl text-primary pb-4">Integration
                                        other</h3>
                                    <p className="font-OpenSans font-normal text-content text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt Laoreet non curabitur gravida
                                        sagittis aliquam bibendum.
                                    </p>
                                </div>
                                {/*Fix background image*/}
                                <div className="relative">
                                    <div className="border bg-opacity-75 rounded-2xl bg-gray-line border-gray-line">
                                        <img alt="social-icons-image" src={IconsImg} className="relative"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 p-8 border-bgc rounded-2xl border bg-bgc">
                            <div>
                                <img src={AboutImgSecurity}/>
                                <h3 className="font-Jost font-medium text-2xl text-primary pt-4">Safe & Security</h3>
                                <p className="font-OpenSans text-content pt-4">Easily integrate with all your need
                                    favorite tools through and APIsing
                                    including automatic
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-6">
                        <div className="p-8 border-bgc rounded-2xl border bg-bgc">
                            <div>
                                <img src={AboutImgMerchant}/>
                                <h3 className="font-Jost font-medium text-2xl text-primary pt-4">Merchant account</h3>
                                <p className="font-OpenSans text-content pt-4">Easily integrate with all your need
                                    favorite tools through and APIsing
                                    including automatic
                                </p>
                            </div>
                        </div>
                        <div className="p-8 border-bgc rounded-2xl border bg-bgc">
                            <div>
                                <img src={AboutImgMerchantTwo}/>
                                <h3 className="font-Jost font-medium text-2xl text-primary pt-4">Merchant account</h3>
                                <p className="font-OpenSans text-content pt-4">Easily integrate with all your need
                                    favorite tools through and APIsing
                                    including automatic
                                </p>
                            </div>
                        </div>
                        <div className="p-8 border-bgc rounded-2xl border bg-bgc">
                            <div>
                                <img src={AboutImgFast}/>
                                <h3 className="font-Jost font-medium text-2xl text-primary pt-4">Fast get paid</h3>
                                <p className="font-OpenSans text-content pt-4">Easily integrate with all your need
                                    favorite tools through and APIsing
                                    including automatic
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="mt-20 relative md:flex flex-col items-center">
            <img alt="About-page-background-bottom" src={AboutBackground} className="absolute max-md:hidden"/>
            <div className="relative md:p-24 md:w-10/12">
                <h3 className="text-center font-Jost font-semibold text-4xl text-white max-md:hidden">
                    "Say goodbye to clutter and
                    <h3 className="text-primary">bounce rates."</h3>
                </h3>
                <div className="mt-12 md:w-3/4 mx-auto">
                    <div className="border border-white bg-white rounded-2xl md:p-12">
                        <div className="md:flex items-center justify-between">
                            <div className="md:flex items-center gap-4">
                                <img alt="team-member-photo" src={PhotoOne} className="rounded-full md:size-1/3"/>
                                <div>
                                    <h5 className="font-Jost font-medium text-primary text-xl">Nattasha</h5>
                                    <h6 className="font-OpenSans text-secondary text-xs">Designer</h6>
                                </div>
                            </div>
                            <div className="max-md:size-1/3"><StarRating/></div>
                        </div>
                        <div className="border bg-gray-line mx-auto my-6"></div>
                        <p className="font-OpenSans text-content">
                            “Our team was able to teach themselves primchat in a day. It's like
                            using a shared email inboxust way more robust looking.” Primchat
                            was the modern what we were looking.
                        </p>
                    </div>
                </div>
                <div className="mt-12 md:w-3/4 mx-auto">
                    <div className="border border-white bg-white rounded-2xl md:p-12">
                        <div className="md:flex items-center justify-between">
                            <div className="md:flex items-center gap-4">
                                <img alt="team-member-photo" src={PhotoTwo} className="rounded-full md:size-1/3"/>
                                <div>
                                    <h5 className="font-Jost font-medium text-primary text-xl">Joe Cook</h5>
                                    <h6 className="font-OpenSans text-secondary text-xs">Developer</h6>
                                </div>
                            </div>
                            <div className="max-md:size-1/3"><StarRating/></div>
                        </div>
                        <div className="border bg-gray-line mx-auto my-6"></div>
                        <p className="font-OpenSans text-content">
                            “Our team was able to teach themselves primchat in a day. It's like
                            using a shared email inboxust way more robust looking.” Primchat
                            was the modern what we were looking.
                        </p>
                    </div>
                </div>
                <div className="mt-12 md:w-3/4 mx-auto">
                    <div className="border border-white bg-white rounded-2xl md:p-12">
                        <div className="md:flex items-center justify-between">
                            <div className="md:flex items-center gap-4">
                                <img alt="team-member-photo" src={PhotoThree} className="rounded-full md:size-1/4"/>
                                <div>
                                    <h5 className="font-Jost font-medium text-primary text-xl">Jessica Jobs</h5>
                                    <h6 className="font-OpenSans text-secondary text-xs">Product Designer at
                                        Uber.INC</h6>
                                </div>
                            </div>
                            <div className="max-md:size-1/3"><StarRating/></div>
                        </div>
                        <div className="border bg-gray-line mx-auto my-6"></div>
                        <p className="font-OpenSans text-content">
                            “Our team was able to teach themselves primchat in a day. It's like
                            using a shared email inboxust way more robust looking.” Primchat
                            was the modern what we were looking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:mt-32 pt-20 md:flex items-center justify-between max-md:text-center">
            <div
                className="flex items-center justify-center p-6 rounded-3xl shadow-lg bg-gray-line bg-opacity-50 mt-10">
                <img alt="awards" src={Award} className="w-8/12"/>
            </div>
            <div className="space-y-2 mt-12 text-center">
                <h2 className="font-Jost font-semibold text-5xl">4.5/5</h2>
                <div className="flex justify-center">
                    <StarRating/>
                </div>
                <p className="font-OpenSans font-semibold text-sm">On The IOS App Store</p>
            </div>
            <div className="space-y-2 mt-12 text-center">
                <h2 className="font-Jost font-semibold text-5xl">4.8/5</h2>
                <div className="flex justify-center">
                    <StarRating/>
                </div>
                <p className="font-OpenSans font-semibold text-sm">On The Android Play Store</p>
            </div>
        </div>

        <div className="md:mt-24 mt-12">
            <div className="text-center">
                <h2 className="font-Jost font-semibold text-content text-3xl">Feels great in low-light Mood<br/>
                    for your <span className="text-primary">eye Protection</span>
                </h2>
            </div>
            <div className="flex max-md:mt-8">
                <div>
                    <div><img alt="app-example" src={AppExample}/></div>
                </div>
                <div>
                    <div><img alt="app-example" src={AppExampleTwo}/></div>
                </div>
                <div>
                    <div><img alt="app-example" src={AppExampleThree}/></div>
                </div>
            </div>
            <div className="md:flex justify-between items-center max-md:mt-8">
                <p className="font-OpenSans text-sm max-md:hidden">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                    <p>Eiusmod Tempor Incididunt Dolore Magna Aliqua. </p>
                </p>
                <div
                    className="flex items-center justify-between pl-4 pr-1 text-xs border border-gray-line rounded-full w-32 h-10 max-md:mt-8">
                    <h5 className="font-semibold font-OpenSans text-secondary">Dark</h5>
                    <div className="rounded-full bg-orange-300 p-2 px-3">
                        <h5 className="font-OpenSans font-semibold">Light</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default AboutUs;