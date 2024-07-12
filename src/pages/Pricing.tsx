import { motion } from "framer-motion";
import {SelectedPage} from "../utils/types.ts";
import Check from "../assets/Check_Clean.svg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({setSelectedPage}: Props) => {
    return <section id="pricing" className="py-16 mx-auto w-5/6 md:mt-8">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
        >
            <div>
                <h2 className="text-3xl text-gray-txt font-Jost font-semibold text-center">
                    Our payment services
                    <h2 className="text-primary">worldwide</h2>
                </h2>
                <div className="md:flex items-center justify-between gap-8 mt-12 max-md:space-y-6">
                {/*Pricing option #1*/}
                    <div className="bg-[#F2F2F2] rounded-2xl p-8 basis-1/3">
                        <div className="bg-[#FFC173] p-8 rounded-xl flex items-center justify-between gap-24">
                            <h3 className="font-bold font-Jost text-primary text-4xl">Basic</h3>
                            <img alt="check" src={Check} />
                        </div>
                        <div className="flex items-center justify-between p-2 mt-2 font-Jost font-medium text-primary">
                            <h4 className="text-3xl">$10.00</h4>
                            <h6>Month</h6>
                        </div>
                        <div className="bg-white rounded-xl">
                            <ul className="text-content font-OpenSans px-8 py-4 space-y-4">
                                <li>Modern Design</li>
                                <li>Easy to Customize</li>
                                <li>Quickly Set Up A Website</li>
                                <li>Another Feature</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                        </div>
                        <div
                            className="rounded-full bg-[#D7D7D7] text-center p-6 mt-4
                            font-Inter font-semibold text-primary
                            hover:bg-primary hover:text-white hover:cursor-pointer
                            ">
                            <h4>GET STARTED</h4>
                        </div>
                    </div>
                    {/*Pricing option #2*/}
                    <div className="bg-[#F2F2F2] rounded-2xl p-8 basis-1/3">
                        <div className="bg-secondary p-8 rounded-xl flex items-center justify-between gap-24">
                            <h3 className="font-bold font-Jost text-white text-4xl">Standard</h3>
                            <div>
                                <img alt="check" src={Check} />
                                <img alt="check" src={Check} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-2 mt-2 font-Jost font-medium text-primary">
                            <h4 className="text-3xl">$19.00</h4>
                            <h6>Month</h6>
                        </div>
                        <div className="bg-white rounded-xl">
                            <ul className="text-content font-OpenSans px-8 py-4 space-y-4">
                                <li>Modern Design</li>
                                <li>Easy to Customize</li>
                                <li>Quickly Set Up A Website</li>
                                <li>Another Feature</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                        </div>
                        <div
                            className="rounded-full bg-[#D7D7D7] text-center p-6 mt-4
                            font-Inter font-semibold text-primary
                            hover:bg-primary hover:text-white hover:cursor-pointer
                            ">
                            <h4>GET STARTED</h4>
                        </div>
                    </div>
                    {/*Pricing option #3*/}
                    <div className="bg-[#F2F2F2] rounded-2xl p-8 basis-1/3">
                        <div className="bg-[#FFC173] p-8 rounded-xl flex items-center justify-between gap-24">
                            <h3 className="font-bold font-Jost text-primary text-4xl">Premium</h3>
                            <div className="flex">
                                <img alt="check" src={Check} />
                                <img alt="check" src={Check} />
                                <img alt="check" src={Check} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-2 mt-2 font-Jost font-medium text-primary">
                            <h4 className="text-3xl">$35.00</h4>
                            <h6>Month</h6>
                        </div>
                        <div className="bg-white rounded-xl">
                            <ul className="text-content font-OpenSans px-8 py-4 space-y-4">
                                <li>Modern Design</li>
                                <li>Easy to Customize</li>
                                <li>Quickly Set Up A Website</li>
                                <li>Another Feature</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                        </div>
                        <div
                            className="rounded-full bg-[#D7D7D7] text-center p-6 mt-4
                            font-Inter font-semibold text-primary
                            hover:bg-primary hover:text-white hover:cursor-pointer
                            ">
                            <h4>GET STARTED</h4>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
};

export default Pricing;