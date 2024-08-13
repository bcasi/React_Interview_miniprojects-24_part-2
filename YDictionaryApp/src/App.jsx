import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [definition, setDefinition] = useState("");

  const wordAndMeaning = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const searchMeaning = () => {
    if (search === "") return;
    const filterWord = wordAndMeaning.filter(
      (item) => item.word.toLowerCase() === search.toLocaleLowerCase()
    );
    if (filterWord.length > 0) {
      let ans = filterWord[0].meaning;
      setDefinition(ans);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
    return;
  };
  return (
    <div className="container">
      <h1>Dictionary App</h1>

      <div className="input_container">
        <input
          type="text"
          placeholder="Search for a word"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button onClick={searchMeaning}>Search</button>
      </div>
      <div className="definition_container">
        Definition:
        <span>{definition}</span>
      </div>
    </div>
  );
}

export default App;
