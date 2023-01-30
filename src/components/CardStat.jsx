import cal from "../assets/calories-icon.png"
import carb from "../assets/carbs-icon.png"
import prot from '../assets/protein-icon.png'
import burger from "../assets/cheeseburger.png"
import PropTypes from "prop-types"

/**
 * React component for display nutriment datas on Dashboard page
 * @param {Objectof} value Object who contains data for cardStat component
 * @param {number} calorieCount calories count 
 * @param {number} proteinCount protein count
 * @param {number} carbohydrateCount carbohydrate count
 * @param {number} lipidCount lipid count
 * @returns {JSX.Element}
 */

export function CardStat({value}){
    return(
        <div className="cardStat">

         <div className="cardStatCal">

            <div className="cardStatCal_img">
                <img className="cardImg" src={cal} alt="icon"></img>
            </div>
            <div className="cardInfo_cal">
                <p className="cardValue">{value.calorieCount}kCal</p>
                <p className="cardValue_type">Calories</p>
            </div>

         </div>

            <div className="cardStatProt">

            <div className="cardStatProt_img">
                <img className="cardImg" src={prot} alt="icon"></img>
            </div>
            <div className="cardInfo_prot">
                <p className="cardValue">{value.proteinCount}g</p>
                <p className="cardValue_type">Proteine</p>
            </div>

            </div>

            <div className="cardStatCarb">

            <div className="cardStatCarb_img">
                <img className="cardImg" src={carb} alt="icon"></img>
            </div>
            <div className="cardInfo_carb">
                <p className="cardValue">{value.carbohydrateCount}g</p>
                <p className="cardValue_type">Glucides</p>
            </div>

            </div>

            <div className="cardStatBurg">

            <div className="cardStatBurg_img">
                <img className="cardImg" src={burger} alt="icon"></img>
            </div>
            <div className="cardInfo_burger">
                <p className="cardValue">{value.lipidCount}g</p>
                <p className="cardValue_type">Lipide</p>
            </div>

            </div>

        </div>
    )
}

CardStat.propTypes ={
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
}