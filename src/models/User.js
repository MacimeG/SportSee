export class User{
    /**
     * class for the response of fetch/axios getUser 
     * @param {object} data object who represent result of fetch/axios
     * @param {number} id id user
     * @param {object} userInfos contains data user
     * @param {number} score score of user
     * @param {number} todayScore score of user but the "key" isn't the same 
     * @param {object} keyData contains nutrition data
     * @returns {object<object>}
     */
    constructor(data){
        this.id = data.data.id;
        this.userInfos= data.data.userInfos
        this.score = data.data.score
        this.todayScore = data.data.todayScore
        this.keyData = data.data.keyData
    }
}