const apiHost = "https://bakesaleforgood.com";
export default {
  async fetchInitialDepartments() {
    try {
      let response = await fetch("https://192.168.1.25:45457/api/category");
      //let response = await fetch('https://localhost:44358/api/category');
      console.log("eRROR IS", response);
      let responseJson = await response.json();
      console.log("eRROR IS", responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};
