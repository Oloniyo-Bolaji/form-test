"use client"

import Form from "../components/Form";
import { useEffect, useState } from "react";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/flag/unicode"
        );
        const data = await res.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="flex items-center justify-center py-[40px] sm:py-[100px] sm:px-[100px] px-[30px]">
      <Form countries={countries}/>
    </div>
  );
}

export default Home;
