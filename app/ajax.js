import axios from "axios";
import API_ENDPOINT from './constants/constants';


export default {
  async fetchDamages() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/damage`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  async fetchDepartments() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/department`);
      //console.log(result.data);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  }
};
