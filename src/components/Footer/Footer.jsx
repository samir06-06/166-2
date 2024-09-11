import React from 'react';
import './Footer.scss';
import instagram from "../../assets/social-media/instagram.png"
import youtube from "../../assets/social-media/youtube.png"
import linkedin from "../../assets/social-media/linkedin.png"
import facebook from "../../assets/social-media/facebook.png"
const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__section">
        <h4 className="footer__title">Xidmətlər</h4>
        <ul className="footer__list">
          <li>Transport</li>
          <li>Logistika</li>
          <li>Yükləşmə</li>
          <li>Xalça yuma</li>
          <li>Karaçı xidməti</li>
          <li className="footer__link">Hamısına bax <i class="fa-solid fa-arrow-right"></i></li>
        </ul>
      </div>
      <div className="footer__section">
        <h4 className="footer__title">Faydalı linklər</h4>
        <ul className="footer__list">
          <li>Haqqımızda</li>
          <li>Bizim komanda</li>
          <li>Mediada biz</li>
          <li>Bloq</li>
          <li>Tez-tez verilən suallar</li>
          <li>Qalereya</li>
        </ul>
      </div>
      <div className="footer__section footer_section--contact">
        <h4 className="footer__title">Əlaqə</h4>
        <span className="footer__contact">
          Ünvan: Yeni Həyat plaza 55 Zərifə Əliyeva, Bakı,<br/> Azərbaycan<br />
        </span>
        <span> Əlaqə nömrəsi: +994 (50) 253 46 16<br /></span>
        <span>         Elektron poçt: info@166.az</span>
        <div className="footer__social">
         <img src={facebook} alt="" />
         <img src={instagram} alt="" />
         <img src={youtube} alt="" />
         <img src={linkedin} alt="" />
        </div>
      </div>
      <div className="footer__copyright">
        © 2022 | 166.az | Bütün hüquqlar qorunur | <a href="http://166tech.az" className="footer__copyright-link">166tech.az</a>
      </div>
    </footer>
  );
};

export default Footer;