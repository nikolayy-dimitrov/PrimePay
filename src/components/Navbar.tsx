import {SelectedPage} from "../utils/types.ts";
import Logo from "../assets/Logo-1.svg";
import Link from "./Link.tsx";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

    return <nav>
        <div className="flex items-center justify-between fixed top-0 z-30 w-full py-4 bg-bgc">
            <div className="flex items-center justify-between mx-auto">
                <div className="flex items-center justify-between gap-52 w-full">
                    <AnchorLink href="/home"><img alt="PrimePay Logo" src={Logo} className=""/></AnchorLink>

                    <div className="flex justify-center items-center w-full gap-32">
                        <div className="flex gap-8 text-sm">
                            <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Features" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Pricing" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <a href="/blog"><h3>Blog</h3></a>
                        </div>
                        <div className="mx-auto border rounded-3xl border-primary bg-primary text-bgc pl-8 pr-8 p-4">
                            <h3 className="font-inter text-sm font-semibold">LOGIN</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
};

export default Navbar;