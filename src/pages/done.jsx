import HamburgerMenu from "../components/hamburgerMenu";
import TaskNav from "../components/taskNav";
import AddButton from "../components/addButton";

function Done() {

    return (
        <>
        <div className="bg-slate-950 h-screen w-screen m-0 p-5 gap-5 flex flex-col">
            <div className="flex flex-col text-white">
                <div className="flex flex-row justify-between items-center">
                    {/* Hamburger Menu */}
                    <HamburgerMenu />
                    <h1 className="font-light text-2xl">Chore Master</h1>
                </div>
                {/* TaskNav */}
                <TaskNav />
            </div>

            {/* Scrollable Tasks Plates */}
            <div className={"text-white h-full overflow-y-auto bg-white/10"}>
                
            </div>

            
            {/* Add Chore Button */}
            <AddButton />
        </div>
        </>
    );
}

export default Done;
