import axios from "axios";

export default {
  fetchInitialDepartments() {
    console.log("*************");

    // axios.get('http://192.168.1.249:45455/api/category').then(res => console.log("The response is ", res))
    //     .catch((error) => { http://192.168.1.249:5001/api/category
    //         // handle error
    //         console.log("Error is ", error);
    //     })

    axios
      .get("http://192.168.1.25:5001/api/category")
      .then(res => console.log(res.data))
      .catch(error => {
        // handle error
        console.log("Error is ", error);
      });
  }
};
