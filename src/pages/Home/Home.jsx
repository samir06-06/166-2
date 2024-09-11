import React from 'react'
import "./Home.scss"
import Country_card from '../../components/Country_card/Country_card'
import azerbaijan from "../../assets/flags/azerbaijan.png"
import romania from "../../assets/flags/romania.png"
import kazakhstan from "../../assets/flags/kazakhstan.png"
import poland from "../../assets/flags/poland.png"
import uzbekstan from "../../assets/flags/uzbekstan.png"
import arab_emirates from "../../assets/flags/arab_emirates.png"
import china from "../../assets/flags/china.png"
import Yellow_cards from '../../components/Yellow_cards/Yellow_cards'
import Number_cards from '../../components/Number_cards/Number_cards'
import Companies from '../../components/Companies/Companies'
import Service from '../../components/Service/Service'
import delivery from "../../assets/service-icons/delivery.png"
import employee from "../../assets/service-icons/employee.png"
import fix from "../../assets/service-icons/fix.png"
import kargo from "../../assets/service-icons/kargo.png"
import technology from "../../assets/service-icons/technology.png"
import warehouse from "../../assets/service-icons/warehouse.png"
import AutoPark from '../../components/AutoPark/AutoPark'
import Pic_card from '../../components/Pic_card/Pic_card'
import bg2 from "../../assets/Banner2.png"
import Customer_reviews from '../../components/Customer_reviews/Customer_reviews'
import Map from '../../components/Map/Map'
import Media_cards from '../../components/Media_cards/Media_cards'
function index() {
  return (
    <div id="home" className='container'>
      <h1 className='big-lorem'>Lorem ipsum dolor sit amet consectetur. <span className='magna'>Magna</span> tellus nibh lectus congue amet. </h1>   
    <div className='flags'>
      <Country_card
       country_img={uzbekstan} 
       country_name="Uzbekstan" />
      <Country_card
       country_img={kazakhstan} 
       country_name="Kazakhstan" />
      <Country_card
       country_img={azerbaijan} 
       country_name="Azerbaijan" />
      <Country_card
       country_img={poland} 
       country_name="Poland" />
      <Country_card
       country_img={arab_emirates} 
       country_name="Dubai" />
      <Country_card
       country_img={romania} 
       country_name="Romania" />
      <Country_card
       country_img={china} 
       country_name="China" />
    </div>
    <Yellow_cards/>   
    <Number_cards/>
    <Companies/>
    <div className='services'>
        <div className='services-top'>
        <h1>Xidmətlər</h1>
        <a href="">Hamısına bax <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='services-bottom'>
           <Service icon={delivery} name="Logistika"/>
           <Service icon={fix} name="Usta Xidməti"/>
           <Service icon={warehouse} name="Anbar Xidməti"/>
           <Service icon={employee} name="İşçi Qüvvəsi Xidməti"/>
           <Service icon={kargo} name="Kargo"/>
           <Service icon={technology} name="Texnoloji həllər"/>
        </div>
    </div>
    <AutoPark/>
    <Pic_card
    background={bg2}
      h1="Title 1"
      h2=" "
      h3="17 June 2021"
      h4="Lorem ipsum dolor sit amet consectetur."
      children={<>
        <h1>Ətraflı oxu</h1>
        </>}
      >
    </Pic_card>
     <div className='media-bottom'>
      <Media_cards
        h5="17 June 2021"
        h4="Lorem ipsum dolor sit amet consectetur"
        p="Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus."

      />
      <Media_cards
        h5="17 June 2021"
        h4="Lorem ipsum dolor sit amet consectetur"
        p="Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus."

      />
      <Media_cards
        h5="17 June 2021"
        h4="Lorem ipsum dolor sit amet consectetur"
        p="Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus."

      />
    </div>
    <Customer_reviews/>
    <Map/>
    </div>
  )
}

export default index
