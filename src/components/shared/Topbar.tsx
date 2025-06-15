import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/shared";

const Topbar = () => {
  return (
    <section className="topbar">
      <nav className="bg-gray-800 p-4">
        <div className="container font-sans mx-auto flex justify-between items-center pe-8">
          <Link
            to="/"
            className="text-white font-bold text-lg flex items-center">
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
          <ThemeToggle />
        </div>
      </nav>
    </section>
  );
};

export default Topbar;
