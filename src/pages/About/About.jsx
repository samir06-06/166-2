import React from 'react'
import "./About.scss"
import time from "../../assets/misson-icons/time.png"
import price from "../../assets/misson-icons/price.png"
import solution from "../../assets/misson-icons/solution.png"
import transport from "../../assets/misson-icons/transport.png"
import about from "../../assets/about.jpg"
import line2 from "../../assets/Line 2.png"
import { Link } from 'react-router-dom'
import home from "../../assets/home.png"
import Vertical from '../../components/Vertical-scroller/Vertical'
import Customer_reviews from '../../components/Customer_reviews/Customer_reviews'
import Second_navbar from '../../components/Second_navbar/Second_navbar'
function About() {
  return (
    <div id="about" className='container'>
        <img src={home} alt="" className='home-png'/>
            <Second_navbar/>
      <div className='about-card-1'>
        <div className='card-1-img'>
            <h1> <img src={line2} alt="" />&nbsp;Haqqımızda</h1>
            <i> “166 Yükdaşıma və Logistika – Yükünüzü daşıyırıq”</i>
        <img src={about} alt="" className='about-pic'/>
        </div>
            <p>
            2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə başlayan “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və logistika sahəsi üzrə ölkənin qabaqcıl şirkətlərindən biridir. Yüklərin daşınması yalnız ölkədaxili sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq arenada da həyata keçirilir.Daim müştərilərimizin xidmətində olmaq və operativ xidmət göstərmək məqsədilə 166 qaynar xəttimiz 7/24 ölkənin istənilən nöqtəsindən zəngləri qəbul edir.<br/>
Göstərdiyimiz xidmətin müştərilərimizə rahat və əlçatan olması məqsədilə xidmət sahələrimiz genişlənməyə davam edir. Şirkətimiz yükdaşıma sahəsi ilə fəaliyyətə başlasa da, hazırda müxtəlif kompleks xidmətləri – yükdaşıma ve <br/> logistika, evakuasiya, işçi qüvvəsi, usta xidməti, anbar xidməti, təmizlik xidməti və xalça yuma xidmətlərini müştərilərinə təqdim edib.Xidmətlərimizin daha əlçatan olması üçün sərfəli qiymət və hər bir bölgəyə xidmət anlayışları ilə çalışırıq.<br/>
 166 brendi altında fəaliyyət göstərən hər bir xidmətin keyfiyyətinin ölçülməsi bizim üçün olduqca vacibdir. Bu məqsədlə, mütəmadi olaraq müştərilərimizin göstərilən xidmətlər üzrə fikirlərini öyrənir, təklif və iradlarına əsasən xidmət keyfiyyətini daim təkmilləşdiririk. (ISO 9001:2015 - Keyfiyyət İdarəetmə Sistemi, ISO 45001:2018 - Peşə Sağlamlığı və Əməyin Təhlükəsizliyi İdarəetmə Sistemi və ISO 14001:2015 - Ətraf Mühitin İdarəetmə sistemi üzrə beynəlxalq sertifikatları)
            </p>
      </div>
      <div className='about-card-2'>
        <div className="points">
            <div className='point'>
                <h3>526368+</h3>
                <p>Daşınmış ofis və ev</p>
            </div>
            <div className='point'>
                <h3>2365+</h3>
                <p>Təmizlik edilmiş məkan</p>
            </div>
            <div className='point'>
                <h3>327166+</h3>
                <p>Müştəri rəyləri</p>
            </div>
            <div className='point'>
                <h3>304264+</h3>
                <p>Məmnun qalan müştərilər</p>
            </div>
        </div>
        <div className='mission'>
            <h1><img src={line2} alt="" />&nbsp;Missiyamız</h1>
            <p>Missiyamız, müştərilərimizi və partnyorlarımızı dərindən anlamaq, onlara effektiv logistik həlləri yüksək keyfiyyətdə təqdim etmək və eyni zamanda əməkdaşlarımızın şəxsi inkişafı və motivasiyasını üst səviyyədə tutmaqdır.</p>
            <div className='mission-icons'>
                <div>
                    <img src={time} alt="" />
                    <h5>Sürətli xidmət</h5>
                </div>
                <div>
                    <img src={price} alt="" />
                    <h5>Sərfəli qiymət</h5>
                </div>
                <div>
                    <img src={solution} alt="" />
                    <h5>Kompleks həllər</h5>
                </div>
                <div>
                    <img src={transport} alt="" />
                    <h5>Nəqliyyat infrastrukturunun inkişafı</h5>
                </div>
            </div>
        </div>
    
      </div>
        <Vertical/>
        <Customer_reviews/>
    </div>
  )
}

export default About
