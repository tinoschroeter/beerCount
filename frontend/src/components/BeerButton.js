const BeerButton = ({ menuItem, coloring }) => {
    return (
     <div id="stage">
       <div className="menu__button" onClick={() => menuItem('menu') } >
         <i className="fas fa-beer fa-2x" style={{ color: coloring }}></i>
       </div>
      </div>
    )
}

export default BeerButton
