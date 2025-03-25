import { Link } from "react-router-dom";

function TaskNav() {
    return (
        <nav className="flex flex-row justify-around p-3 border-b">
            <Link to="/pending">
                <button className={"cursor-pointer hover:bg-white hover:text-black "}>Pending</button>
            </Link>
            <Link to="/in-progress">
                <button className={"cursor-pointer hover:bg-white hover:text-black "}>In Progress</button>
            </Link>
            <Link to="/done">
                <button className={"cursor-pointer hover:bg-white hover:text-black "}>Done</button>
            </Link>
        </nav>
    );
}

export default TaskNav;