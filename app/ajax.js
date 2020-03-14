<<<<<<< HEAD
import axios from 'axios';

export default {
    fetchInitialDepartments() {
        console.log('*************');

        // axios.get('http://192.168.1.249:45455/api/category').then(res => console.log("The response is ", res))
        //     .catch((error) => { http://192.168.1.249:5001/api/category
        //         // handle error
        //         console.log("Error is ", error);
        //     })

        axios.get('http://192.168.1.249:5001/api/category').then(res => console.log(res.data))
            .catch((error) => {
                // handle error
                console.log("Error is ", error);
            });



=======
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
>>>>>>> 788ad62ad486c4d5bb7f4f138fe93bcbcb657834
    }
  }
};
