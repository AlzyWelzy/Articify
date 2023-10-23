import { assets } from "../assets";
const articify = assets.articify;

// Your code that uses these imported assets

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img
          src={articify}
          alt="articify_logo"
          className="w-28 object-contain"
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/AlzyWelzy/articify")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
    </header>
  );
};
export default Hero;
