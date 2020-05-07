import React from 'react';
import styled from 'styled-components';
import Logo from "../img/take your heart.jpg";
import logoK from "../img/kong.jpg";
import logoG from "../img/cat.jpg";
import logoT from "../img/guy.jpg";
import { Link } from 'react-router-dom';
import '../css/App.css';
import '../css/home.css';

const StyledBody = styled.div`
  background: url('http://getwallpapers.com/wallpaper/full/4/6/7/1086408-free-download-persona-5-wallpapers-1920x1080-full-hd.jpg');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;



export default function home() {
    return (
        <StyledBody>
            <div className="App">
            <p className="Group">Three Houses</p>
            <img className="Logo" src={Logo} />
            <table className = "quote">
              <tr>
                <th>นิ่งเป็นหลับ</th>
              </tr>
              <tr>
                <th>ขยับเป็นแดก</th>
              </tr>
              <tr>
                <th>แยกเป็นหลง</th>
              </tr>
            </table>
          <p className = "Member">Member</p>
          </div>
          <Link to = "/kong"><img className = "profileK" src = {logoK}/></Link>
          <Link to = "/kong"><img className = "profileG" src = {logoG}/></Link>
          <Link to = "/toue"><img className = "profileT" src = {logoT}/></Link>
        <p className = "nametagK">ชัยวัฒน์ สุทธิประภา 6210402399</p>
        <p className = "nametagG">ศวิล บุญมา 6210402500</p>
        <p className = "nametagT">ธนพล ศรีนาคร 6210402497</p>
        </StyledBody>
    )
}
