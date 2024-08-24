import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="Header  p-5 bg-white  shadow-md z-10">
      <div className="container mx-auto">
        <div className="header flex  items-center  justify-between">
          <h3 className="font-sans text-2xl font-semibold">
            Where in the world?
          </h3>
          <button className="border-none text-2xl">
            <IoMoonOutline />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
