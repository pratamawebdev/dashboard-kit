import axios from "axios";
import { MakeModal } from "../utils/MakeModal";

const updateData = async (path, input, item) => {
  try {
    const url = import.meta.env.VITE_URL_API + path;
    await axios.patch(url, input);

    MakeModal(`Success`, `${item} sucessfully updated`, "success");
  } catch ({ response }) {
    MakeModal(`Error`, `${item} failed to update`, "error");
  }
};

export default updateData;
