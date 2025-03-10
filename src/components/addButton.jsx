import { IoIosAdd } from "react-icons/io";

function AddButton() {
    return (
        <div className="flex mt-auto w-full">
            <button className="text-white font-bold py-3 px-4 border cursor-pointer w-full flex items-center justify-center gap-2 transition duration-300
                hover:bg-white hover:text-black">
                <IoIosAdd className="text-xl" />
                Add Chore
            </button>
        </div>
    );
}

export default AddButton;
