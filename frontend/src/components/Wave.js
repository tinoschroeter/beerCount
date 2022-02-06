const Wave = ({ fill }) => {
  return (
    <div className="waves" style={{ transform: `scale(1, ${fill})` }}>
      <div className="wave wave--back" style={{ color: "#FFFFFF" }}>
        <div className="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>

        <div className="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
      </div>
      <div className="wave wave--front" style={{ color: "#F1B10F" }}>
        <div className="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
        <div className="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Wave;
