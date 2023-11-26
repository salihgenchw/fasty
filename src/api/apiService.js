import axios from "axios";
import Endpoints from "./endpoints";

const ApiService = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${Endpoints[endpoint]}`);
      return response.data;
    } catch (error) {
      console.error("GET request failed", error);
      throw error;
    }
  },

  post: async (endpoint, body) => {
    try {
      const response = await axios.post(`${Endpoints[endpoint]}`, body);
      return response.data;
    } catch (error) {
      console.error("POST request failed", error);
      throw error;
    }
  },
};

export default ApiService;
