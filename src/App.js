import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import fetchRandomGif from "./components/RandomGiphy";
import Giphy from "./components/Giphy";

function App() {
  const [giphy, setGiphy] = useState([]);
  console.log(giphy);

  const fetchRandomGiphy = async () => {
    const randGif = await fetchRandomGif();
    setGiphy(randGif.data.data);
  };
  console.log(fetchRandomGiphy);

  useEffect(() => {
    fetchRandomGiphy();
  }, []);

  /* 
 * Perhaps some hints?
 *
 * 1. use the useState hook
 * 2. Set up an axios function in a separate service folder/constant file then export to fetchRandomGif(). **Use your giphy api endpoint as url**.       
remember to use useEffect
 * 3. call fetchRandomGif when the button on your page is clicked
 * 4. Set up a loading message until promise is resolved, and fetch status: 200 (optional)
 * 5. Save your data to your state, and have your render method display it on the page
 */
  // remember to use hooks for your state
  // putting the method below in useEffect
  // function fetchRandomGif() {}

  // declare a url variable for the Giphy API endpoint
  // get a random gif!
  // set state with the data you've fetched from the API to allGifs
  // const randoGiphy =
  //   giphy.length === 0 ? (
  //     <div>`nothing`</div>
  //   ) : (
  //     giphy.map((randoResult, index) => {
  //       return <Giphy randodata={randoResult} key={`${index} random`} />;
  //     })
  //   );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React Giphy</h1>
      </header>
      <main>
        I'm going to show a random of gifs!
        <button onClick={fetchRandomGiphy}>here</button>
        <Giphy giphy={giphy} />
      </main>
    </div>
  );
}

export default App;

///  fetchRandomGif().then((data) => {
//     setGiphy(data.data);
//   });
//   // console.log(giphy);
