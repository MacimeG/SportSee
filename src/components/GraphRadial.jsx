import { RadialBarChart, RadialBar} from "recharts";
import PropTypes from "prop-types"

/**
 * React component to display the score graphic on Dashboard page
 * @async
 * @param {number} score score of the user
 * @returns {JSX.Element}
 */


export default function GraphRadial(score){
    // j'initialise un tableau pour pouvoir passer le score, car le score et directement passer comme sa, et on ne peut pas passer les données sans tableau
    /**
     * @param {array} datas array contains score of user
     * @returns {array}
     */
    const datas = []
    datas.push(score)
    const dataValue = 360 * datas[0].score;

    const style = {
        background: "#fff",
        fill: "red",
      };
    return (
        <div className="radialchart">
        <h3 className="radialchart_title">Score</h3>
        <div className="radialchart_blocScore">
          <p className="radialchart_score">
            {datas[0].score * 100}%
          </p>
          <span className="radialchart_text">de votre objectif</span>
        </div>
        <RadialBarChart
          width={258}
          height={263}
          style={{
            borderRadius: "20px"
          }}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          barSize={10}
          startAngle={-180}
          endAngle={-180 + -dataValue}
          data={datas}
        >
          <RadialBar
            background={{ fill: "#f7f7f7" }}
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff", opacity: 0 }}
            dataKey={'score'}
            style={style}
            cornerRadius={5}
          />
        </RadialBarChart>
        </div>
      );
}
GraphRadial.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired
    })
  )
};