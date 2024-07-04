import { SelectedPage } from "../utils/types.ts";
import { motion } from "framer-motion";
import HeroBackground from "../assets/Background-4.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {

    return <section id="home" className="gap-16 py-10 md:h-full md:pb-0 bg-bgc">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className="mt-12 z-10">
                <div className="z-20 absolute inset-0 flex justify-center items-center -mt-14">
                    <div className="text-center">
                        <h2 className="font-semibold font-Jost text-5xl">Ready To Launch Your
                            <h2> Online <span className="text-white">Payment</span> App </h2>
                        </h2>
                        <div className="flex items-center justify-center pt-6">
                            <p className="font-OpenSans font-semibold">A Simple Yet Modern Solution To Showcase Your App</p>
                        </div>
                        <div className="mt-10">
                            <AnchorLink className="text-bgc text-sm font-Inter font-semibold rounded-3xl bg-primary px-8 py-4 relative"
                            onClick={() => setSelectedPage(SelectedPage.Home)}
                            href={`#${SelectedPage.Home}`}
                            >GET STARTED</AnchorLink>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-between h-screen">
                    <div className="absolute flex justify-center">
                        <img alt="home-page-hero-background" src={ HeroBackground } className="w-11/12 mx-auto" />
                    </div>
                </div>

            </div>
        </motion.div>
    </section>
}

export default Home;