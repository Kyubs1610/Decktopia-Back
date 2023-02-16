import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import image1 from "../..//..//src/Asset/card_and_pack/shibs.png";
import image2 from "../..//..//src/Asset/card_and_pack/back_empty.png";


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

  const images = [image1,image2];

  return (
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
  );
}

export default Collection;
