import axios from "axios";
import { API_ENDPOINT } from "./constants/constants";

export default {
  async fetchDamages() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/damage`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  async fetchDamagesforRoad() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/damage/Roads`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  async fetchDamagesforRoadSide() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/damage/RoadSides`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  async fetchDamagesforSign() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/damage/Signs and Lights`);
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
  },

  async fetchCategoriesWithSubCategories() {
    try {
      const result = await axios.get(`${API_ENDPOINT}/categoryfordropdown`);
      console.log(result.data.data);
      return result.data.data;

    }
    catch (e) {
      console.error(e);
    }
  }
};
