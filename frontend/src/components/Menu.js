const Menu = ({ count, deleteItem }) => {
    return (
       <div className="login">
        <table className="table-fill">
         <thead>
        <tr>
            <th className="text-left">Datum</th>
            <th className="text-center">Anzahl</th>
            <th className="text-left">Aktion</th>
        </tr>
        </thead>
        <tbody className="table-hover">

        { 
          count.slice(0).reverse().map(item => <Item key={item.id} item={item} deleteItem={deleteItem} />) 
        }
        
        </tbody>
        </table>
       <br/>
      </div>
    )
}

const Item = ({ item, deleteItem }) => {
    return (
        <tr>
            <td className="text-left">{ item. date }</td>
            <td className="text-center">{ item.count }</td>
            <td className="text-left">
            <button className="btn-table" onClick={() => deleteItem(item.id)} >Del</button></td>
        </tr>
    )
} 

export default Menu
