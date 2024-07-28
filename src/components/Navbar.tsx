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

    const toggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-30 bg-white p-4">
            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-12">
                    <AnchorLink href="/home">
                        <img alt="PrimePay Logo" src={Logo} className="w-8/12"/>
                    </AnchorLink>
                    {isAboveMediumScreens ? (
                        <div className="flex items-center justify-between gap-20">
                            <div className="flex gap-8 text-sm">
                                <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Features" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Pricing" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <a href="/blog"><h3>Blog</h3></a>
                            </div>
                            <div className="border rounded-full border-primary bg-primary text-bgc px-8 py-3">
                                <h3 className="font-inter text-sm font-semibold">LOGIN</h3>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-primary p-2"
                            onClick={toggleMenu}
                        >
                            <Bars3Icon className="h-6 w-6 text-bgc" />
                        </button>
                    )}
                </div>
            </div>

            {/* MOBILE MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={toggleMenu}>
                            <XMarkIcon className="w-6 h-6 text-bgc" />
                        </button>
                    </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-2xl text-bgc focus:text-secondary">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
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