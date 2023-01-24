import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const apiResponse = await axios.get(endpoint);
    setData(apiResponse.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return data;
};
