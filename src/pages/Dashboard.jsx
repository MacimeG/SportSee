/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Navigate, useParams } from "react-router-dom";
import { getAverageSessions, getScore, getUser, getUserActivity, getUserPerf } from "../services/mock-api.js";

import { useState, useEffect } from "react";
import DataUser from "../components/DataUser";
import '../styles/Dashboard.css'
import GraphicWeight from "../components/GraphicWeight";
import Linechart from "../components/Linechart";
import GraphRadar from "../components/GraphRadar";
import GraphRadial from "../components/GraphRadial";
import { CardStat } from "../components/CardStat";

/**
 * @file Dashboard page
 * render the whole page and call all charts components
 * @returns {JSX.Element}
 */

export default function Dashboard() {
    /**
     * id user in url 
     * @param {number} id 
     */
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [activity, setActivity] = useState([])
    const [average, setAverage] = useState([])
    const [perf, setPerf] = useState([])
    const [scores, setScore] = useState([])

    useEffect(() => {
        getUser(setData, id, setLoading)
        getUserActivity(setActivity, id, setLoading)
        getAverageSessions(setAverage, id)
        getUserPerf(setPerf, id, setLoading)
        getScore(setScore, id)
    }, [])

    const parsed = parseInt(id)

    if (window.location.pathname !== `/Dashboard/${id}`) {
        return <Navigate to="/Error/" />
    }
    if (parsed !== 12 && parsed !== 18) {
        return <Navigate to="/Error/" />
    }
    if (isNaN(id)) {
        return <Navigate to="/Error/" />
    }
    /**
     * const function who formated data to return data on good format for chart graphicWeight
     * @param {Array} activity
     * @param {number} kilogram value kilogram of user
     * @param {number} calories value calories of user
     * @returns {object} activityFormated
     */
    const activityFormated = activity?.data?.data?.sessions.map(({ kilogram, calories }, index) => {
        return {
            kilogram: kilogram,
            calories: calories,
            day: (index + 1)
        }
    })


    return (
        <div className="dashboard_container">
            <Navbar />
            <Sidebar />
            <div className="dataUser_container">
                <div>
                    {!isLoading ? <DataUser name={data?.userInfos?.firstName} /> : null}

                </div>

                <GraphicWeight sessions={activityFormated} />

                <div className="dataUser_graphRow">
                    <Linechart average={average?.data?.data?.sessions} />
                    <div>
                        {!isLoading ? <GraphRadar perf={perf?.data?.data} /> : null}
                    </div>
                    <GraphRadial score={scores} />
                </div>
                <div>
                    {!isLoading ? <CardStat value={data?.keyData} /> : null}
                </div>
            </div>
        </div>
    )
}