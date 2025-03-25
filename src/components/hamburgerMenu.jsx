import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBoxArrowLeft } from "react-icons/bs";

function HamburgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Randomized greetings
    const greetings = [
        "What's the plan?",
        "Game plan for today?",
        "Conquer your tasks?",
        "Smash those to-dos?",
        "What's the battle plan, boss?",
        "haha tambak na naman",
        "Productivity mode: ON?"
    ];

    // Randomize greeting when the sidebar opens
    const [greeting, setGreeting] = useState(greetings[0]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);

        // Generate a random greeting every time the sidebar opens
        if (!isMenuOpen) {
            const randomIndex = Math.floor(Math.random() * greetings.length);
            setGreeting(greetings[randomIndex]);
        }
    };

    // Close sidebar if user clicks the dim background
    const handleCloseSidebar = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Hamburger button */}
            <button onClick={handleMenuToggle}>
                {isMenuOpen ? (
                    <BsBoxArrowLeft className="size-6 cursor-pointer text-white" />
                ) : (
                    <RxHamburgerMenu className="size-6 cursor-pointer text-white" />
                )}
            </button>

            {/* Background dim (clicking it closes sidebar) */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-25 transition-opacity duration-800"
                    onClick={handleCloseSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform transform border-r ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="w-69 p-5 flex flex-col">

                    {/* Button to exit sidebar */}
                    <button onClick={handleMenuToggle}>
                        <BsBoxArrowLeft className="size-6 cursor-pointer" />
                    </button>

                    {/* Randomized greeting */}
                    <h2 className="text-2xl font-bold border-b p-5">
                        {greeting}
                    </h2>

                    {/* Navigation */}
                    <ul className={"flex flex-col items-center gap-5"}>
                        <li className="mt-4"><a href="/pending">Tasks</a></li>
                        <li className="mt-4"><a href="/in-progress">Backlogs</a></li>
                        <li className="mt-4"><a href="/done">Calendar</a></li>
                        <li className={"mt-4"}><a href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HamburgerMenu;
