var axios = require('axios');

export default {
    searchLic: function (query) {
        return axios.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/decodelicvaluesextended/${query}?format=json`)
    },
    loadSavedLic: function () {
        return axios.get('api/lic')
    },
    deleteLic: function (id) {
        return axios.delete("/api/lic/" + id);
    },
    saveLic: function (licData) {
        return axios.post("/api/lic", licData);
    }
}