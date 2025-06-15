import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="topbar">
      <nav className="bg-pastel-blue p-4 rounded-b-lg shadow">
        <div className="container font-sans mx-auto flex justify-evenly items-center pe-8">
          <Link
            to="/"
            className="text-gray-800 font-bold text-lg flex items-center">
            <span role="img" aria-label="TripLedger App" className="mr-1 pr-2">
              <img
                width="40"
                height="40"
                src="/assets/images/split-logo.png"
                alt="cash-in-hand"
              />
            </span>
            TripLedger
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Topbar;
