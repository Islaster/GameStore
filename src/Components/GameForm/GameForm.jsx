export default function GameForm() {
  return (
    <form method="POST">
      <label>Title</label>
      <input name="title" />
      <label>genre</label>
      <input name="genre" />
      <label>ESRB Rating</label>
      <input name="ESRB_rating" />
      <label>platform</label>
      <input name="platform" />
      <label>Price</label>
      <input type="number" name="price" />
      <button type="submit">Add Game</button>
    </form>
  );
}
