import { Link} from "react-router-dom";

var Home = () => {
  return (
    <section
      className=" max-h-full block mx-auto mt-32 text-center "
      id="section"
    >
      <div id="home">
        <h1 className="text-5xl italic text-slate-950 ">
          Welcome To Cart Fairy
        </h1>
      </div>
      <div>
        <Link to="/products">
          <button className="bg-slate-900 w-40 text-white block mx-auto text-lg italic mt-32 rounded mb-10 p-2">
            View{" "}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
