import copyright from '../assets/CopiryghtSportSee.png'
import iconBike from '../assets/iconBike.png'
import iconSwim from '../assets/iconSwim.png'
import iconWeight from '../assets/iconWeight.png'
import iconZen from '../assets/iconZen.png'

import '../styles/Sidebar.css'
/**
 * @file React component for the vertical navigation bar
 * @returns {JSX.Element}
 */

export default function Sidebar(){
    return(
        <aside className="sidebar">
                <img className='icon' src={iconZen} alt="iconZen"></img>
                <img className='icon' src={iconSwim} alt="iconSwim"></img>
                <img className='icon' src={iconBike} alt="iconBike"></img>
                <img className='icon icon_last' src={iconWeight} alt="iconWeight"></img>
                <img className='copyright' src={copyright} alt="copyright"></img>
        </aside>
    )
}