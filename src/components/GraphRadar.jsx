import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  //   PolarRadiusAxis
} from "recharts";

import PropTypes from "prop-types"
/**
 * react component for graphique radar
 * @async
 * @param {string} kind kind of value
 * @param {number} value value of kind
 * @returns {array<object>}
 */


export default function GraphRadar({ perf }) {
  /**
   * 
   * @param {number} number number of kind value
   * @returns {string} 
   */
  const traduction = (number) => {
    const words = {
      "1": "cardio",
      "2": "energie",
      "3": "endurance",
      "4": "force",
      "5": "vitesse",
      "6": "intensité",
    };
    return words[number];
  }
  return (
    <RadarChart
      outerRadius={75}
      width={258}
      height={263}
      data={perf}
      style={{ background: "black", borderRadius: "10px" }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" tickLine={false} tickFormatter={traduction} fontSize={12} stroke="white" />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="red"
        fillOpacity={0.6}

      />
    </RadarChart>
  );
}
GraphRadar.propTypes = {
  value: PropTypes.number,
  kind: PropTypes.number,
};