import React from 'react'
import Main_button from "../../components/Main_button/Main_button"
import "./Services.scss"
import phone_black from "../../assets/vector_black.png"
import poster1 from "../../assets/poster1.png"
import { useState } from 'react';
import home from "../../assets/home.png"
    
function Services() {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
      setOpenMenu(openMenu === menu ? null : menu); 
    };
  return (<div className='container'>
                <img src={home} alt="" className='home-png'/>
    <div id="services" >
        <ul className='services-side-bar'>
            <li>Transport</li>
            <li>Logistika</li>
            <li>Yükdaşıma</li>
            <li onClick={() => toggleMenu('xalca')}><div><span >Xalçayuma </span><i class={`fa-solid fa-caret-${openMenu==="xalca"? "down":"up"}`}></i></div>
                <ul className={`dropdown ${openMenu === 'xalca' ? 'open' : ''}`}>
                    <li>Ev heyvanlarının və digər qoxuların aradan qaldırılması</li>
                    <li>Korporativ xidmət</li>
                    <li>Sintefon yorğan, yastıq və örtüklərin yuyulması</li>
                    <li>Xüsusi ləkə çıxarma</li>
                    <li>Ədyal, pled və örtüklərin yuyulması</li>
                    <li>Xalçaların bərpası - Overlock</li>
                </ul>
                </li>
            <li>Təmizlik xidməti</li>
            <li>Evakuasiya</li>
            <li>Anbar xidməti</li>
            <li>İşçi qüvvəsi xidməti</li>
            <li>Usta xidməti</li>
            <li>Texnoloji həllər</li>
            <li>HVAC</li>
            <li>Sanitariya xidməti</li>
            <li>Karqo xidməti</li>
        </ul>
        <div className='services-main'>
            <div className='transport-part'>
                <div className='transport-lorem'>
                    <h1>Transport</h1>
                    <div className='transport-buttons'>
                    <Main_button>
                        <h1>Sifariş ver</h1>
                    </Main_button>
                    <button className='white-button'><img src={phone_black} alt="" />166</button>
                    </div>
                    <p>Turizm, iş və digər sahələrdə ən rahat, müasir standartlara uyğun və operativ sərnişin daşınma xidmətini 166 Transport təklif edir. 
166 Transport xidməti hazırda ölkənin Sprinter icarəsi və turların təşkili üzrə ən qabaqcıl xidmətlərindən biridir. 
Peşəkar sürücülərimiz tərəfindən sərnişinlərin bir ünvandan digər ünvana təhlükəsiz daşınmasını təmin edirik.
</p>
                </div>
                <div className='transport-poster'>  
                    <img src={poster1} alt="" />
                </div>
            </div>
            <div className='advantages'>
                <h2>Sprinterlərimizin üstünlük və özəllikləri:</h2>
                <div className='advantages-grid'>
                <div>
                    <h3>WI-FI sisteminin olması</h3>
                </div>
                <div>
                    <h3>Powerbankların olması</h3>
                </div>
                <div>
                    <h3>Sürət həddinə xüsusi nəazarət (GPS)</h3>
                </div>
                <div>
                    <h3>18-20 nəfərlik olması</h3>
                </div>
                <div>
                    <h3>Yumşaq və komfortlu oturacaq</h3>
                </div>
                <div>
                    <h3>Kondisioner və monitor</h3>
                </div>
                <div>
                    <h3>Masa və işıqlı salon</h3>
                </div>
                <div>
                    <h3>Mütəmadi təmizlənən salon</h3>
                </div>
                <div>
                    <h3>Baqaj</h3>
                </div>
                <div>
                    <h3>Peşəkar sürücü heyəti</h3>
                </div>
                </div>
                
            </div>
            <div className='why-sprinter'>
                <h2>Sprinterlərdən nə üçün istifadə etmək olar?</h2>
                <ul>
                    <li>Şəhərdaxili sərnişin daşınması </li>
                    <li>Ailəvi, dostlarla və ya iş yoldaşlarınızla birgə  istirahət üçün</li>
                    <li>Toy, yas və digər mərasimlər üçün </li>
                    <li>Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi heyətinin daşınması)</li>
                    <li>Hava limanından turistlərin istənilən ünvana çatdırılması </li>
                    <li>Həftəiçi şirkət işçilərinin daşınması</li>
                    <li>Məktəblilərin və universitet tələbələrinin daşınması</li>
                    <li>Müalicə məqsədilə bölgələrimizə səyahət edən şəxslər</li>
                    <li>Ölkənin dörd bir yanına səfər təşkil edən tur agentləri</li>
                    <li>Zavod, fabrik, bank işçilərinin istirahət və ya iş məqsədilə daşınması </li>
                    <li>Özəl səfərlər üçün sürücü və nəqliyyat vasitəsinin icarəsi</li>
                </ul>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Services
