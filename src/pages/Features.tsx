import {SelectedPage} from "../utils/types.ts";
import {motion} from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({setSelectedPage}: Props) => {
    return <section id="featured">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
        >

        </motion.div>
    </section>
}

export default Features;