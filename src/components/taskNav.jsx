import { Link, useLocation } from "react-router-dom";

function TaskNav() {
    const location = useLocation();

    const getButtonClass = (path) =>
        location.pathname === path
            ? "w-full cursor-pointer bg-white text-black text-center border py-1"
            : "w-full cursor-pointer hover:bg-white hover:text-black text-center border py-1";

    return (
        <nav className="flex flex-row justify-around p-3 border-b gap-4">
            <Link to="/pending" className="flex-1">
                <button className={getButtonClass("/pending")}>Pending</button>
            </Link>
            <Link to="/in-progress" className="flex-1">
                <button className={getButtonClass("/in-progress")}>In Progress</button>
            </Link>
            <Link to="/done" className="flex-1">
                <button className={getButtonClass("/done")}>Done</button>
            </Link>
        </nav>
    );
}

export default TaskNav;