import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide  text-black-500 font-semibold">
            React Topics
          </div>
          <div className="mt-2 underline underline-offset-2 text-indigo-500">
            <Link to="/hooks"> Hooks </Link>
          </div>
          <div className="mt-2 underline underline-offset-2 text-indigo-500">
            <Link to="/life-cycle-methods"> Life Cycle Methods </Link>
          </div>
          <div className="mt-2 underline underline-offset-2 text-indigo-500">
            <Link to="/hooks"> Hooks </Link>
          </div>
          <div className="mt-2 underline underline-offset-2 text-indigo-500">
            <Link to="/hooks"> Hooks </Link>
          </div>
          <div className="mt-2 underline underline-offset-2 text-indigo-500">
            <Link to="/hooks"> Hooks </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
