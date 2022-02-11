export default function GameCard({ game }) {
  return (
    <>
      <h4>{game.title}</h4>
      <p>{game.genre}</p>
    </>
  );
}
