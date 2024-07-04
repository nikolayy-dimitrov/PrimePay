import { SelectedPage } from "../utils/types.ts";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {

    return <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>

        </motion.div>
    </section>
}

export default Home;