import React, { useState, useEffect } from 'react';
import line from "../../assets/Line 2.png";
import home from "../../assets/home.png";
import Second_navbar from '../../components/Second_navbar/Second_navbar';
import "./Media.scss";
import Media_cards from '../../components/Media_cards/Media_cards';
import Pagination from '../../components/Pagination/Pagination';
import Pic_card from '../../components/Pic_card/Pic_card';
import bg1 from "../../assets/Banner1.png"
import phone from "../../assets/Vector.png"


const Media = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();

        setMediaItems(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  
  const offset = currentPage * itemsPerPage;
  const currentItems = mediaItems.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(mediaItems.length / itemsPerPage);

  return (
    <div className='container'>
      <img src={home} alt="" className='home-png'/>
      <Second_navbar/>
      <h1 className='how-work'> <img src={line} alt="" />Mediada biz</h1>
      <div className='media-bottom'>
        {currentItems.map((item, index) => (
          <Media_cards key={index} {...item} /> 
        ))}
      </div>
      <div className='pagination-part'>
        <Pagination 
          pageCount={pageCount}
          onPageChange={setCurrentPage}
        />
      </div>
      <Pic_card
      background={bg1}
      h1=" 03.08.25-ə qədər"
      h2="20%-Lorem ipsum dolor sit amet"
      h3=""
      h4={
        <>
          Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare <br />
          viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.
        </>
      }
      children={<>
        <img src={phone} alt="" /><h1>&nbsp;166</h1>
        </>}
        >
      </Pic_card>
    </div>
  );
};

export default Media;
