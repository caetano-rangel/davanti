import '../styles/components/video.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Video() {
  AOS.init();
    return (
      <div id="video-box">
        <div data-aos= "fade-up" data-aos-duration="2000" className="video">
            <h1>oi</h1>
        </div>
      </div>
    )
  }

  export default Video