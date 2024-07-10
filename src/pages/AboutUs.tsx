import {SelectedPage} from "../utils/types.ts";
import {motion} from "framer-motion";
import IconsImg from "../assets/Image.png";
import AboutImgSecurity from "../assets/About-Image-1.svg";
import AboutImgFast from "../assets/About-Image-2.svg";
import AboutImgMerchantTwo from "../assets/About-Image-3.svg";
import AboutImgMerchant from "../assets/About-Image-4.svg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({setSelectedPage}: Props) => {
    return <section id="featured" className="mx-auto w-5/6 py-16">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        >
            <div className="w-full">
                <div className="text-center">
                    <h2 className="text-3xl font-Jost font-semibold text-gray-txt">Why is it <br />Worth Choosing <span className="text-primary">PrimePay.</span></h2>
                </div>
                <div className="mt-10">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                        <div className="md:col-span-2 p-8 border-bgc rounded-2xl border bg-bgc">
                            <div className="grid md:grid-cols-2 text-center items-center">
                                <div className="text-left">
                                    <h3 className="font-Jost font-medium text-2xl text-primary pb-4">Integration other</h3>
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
                                <img src={AboutImgSecurity} />
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
    </section>
}

export default AboutUs;