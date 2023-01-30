export class ActivityData{
    /**
     * class for the response of fetch/axios getUserActivity
     * @param {object} data object who represent result of fetch/axios
     * @param {number} id id user 
     * @returns {object<object>}
     */
    constructor(data){
        this.data = data
        this.id = data.userId
    }
}