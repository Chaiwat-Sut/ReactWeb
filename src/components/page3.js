import React from 'react'
import '../css/page3.css'
import { Link } from 'react-router-dom'

export default function page3() {
    return (
        <div className='background'>
            <Link to = './' className="link">
                <button className="hom">
                    Home
                </button>
                <Link to = './guy'>
                <button className="butt">
                    Profile
                </button>
                <Link to = '/page2'>
                <button className="butt">
                    week2
                </button>
                <Link to = '/page3'>
                <button className="butt">
                    week3
                </button>
                <Link to = '/page4'>
                <button className="butt">
                    week4
                </button>
                <Link to = '/page5'>
                    <button className="butt">
                        week5
                    </button>
            </Link>
            </Link>
            </Link>
            </Link>
            </Link>
            </Link>
            <h1>ความรู้สึก</h1>
            <table className="in">
                <tr>React มันเป็นภาษาที่ตอนแรกๆจัดได้ว่าเขียนยากมากกก บอกได้เลยว่า *กำหมัด*</tr>
                <tr>แต่พอมาลองนั่งทำลองมาศึกษาดูแล้วรู้เลยว่า React นี่แม่งโคตรเจ๋งเลย</tr>
                <tr>Component ที่ตอนแรกนั้นงงๆ แต่พแเขียนเป็นนี่โคตรสะดวกเลยมันอารมณ์กับที่เราทำอะไรซ้ำๆได้โดยแค่เขียนสั้นๆ เช่น post/ จบเลยแบบ Ez </tr>
                <tr>props นั้นคือเก็บข้อดีๆนี่เองแถมเอามาใช้ได้อีก ส่วนตัวผมชอบใช้ function มากกว่า class เพราะเขียนง่ายดี 555</tr>
                <tr>ส่วน state คือ props ที่เปลี่ยนค่าได้เข้าใจถูกมั้ยนะ? </tr>
                <tr>router ตามที่พี่บอกเลยยากที่จะเข้าใจแต่พอเข้าใจแล้วรู้สึกว่ามันก็สะดวกดีหล่ะนะแต่เขียนหลานเว็บจริงๆกว่าจะมารวมเป็นเว็บที่เสร็จได้เนี่ย ปาดเหงื่อออ</tr>
            </table>
        </div>
    )
}
