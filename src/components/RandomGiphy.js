import axios from "axios";
import { RANDOM_GIPHY_URL } from "../services/constant";
import { RANDOM_GIPHY_KEY } from "../services/constant";

async function fetchRandomGif() {
  const url = `${RANDOM_GIPHY_URL}?api_key=${RANDOM_GIPHY_KEY}`;
  console.log(url);
  return await axios.get(`${url}`);
}

export default fetchRandomGif;
