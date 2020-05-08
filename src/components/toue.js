import React from 'react'
import {Link} from 'react-router-dom'
import '../css/toue.css'
import Picture from '../img/toue.jpg'
import Face from '../img/iconfinder_facebook_834722.png'
import Ig from '../img/ig.png'
import Git from '../img/git.png'
import Picture2 from '../img/bts.png'

export default function toue() {
    return (
        <div>
            <span><Link to = "./"><button type="button" class="homepage_toue"><b>Homepage</b></button></Link></span>
            <div className="whole_page_toue">
                <div className="Card_toue">
                <h1 className="header_toue">Profile</h1>
                <img src={Picture} className="picture1"/>
                <table className="Table">
                <tr>
                    <th className="Head_toue">ชื่อ</th>
                    <td className="Tail_toue">ธนพล ศรีนาคร</td>
                </tr>
                <tr>
                    <th className="Head_toue">รหัสนิสิต</th>
                    <td className="Tail_toue">6210402437</td>
                </tr>
                <tr>
                    <th className="Head_toue">สัตว์ที่ชอบ</th>
                    <td className="Tail_toue">ม้า <i class="fas fa-horse"></i></td>
                </tr>
                <tr>
                    <th className="Head_toue">ID-Line</th>
                    <td className="Tail_toue">toueza1412</td>
                </tr>
                <tr>
                    <th className="Head_toue">วงดนตรที่ชอบ</th>
                    <td className="Tail_toue">Bangtan Sonyeondan(BTS) <img src={Picture2} className="picture2" onClick={()=> window.open("https://en.wikipedia.org/wiki/BTS", "_blank")}/></td>
                </tr>
                <tr>
                    <th className="Head_toue">เวลาว่างชอบ</th>
                    <td className="Tail_toue">เล่นเกม ฟังเพลง <i class="fas fa-laptop"></i></td>
                </tr>
                <tr>
                    <th className="Head_toue">ความสามารถด้านProgramming</th>
                    <td className="Tail_toue">เขียนภาษาPython, ภาษาC และภาษาC++</td>
                </tr>
                <tr>
                    <th className="Head_toue">เบอร์โทร</th>
                    <td className="Tail_toue">0954914885</td>
                </tr>
                </table>
                </div>
            </div>
            <br></br>
        <div class="position_button_toue">
            <Link to='week2_toue'><button class="button_toue"><span>Week 2 29/4/2563</span></button></Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/week3_toue"><button class="button_toue"><span>Week 3 02/5/2563</span></button></Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/week4_toue"><button class="button_toue"><span>Week 4 09/5/2563</span></button></Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/week5_toue"><button class="button_toue"><span>Week 5 16/5/2563</span></button></Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/week6_toue"><button class="button_toue"><span>Week 6 23/5/2563</span></button></Link>
        </div>
        <div>
        <span onClick={()=> window.open("https://www.facebook.com/thn.phl.1", "_blank")}><img src={Face} className="icon_face"></img></span>
            <span className="font_face">FB : ธนพล ศรีนาคร</span>
            <span onClick={()=> window.open("https://www.instagram.com/touekung/?hl=en", "_blank")}><img src={Ig} className="icon_ig"></img></span>
            <span className="font_ig">IG : ToueKunG</span>
            <span onClick={()=> window.open("https://github.com/ToueKunG2000", "_blank")}><img src={Git} className="icon_git"></img></span>
            <span className="font_git">Github : ToueKunG2000</span>
        </div>
        </div>
    )
}
