import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle
} from "recharts";

import '../styles/Linechart.css'

import {CustomTooltip} from "./CustomToolTip";
import PropTypes from "prop-types"


/**
 * 
 * @param {ObjectOf} average 
 * @param {number} day
 * @param {number} sessionLength
 * @returns 
 */

const Linechart = ({average}) =>{
/**
 * 
 * @param {number} num number of value day
 * @returns {string} return day in string
 */
    const averageDay = (num)=>{
        const day = ["L","M","M","J","V","S","D"] 
        
        if(num === 1){
            return day[0]
        }
        else if(num === 2){
            return day[1]
        }
        else if(num === 3){
            return day[2]
        }
        else if(num === 4){
            return day[3]
        }
        else if(num === 5){
            return day[4]
        }
        else if(num === 6){
            return day[5]
        }
        else if(num === 7){
            return day[6]
        }
        
    }
    const CustomCursor = ({points}) =>{
        return(
            <Rectangle
                fill="#000000"
                opacity={0.2}
                x={points[0].x}
                width={500}
                height={300}
            />
        )
    }
    return (
        <div className="linechartContainer">
            <span className="titleTimeSess">Durée moyenne des sessions</span>
        <LineChart
          width={258}
          height={263}
          data={average}
          margin={{
            top: 50,
            right: 7,
            left: 6,
            bottom: 0
          }}
          style={{ background: "red", borderRadius:"10px" }}
        >
          {/* <CartesianGrid strokeDasharray="1 100" /> */}
          <XAxis dataKey="day" tickFormatter={averageDay} tickLine={false} axisLine={false} strock='white'/>
          <YAxis yAxisId={"sessionLength"} dataKey="sessionLength" hide/>
          <Tooltip content={<CustomTooltip/>}  
           wrapperStyle={{
              background: "#FFF",
              color: "#000",
              width: "40px",
              height: "25px",
              outline: "none",
            }}
            cursor= {<CustomCursor/>}/>
          <Legend wrapperStyle={{display: 'none'}} />
          <Line type="monotone" yAxisId={"sessionLength"} dataKey="sessionLength" stroke="white" dot={false}/>
        </LineChart>
        </div>
      );
}
Linechart.propTypes ={
        sessions: PropTypes.arrayOf(
            PropTypes.objectOf({
                day: PropTypes.number.isRequired,
                sessionLength: PropTypes.number.isRequired
            }),
        ),
    };
export default Linechart