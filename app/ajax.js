import axios from "axios";
const Host = 'http://192.168.1.249:5001';

export default {
  async fetchDamages() {
    try {
      const result = await axios.get(`${Host}/api/damage`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  }
  ,

  async fetchDepartments() {
    try {
      const result = await axios.get(`${Host}/api/department`);
      //console.log(result.data);
      return result.data;
    }
    catch (e) {
      console.error(e);
    }
  }



};


