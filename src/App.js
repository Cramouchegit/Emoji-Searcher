import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Input from "./components/Input";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/13a20f6c-8509-4375-bba1-7c598b3daaa3"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  const handleSearchEmojis = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Navbar />
      {/* Membuat Dynamic Render Berdasarkan sebuah State*/}
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />

        {loading && <Empty text="Loading Cuy..." />}
        {error && <Empty text="Error!" />}

        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </Container>
    </>
  );
}

export default App;
