import React, { useCallback } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import '../css/kong.css'
import profile from '../img/kong-profile.gif'
import fbicon from '../img/fb icon.jpg'
import lineicon from '../img/line icon.jpg'
import steamicon from '../img/steam icon.jpg'
import igicon from '../img/ig.png'
import phoneicon from '../img/Phone icon.jpg'
import App from '../App.js'
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledBody = styled.div`
  background: url('https://images8.alphacoders.com/888/thumb-1920-888559.jpg');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default function kong() {
    return (
        <StyledBody>
            <div><span className="mywork">My Work</span>
            <button className= "weekbutton" type="button"><b>2|29.04.2020</b></button> 
            <button className= "weekbutton" type="button"><b>3|2.05.2020</b></button> 
            <button className= "weekbutton" type="button"><b>4|9.05.2020</b></button> 
            <button className= "weekbutton" type="button"><b>5|16.05.2020</b></button> 
            <button className= "weekbutton" type="button"><b>6|23.05.2020</b></button>
            <Link to = "/"><button type="button" class="homepage"><b>Homepage</b></button></Link>
            </div>
    <div className="all">
        <h1 className="pro"><b>Profile</b></h1>
        <img className = "profile" src = {profile} />
        <br />
        <br />
        <table className="info">
            <tr>
                <th className="big">ชื่อ:</th>
                <td className="small">ชัยวัฒน์</td>
            </tr>
            <tr>
                <th className="big">นามสกุล:</th>
                <td className="small">สุทธิประภา</td>
            </tr>
            <tr>
                <th className="big">รหัสนิสิต:</th>
                <td className="small">6210402399</td>
            </tr>
            <tr>
                <th className="big">สีที่ชอบ:</th>
                <td className="small">สีดำ</td>
            </tr>
            <tr>
                <th className="big">สัตว์ที่ชอบ:</th> 
                <td className="small">แมว <FontAwesomeIcon icon={faCat} /></td>
            </tr>
            <tr>
                <th className="big">งานอดิเรก:</th>
                <td className="small">เล่นเกม <FontAwesomeIcon icon={faGamepad} />,ฟังเพลง <FontAwesomeIcon icon={faHeadphones} />,สะสมหนังสือการ์ตูน <FontAwesomeIcon icon={faBook} /></td>
            </tr>
            <tr>
                <th className="big">ความสามารถทาง Programming:</th> 
                <td className="small">Python,C,C++</td>
            </tr>
            <tr>
                <th className="big">ความสามารถพิเศษ:</th> 
                <td className="small">ร้องเพลงเพราะ</td>
            </tr>
        </table>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <span onClick={()=> window.open("https://www.facebook.com/goku.songoku.750/", "_blank")}><img className = "icon" src = {fbicon}/><span className="ID">FB:Chaiwat Suttiprapha</span></span>
        <span onClick={()=> window.open("https://www.instagram.com/chaiwat_kongs/?hl=th", "_blank")}><img className = "icon" src = {igicon}/><span className="ID">IG:chaiwat_kongs</span></span>
        <img className = "icon" src = {lineicon}/><span className="ID">ID:rockerlaw2135 </span>
        <img className = "icon" src = {phoneicon}/><span className="ID">0613845483</span>
        <span onClick={()=> window.open("https://www.facebook.com/goku.songoku.750/", "_blank")}><img className = "icon" src = {steamicon}/><span className="ID">Steam:Deapercost</span></span>
        </StyledBody>
    )
}
