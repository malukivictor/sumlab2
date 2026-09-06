import bgImage from "../assets/home-bg.jpg.jpg";

const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center text-white py-32 -mx-4 -my-8 bg-cover bg-center min-h-[80vh]"
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative">
        <h1 className="text-4xl font-bold mb-4">Welcome to GamerVault</h1>
        <p className="text-lg max-w-md ">Get your game,set-up and dominate!!</p>
      </div>
    </div>
  );
}

export default Home;