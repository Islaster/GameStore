import HomeCard from "../../Components/HomeCard/HomeCard";

export default function HomePage() {
  return (
    <>
      <img
        id="wrapper"
        src="https://twistedvoxel.com/wp-content/uploads/2021/08/humble-games-xbox-game-pass.jpeg"
        alt=""
        className="float-Right"
      />
      <div className="float-left">
        <h3>Game Ranch</h3>
        <span className="text-justify">
          <h4>Find your Favorite Games</h4>
          <h4>Check pricing</h4>
          <h4>Check platform compatability</h4>
        </span>
      </div>
    </>
  );
}
