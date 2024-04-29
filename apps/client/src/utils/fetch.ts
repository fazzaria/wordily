import axios from "axios";

const fetchWrapper = async (url: string) => {
  return await axios
    .get(url)
    .then((response) => {
      // handle success
      return response?.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });
};

export default fetchWrapper;
