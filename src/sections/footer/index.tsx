import LOGO from '@/images/LOGO-CFL-TECNOLOGIA-2.png';
import { InstagramLogo } from '@phosphor-icons/react';
import GROUP_SERGIPE from '@/images/gruposergipe_landingpage_cfl.png';
import GrupoSergipeFooter from '@/components/grupoSergipeFooter';

const Footer = () => {
  const styles = {
    mainDiv: 'flex justify-center',
    container: 'z-10 flex-col absolute section-container',
    links:
      'text-secondary flex flex-row justify-center content-center items-center p-4 gap-[5px]',
    logo: 'z-10 relative',
    svg: 'absolute w-full h-[400px] box-border block bg-babyBlue ',
    groupSergipe: 'z-10 relative w-full  ',
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.container}>
        <img className={styles.logo} src={LOGO}></img>
        <a
          href="https://www.instagram.com/cfltecnologia/"
          target="_blank"
          className={styles.links}
        >
          <InstagramLogo size={32} weight="fill" color="#5a2678" />{' '}
          @cfltecnologia
        </a>
        <GrupoSergipeFooter style={styles.groupSergipe} />
      </div>

      <svg
        className={styles.svg}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 600 820"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="bg">
            <stop
              offset="0%"
              style={{ stopColor: 'rgba(130, 158, 249, 0.06)' }}
            ></stop>
            <stop
              offset="50%"
              style={{ stopColor: 'rgba(76, 190, 255, 0.6)' }}
            ></stop>
            <stop
              offset="100%"
              style={{ stopColor: 'rgba(115, 209, 72, 0.2)' }}
            ></stop>
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="10s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
  );
};

export default Footer;