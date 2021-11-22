import "./backgroundFigure.css";
const BackgroundFigure = ({ two }) => {
  return (
    <>
      {two && (
        <svg
          className="background-two "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1040 320"
        >
          <path
            fill="#235477"
            fillOpacity="1"
            d="M0,256L30,250.7C60,245,120,235,180,218.7C240,203,300,181,360,176C420,171,480,181,540,192C600,203,660,213,720,208C780,203,840,181,900,170.7C960,160,1020,160,1080,154.7C1140,149,1200,139,1260,112C1320,85,1380,43,1410,21.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      )}
      {!two && (
        <svg
          className="background-one"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,224L34.3,224C68.6,224,137,224,206,224C274.3,224,343,224,411,202.7C480,181,549,139,617,149.3C685.7,160,754,224,823,213.3C891.4,203,960,117,1029,106.7C1097.1,96,1166,160,1234,208C1302.9,256,1371,288,1406,304L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      )}
    </>
  );
};

export default BackgroundFigure;
