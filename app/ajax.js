import axios from "axios";

export default {
  async fetchDamanges() {
    try {
      const result = await axios.get("http://192.168.1.249:5001/api/damage");
      return result.data;
    } catch (e) {
      console.error(e);
    }
  }
};
