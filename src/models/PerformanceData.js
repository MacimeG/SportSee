export class PerformanceData{
    /**
     * class for the response of fetch/axios getUserPerf
     * @param {object} data object who represent result of fetch/axios
     * @param {object} kind object who contains value of Performance
     * @param {object} data object who contains value of kind, value of value, from performance
     * @returns {object<object>}
     */
    constructor(data){
        this.data = data
        this.kind = data.kind
        this.data = data.data 
    }
}