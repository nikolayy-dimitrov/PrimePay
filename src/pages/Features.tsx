import {SelectedPage} from "../utils/types.ts";
import {motion} from "framer-motion";
import CardsImg from "../assets/Cards_Image.svg";
import Check from "../assets/CheckV.svg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({setSelectedPage}: Props) => {
    return <section id="features">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
        >
            <div className="bg-[#303030] w-full py-12 p-32 md:flex items-center justify-between">
                <div className="space-y-4">
                    <h3 className="text-3xl max-md:text-xl max-md:text-center font-Jost font-semibold text-[#8C8C8C]">
                        Credit is the Fastest<br />
                        Mobile <span className="text-white">Banking <br />
                        Solution.</span>
                    </h3>
                    <p className="text-white font-OpenSans max-md:hidden">
                        Feels Great In Low-Light Mood For Your Eye Protection<br />
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing<br />
                        Elit, Sed Do Eiusmod Tempor Incididunt
                    </p>
                    <div className="md:flex items-center justify-between font-OpenSans text-white">
                        <ul className="max-md:space-y-1">
                            <li className="flex items-center gap-2"><img alt="check" src={Check} className="size-1/12" />
                                All Your Transaction
                            </li>
                            <li className="flex items-center gap-2 max-md:text-nowrap"><img alt="check" src={Check} className="size-1/12"/>
                                Receipts Transaction
                            </li>
                            <li className="flex items-center gap-2 max-md:text-nowrap"><img alt="check" src={Check} className="size-1/12"/>
                                Experience Smart App
                            </li>
                        </ul>
                        <ul className="md:mb-6 max-md:space-y-1 max-md:mt-1">
                            <li className="flex items-center gap-2 max-md:text-nowrap"><img alt="check" src={Check} className="size-1/12"/>
                                Control Your Budget
                            </li>
                            <li className="flex items-center gap-2 max-md:text-nowrap"><img alt="check" src={Check} className="size-1/12"/>
                                Find Your Expenses
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-md:pt-12 md:w-1/2">
                    <img alt="credit-cards" src={CardsImg}/>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Features;