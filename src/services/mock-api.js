import axios from "axios";

import { User } from "../models/User"
import { ActivityData } from "../models/ActivityData";
import { AverageSessionsData } from "../models/AverageSessionsData";
import { PerformanceData } from "../models/PerformanceData";

let mock = false

/**
 * @async
 * fetch/axios data user
 * @param {number} userId id of user
 * @param {string} firstName firstName of user
 * @param {string} lastName lastname of user
 * @param {number} age age of user
 * @returns {object}
 */

// get user route user
export async function getUser(setData, userId, setLoading) {
    if (mock === true) {
        const res = await fetch("../db.json")
        const datas = await res.json()

        for (const d of datas) {
            if (d.id === +userId) {
                const user = new User(d)

                // setLoading(false)
                setTimeout(()=>{setLoading(false)}, 250)
                return setData(user)
            }
        }
    }
    else {
        const response = await axios.get(`http://localhost:3000/user/${userId}`)
            .catch((err) =>
                alert("Erreur 503 : The server is currently unavailable.")
            );
        const user = new User(response.data)
        setLoading(false)

        return setData(user)
    }


}

/**
 * @async
 * fetch/axios data Activity of user
 * @param {number} userId id of user
 * @param {arrayOf} sessions array contains data activity
 * @param {number} day data day of user activity
 * @param {number} kilogram data kilogram of user activity
 * @param {number} calories data calories of user calories
 * @returns {object}
 */

// get user route activity
export async function getUserActivity(setData, userId) {
    if (mock === true) {
        const res = await fetch("../db.json")
        const datas = await res.json()

        for (const d of datas) {
            if (d.id === +userId) {
                let data = { "data": new ActivityData(d.activity) }
                return setData(data)
            }
        }

    }
    else {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`)
        const activityData = new ActivityData(response.data)
        return setData(activityData)
    }
}


/**
 * fech/axios data Average Sessions of user
 * @async
 * @param {number} userId id of user
 * @param {arrayOf} sessions array contains data average sessions
 * @param {number} day data day of user average sessions
 * @param {number} sessionLength data sessions length of user average sessions
 * @returns {object}
 */
// get user route average-sessions

export async function getAverageSessions(setData, userId) {
    if (mock === true) {
        const res = await fetch("../db.json")
        const datas = await res.json()

        for (const d of datas) {
            if (d.id === +userId) {
                let averageData = { "data": new AverageSessionsData(d.averageSessions) }
                setData(averageData)
            }
        }

    }
    else {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
        const averageData = new AverageSessionsData(response.data)
        return setData(averageData)
    }
}

// get user route performance

/**
 * @async
 * fetch/axios data Performance of user
 * @param {number} userId id of user
 * @param {object} kind contains value of kind user
 * @param {array} data contains value of value and kind user 
 * @returns {object}
 */
export async function getUserPerf(setData, userId, setLoading) {
    if (mock === true) {
        const res = await fetch("../db.json")
        const datas = await res.json()
        for (const d of datas) {
            if (d.id === +userId) {
                let perfData = {
                    "data": new PerformanceData(d.performance,)
                }
                // setLoading(false)
                setTimeout(()=>{setLoading(false)}, 250)
                return setData(perfData)
            }
        }

    }
    else {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`)
        const perfData = new PerformanceData(response.data)
        setLoading(false)

        return setData(perfData)
    }

}

// get only user score, with this id.

/**
 * 
 * @param {number} userId id of user
 * @param {score} score score of user
 * @param {todayScore} todayScore score of user
 * @returns {number} -number of score user
 */
export async function getScore(setData, userId) {
    if (mock === true) {
        const res = await fetch("../db.json")
        const datas = await res.json()
        for (const d of datas) {
            if (d.id === +userId) {
                return setData(d.data.todayScore || d.data.score)
            }
        }

    }
    else {
        const response = await axios.get(`http://localhost:3000/user/${userId}`)
        return setData(response.data.data.score || response.data.data.todayScore)
    }
}
