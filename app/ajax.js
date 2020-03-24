import axios from "axios";

export default {
  async fetchDamages() {
    try {
      const result = await axios.get("http://192.168.1.25:5001/api/damage");
      return result;
    } catch (e) {
      console.error(e);
    }
  }
};
