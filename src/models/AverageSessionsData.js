export class AverageSessionsData{
    /**
     * class for the response of fetch/axios getAverageSessions
     * @param {object} data object who represent result of fetch/axios
     * @return {object<object>}
     */
    constructor(data){
        this.data = data
    }
}