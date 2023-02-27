import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import image1 from "../..//..//src/Asset/card_and_pack/shibs.png";
import image2 from "../..//..//src/Asset/card_and_pack/back_empty.png";
import image3 from "../..//..//src/Asset/card_and_pack/card-aang.jpg";
import image4 from "../..//..//src/Asset/card_and_pack/card-optimus.jpg";
import image5 from "../..//..//src/Asset/card_and_pack/card-vador.jpg";
import image6 from "../..//..//src/Asset/card_and_pack/kyubsninos.png";
import image7 from "../..//..//src/Asset/card_and_pack/card-mario.jpg";
import image8 from "../..//..//src/Asset/card_and_pack/card-mickey.jpg";
import image9 from "../..//..//src/Asset/card_and_pack/card-zidane.jpg";

import Header from "..//Header_and_footer/header";


import { useRef, useEffect } from 'react';

function Collection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    // create a new Glide instance
    const slider = new Glide(sliderRef.current, {
      type: 'carousel',
      perView: 3,
      gap: 16,
      // add any other options here
    });

    // mount the slider
    slider.mount();

    // cleanup function
    return () => {
      slider.destroy();
    };
  }, []);

  const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9];

  return (
    <div>
          <Header /> <br /><br /><br /><br />
    <div ref={sliderRef} className="glide" style={{ height: 'auto',width: '100%' }}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((src, index) => (
            <li key={index} className="glide__slide">
              <img src={src} alt={`Slide ${index + 1}`} style={{ height: '70%', width: '70%', objectFit: 'cover', margin:'100px',objectPosition: 'center'  }} />
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          Previous
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          Next
        </button>
      </div>
    </div>
    </div>
  );
}

export default Collection;
