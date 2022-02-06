const ConfigButton = ({ menuItem, coloring }) => {
  return (
    <div id="stage">
      <div className="config__button" onClick={() => menuItem("config")}>
        <i className="fas fa-info-circle fa-2x" style={{ color: coloring }}></i>
      </div>
    </div>
  );
};

export default ConfigButton;
