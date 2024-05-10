import axios from "axios";

const getData = async (path) => {
  try {
    const url = import.meta.env.VITE_URL_API + path;
    return axios.get(url);
  } catch ({ error }) {
    console.log(error);
  }
};

export default getData;
