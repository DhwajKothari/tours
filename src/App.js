import "./css/App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [toursData, setToursData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setToursData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (toursData.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
        </div>
        <div className="reset-btn">
          <button className="btn" onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="App">
      <Tours tours={toursData} removeTour={removeTour} />
    </div>
  );
}

export default App;
