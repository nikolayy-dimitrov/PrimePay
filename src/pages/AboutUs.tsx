import {SelectedPage} from "../utils/types.ts";
import {motion} from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({setSelectedPage}: Props) => {
    return <section id="featured" className="mx-auto w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        >
            <div>
                <div>
                    <h2>Why is it Worth Choosing PrimePay.</h2>
                </div>
                <div>
                    <div className="flex flex-row">
                        <div className="basis-2/3">asd</div>
                        <div className="basis-1/3">dsa</div>
                    </div>
                    <div className="flex flex-row gap-5">
                        <div className="basis1/3">a</div>
                        <div className="basis1/3">b</div>
                        <div className="basis1/3">c</div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default AboutUs;