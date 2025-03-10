import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="bg-gray-900 h-screen w-screen m-0 p-5 flex flex-col text-white">
            {/* Header */}
            <header className="flex justify-between items-center py-4">
                <h1 className="text-3xl font-bold">Chore Master</h1>
                <nav>
                    <ul className="flex gap-4">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-4">Organize your chores efficiently</h2>
                <p className="text-lg mb-8">Manage your tasks and stay productive with Chore Master.</p>
                <Link to="/pending" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Get Started</Link>
            </main>

            {/* Footer */}
            <footer className="py-4 text-center">
                <p>&copy; 2023 Chore Master. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;