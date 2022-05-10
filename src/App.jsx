import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Error from "./Error";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setIsLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    document.title = "Tours card"
  })

  if (isLoading) {
    return (
      <main className="flex justify-center pt-20">
        <Loading />
      </main>
    );
  }

  if (isError) {
    return <Error />;
  }

  if (tours.length === 0) {
    return (
      <main className="h-screen flex justify-center items-center flex-col space-y-10 ">
        <h3 className="text-2xl text-blue-700 font-mono py-2">no tours left</h3>
        <button onClick={() => fetchTours()} className="p-4 text-2xl text-white bg-blue-900 rounded-xl">Reset tours</button>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center pt-20 justify-center">
      <header className="flex flex-col text-center space-y-2">
        <h1 className="text-4xl">Ours Tours</h1>
        <div className="h-1 bg-blue-400" />
      </header>
      <section>
        <Tours tours={tours} removeTour={removeTour}/>
      </section>
    </main>
  );
};

export default App;
