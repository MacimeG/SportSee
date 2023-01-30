/**
 * React component to style chart "GraphicWeight"
 * @returns {JSX.Element}
 */

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
};

/**
 * React component to style chart 'Linechart'
 * @returns {JSX.Element} 
 */
export const CustomToolBar = ({active, payload})=>{
    if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="labelkg">{`${payload[0].value}kg`}</p>
            <p className="label">{`${payload[1].value}kCal`}</p>
          </div>
        );
    }

    return null
    
}
