import axios from "axios";
import { MakeModal } from "../utils/MakeModal";

const postData = async (path, input, item) => {
  try {
    const url = import.meta.env.VITE_URL_API + path;
    await axios.post(url, input);

    MakeModal(`Success`, `${item} sucessfully created`, "success");
  } catch ({ response }) {
    MakeModal(`Failed`, `${response.data.message}`, "error");
  }
};

export default postData;
