// crée une fonction et se servir de Recharts pour faire le graphique.
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  //   ResponsiveContainer
} from "recharts";

import PropTypes from "prop-types"
import { CustomToolBar } from "./CustomToolTip.jsx";
/**
 * @param {arrayOf} sessions sessions
 * @param {object} sessions sessions contains some element
 * @param {number} day day
 * @param {number} kilogram kilogram
 * @param {number} calories calories
 */

export default function GraphicWeight({ sessions }) {
  return (
    // <ResponsiveContainer width="100%" height="100%" >
    <BarChart
      width={860}
      height={280}
      data={sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 15
      }}
      style={{
        background: "#f7f7f7",
        marginBottom: '30px',
        paddingTop: "20px"
        // marginTop: "65px"
      }}
    >
      <CartesianGrid strokeDasharray="2 2" vertical={false} />
      <XAxis dataKey={"day"} />
      <YAxis dataKey="kilogram" domain={["dataMin-1", "dataMax+2"]} orientation='right' minTickGap={70} />
      <YAxis yAxisId={"calories"} dataKey="calories" hide />
      <Tooltip content={CustomToolBar} wrapperStyle={{
        background: "red",
        color: "white",
        width: "50px",
        height: "70px",
        outline: "none",
      }} />
      <Legend verticalAlign="top" iconType={"circle"} margin={{ bottom: 10 }} align="right" wrapperStyle={{ top: 11, right: 50 }}/>
      <Bar dataKey="kilogram" fill="black" barSize={7} radius={[5, 5, 0, 0]} name="Poids (kg)" />
      <Bar yAxisId={"calories"} dataKey="calories" fill="red" barSize={7} radius={[5, 5, 0, 0]} name="Calories brûlées (kCal)" />
      <text
      className="graphTitle"
        x="5%"
        y="4%"
      >Activité quotidienne</text>
    </BarChart>
    // </ResponsiveContainer >
  )

}

GraphicWeight.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,

    }),
  ),
};