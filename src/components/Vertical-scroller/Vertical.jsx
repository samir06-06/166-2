import React, { useState } from 'react';
import './Vertical.scss'; // Styles
import line from "../../assets/Line 2.png"

function Vertical() {
  const [hoveredStep, setHoveredStep] = useState(null);


  const handleStepHover = (step) => {
    setHoveredStep(step);
  };

 
  const handleStepLeave = () => {
    setHoveredStep(null); 
  };

  return (<>
    <h1 className='how-work'><img src={line} alt="" />Biz necə işləyirik?</h1>
    <div className="timeline-container">
      <div className="timeline-sidebar">
        <ul>
          <li
            className={hoveredStep === 1 ? 'active' : ''}
          >
            <div className="circle">1</div>
          </li>
          <li
         
            className={hoveredStep === 2 ? 'active' : ''}
          >
            <div className="circle">2</div>
          </li>
          <li
           
            className={hoveredStep === 3 ? 'active' : ''}
          >
            <div className="circle">3</div>
          </li>
          <li
           
            className={hoveredStep === 4 ? 'active' : ''}
          >
            <div className="circle">4</div>
          </li>
          <li
           
            className={hoveredStep === 5 ? 'active' : ''}
          >
            <div className="circle">5</div>
          </li>
          <li
          
            className={hoveredStep === 6 ? 'active' : ''}
          >
            <div className="circle">6</div>
          </li>
        </ul>
      </div>
      <div className="timeline-content">
        <div>
          <div className='content'>
            <h1 onMouseEnter={() => handleStepHover(1)}
            onMouseLeave={handleStepLeave}
                style={{ background: hoveredStep === 1 ? '#ffcc4d' : '#d7d7d7' }}>
                <a>1</a>
            </h1>
            <span>166-ya zəng etməklə sifariş verirsiniz</span>
            <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən <br/>
            istifadə etməklə biz əlaqə saxlaya bilərik
            166 və ya</p>
          </div>
          <div className='content'>
            <h1 onMouseEnter={() => handleStepHover(2)}
            onMouseLeave={handleStepLeave}
              style={{ background: hoveredStep === 2 ? '#ffcc4d' : '#d7d7d7' }}><a>2</a></h1>
            <span>166-ya zəng etməklə sifariş verirsiniz</span>
            <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən <br/>
            istifadə etməklə biz əlaqə saxlaya bilərik
            166 və ya</p>
          </div>
          <div className='content'>
            <h1 onMouseEnter={() => handleStepHover(3)}
            onMouseLeave={handleStepLeave}
            style={{ background: hoveredStep === 3 ? '#ffcc4d' : '#d7d7d7' }}><a>3</a></h1>
            <span>166-ya zəng etməklə sifariş verirsiniz</span>
            <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən <br/>
            istifadə etməklə biz əlaqə saxlaya bilərik
            166 və ya</p>
          </div>
          <div className='content'>
            <h1 onMouseEnter={() => handleStepHover(4)}
            onMouseLeave={handleStepLeave}
             style={{ background: hoveredStep === 4 ? '#ffcc4d' : '#d7d7d7' }}><a>4</a></h1>
            <span>166-ya zəng etməklə sifariş verirsiniz</span>
            <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən <br/>
            istifadə etməklə biz əlaqə saxlaya bilərik
            166 və ya</p>
          </div>
          <div className='content'>
            <h1 onMouseEnter={() => handleStepHover(5)}
            onMouseLeave={handleStepLeave}
            style={{ background: hoveredStep === 5 ? '#ffcc4d' : '#d7d7d7' }}><a>5</a></h1>
            <span>166-ya zəng etməklə sifariş verirsiniz</span>
            <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən <br/>
            istifadə etməklə biz əlaqə saxlaya bilərik
            166 və ya</p>
          </div>
          <div className='content'>
            <h1 onMouseEnter={() => handleStepHover(6)}
            onMouseLeave={handleStepLeave}
            style={{ background: hoveredStep === 6 ? '#ffcc4d' : '#d7d7d7' }}><a>6</a></h1>
            <span>166-ya zəng etməklə sifariş verirsiniz</span>
            <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən <br/>
            istifadə etməklə biz əlaqə saxlaya bilərik
            166 və ya</p>
          </div>
         
        </div>
      </div>
    </div>
    </>
  );
}

export default Vertical;
