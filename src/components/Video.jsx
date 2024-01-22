import '../styles/components/video.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import video from '../videos/pitinga.mp4'

const Video = () => {
  AOS.init();
  return (
    <div className='video-box' data-aos= "fade-up" data-aos-duration="2000">
      <video className='video-play' width="410" height="360" controls>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Video;