function Giphy({ giphy }) {
  console.log(`random`, giphy);

  return (
    <div>
      <img src={giphy.fixed_height_small_url} alt="" />
    </div>
  );
}
export default Giphy;
