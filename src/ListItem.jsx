import './ListItem.css'
 const Item = ({ Itemimg, chaper, nameItem, onClick }) => {
    return (
        <div className="item" onClick={onClick} style={{ cursor: 'pointer' }}>
          <img src={Itemimg} />
          <p>{chaper}</p>
          <h3>{nameItem}</h3>
        </div>
      );
 }

 export default Item;