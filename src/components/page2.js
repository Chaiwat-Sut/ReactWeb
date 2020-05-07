import React from 'react'
import '../css/page2.css'
import { Link } from 'react-router-dom'

export default function page2() {
    return (
<div className="background">
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
    <table className="info">
    [
     <tr>id: 1, name: "Leanne Graham", score: 56 },</tr>
     <tr>id: 2, name: "Ervin Howell", score: 78 },</tr>
     <tr>id: 3, name: "Clementine Bauch", score: 56 },</tr>
     <tr>id: 4, name: "Patricia Lebsack", score: 62 },</tr>
     <tr>id: 5, name: "Chelsey Dietrich", score: 57 },</tr>
     <tr>id: 6, name: "Dennis Schulist", score: 37 },</tr>
     <tr>id: 7, name: "Kurtis Weissnat", score: 67 },</tr>
     <tr>id: 8, name: "Nicholas Runolfsdottir", score: 62 },</tr>
     <tr>id: 9, name: "Glenna Reichert", score: 51 },</tr>
     <tr>id: 10, name: "Clementina DuBuque", score: 86 }</tr>
    ]
    <h4>ใช้ for loop เพื่อค่าเฉลี่ย</h4>
    <tr>    
        for (const value of bruh) 
        <tr>all += value.score count = count + 1 </tr>
    </tr>
    <h4>ใช้ for loop อีกครั้งเพื่อเพิ่มคะแนนให้คนที่น้อยกว่าค่าเฉลี่ย</h4>
    <tr>
        for (const value of bruh)
        <tr>        if value.score น้อยกว่า all//count </tr>
        <tr>valuescore += 10 </tr>
    </tr>
    </table>
</div>
    )
}
