// import axios from "axios";
// import { ActivityData } from "../models/ActivityData";
// import { AverageSessionsData } from "../models/AverageSessionsData";
// import { PerformanceData } from "../models/PerformanceData";
// import { User } from "../models/User";


// // recuperer l'utilisateur avec son id
// export async function getUser(setData, userId, setLoading){
//     await axios.get(`http://localhost:3000/user/${userId}`).then(
//             (response) => {
//                 setLoading(false)
//                 const user = new User(response.data)
//                setData(user);
//             }
//         )
//         .catch((err) =>
//         alert("Erreur 503 : The server is currently unavailable.")
//         );
// }

// // recuperer l'utilisateur route activity

// export function getUserActivity(setData, userId){
//     axios.get(`http://localhost:3000/user/${userId}/activity`).then(
//         (response)=>{
//             const activityData = new ActivityData(response.data)

//             setData(activityData)
//         }
//     )
// }

// // recuperer l'utilisateur route average-sessions

// export function getAverageSessions(setData, userId){
//     axios.get(`http://localhost:3000/user/${userId}/average-sessions`).then(
//         (response)=>{
//             const averageData = new AverageSessionsData(response.data)

//             setData(averageData)
//         }
//     )
// }

// // recuperer l'utilisateur route performance

// export async function getUserPerf(setData, userId, setLoading){
//    await axios.get(`http://localhost:3000/user/${userId}/performance`).then(
//         (response)=>{
//             setLoading(false)
//             const perfData = new PerformanceData(response.data)

//             setData(perfData)
//         }
//     )
// }

// // recuperer uniquement le score de l'user, avec son id.
// export function getScore(setData, userId){
//     axios.get(`http://localhost:3000/user/${userId}`).then(
//         (response)=>{
//             setData(response.data.data.score || response.data.data.todayScore)
//         }
//     )
// }