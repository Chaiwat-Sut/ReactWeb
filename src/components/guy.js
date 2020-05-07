import React from 'react'
import picture from '../img/Astra.jpg'
import facebook from '../img/facebook.png'
import line from '../img/line.png'
import phone from '../img/phone-icon.png'
import steam from '../img/steam.png'
import phyton from '../img/phytonicon.png'
import react from '../img/react.svg'
import dota from '../img/dota2.jpg'
import '../css/main.css'
import { Link } from 'react-router-dom'

export default function main() {
    return (
        <div className="persona">
            <Link to = './' className="link">
                <button className="home">
                    Home
                </button>
                <Link to = './guy'>
                <button className="button">
                    Profile
                </button>
                <Link to = '/page2'>
                <button className="button">
                    week2
                </button>
                <Link to = '/page3'>
                <button className="button">
                    week3
                </button>
                <Link to = '/page4'>
                <button className="button">
                    week4
                </button>
                <Link to = '/page5'>
                    <button className="button">
                        week5
                    </button>
            </Link>
            </Link>
            </Link>
            </Link>
            </Link>
            </Link>
            <text className="head">
                Profile
            </text>
            <img src={picture} className="profile" alt=""/>
            <table className="info">
                <tr>
                    <th className="topic">ชื่อ</th>
                    ศวิล บุญมา
                </tr>
                <tr>
                    <th className="topic">รหัสนิสิต</th>
                    6210402500
                </tr>
                <tr>
                    <th className="topic">ความถนัดทาง programming</th>
                    Phyton <img src={phyton} className="logo" alt=""/>, React <img src={react} className="logo" alt=""/>
                </tr>
                <tr>
                    <th className="topic">ความสามารถพิเศษ</th>
                    การพูดมาก
                </tr>
                <tr>
                    <th className="topic">งานอดิเรก</th>
                    เล่นเกม <img src={dota} className="logo" alt=""/>
                </tr>
            </table>
            <table className="downside">
                <th className="down"><img src={facebook} className="logo" alt=""/></th><td className="down">ศวิล บุญมา</td>
                <th className="down"><img src={line} className="logo" alt=""/></th><td className="down">guy36901</td>
                <th className="down"><img src={phone} className="logo" alt=""/></th><td className="down">0645690973</td>
                <th className="down"><img src={steam} className="logo" alt=""/></th><td className="down">HungryCrow</td>
            </table>
        </div>
    )
}
