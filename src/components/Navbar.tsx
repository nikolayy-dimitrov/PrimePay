import { useState } from "react";
import { SelectedPage } from "../utils/types.ts";
import Logo from "../assets/Logo-1.svg";
import Link from "./Link.tsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav>
            <div className="flex items-center justify-between fixed top-0 z-30 w-full py-4 bg-white">
                <div className="w-11/12 mx-auto flex items-center justify-between">

                    {isAboveMediumScreens ? (
                        <div className="flex justify-center items-center gap-32">
                            <AnchorLink href="/home">
                                <img alt="PrimePay Logo" src={Logo} />
                            </AnchorLink>
                            <div className="flex gap-8 text-sm">
                                <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Features" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Pricing" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <a href="/blog"><h3>Blog</h3></a>
                            </div>
                            <div className="border rounded-3xl border-primary bg-primary text-bgc px-8 py-4">
                                <h3 className="font-inter text-sm font-semibold">LOGIN</h3>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-primary p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-bgc" />
                        </button>
                    )}
                </div>
            </div>

            {/* MOBILE MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed z-40 h-full w-full text-white text-center bg-primary drop-shadow-xl">
                    <div className="flex p-6 justify-start">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-bgc" />
                        </button>
                    </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Features" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Pricing" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <a href="/blog" className="text-bgc">Blog</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;