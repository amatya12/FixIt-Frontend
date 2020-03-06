


const apiHost = "https://bakesaleforgood.com"
export default {
    async fetchInitialDepartments() {
        try {
            let response = await fetch('http://192.168.1.249:45455/api/category');
            //let response = await fetch('https://localhost:44358/api/category');
            console.log(response);
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        }
        catch (error) {
            console.error(error);
        }
    }
}