import "./Price.css"
export default function Price({oldPrice,newPrice}){
    return (
        <div className="price" style={{borderBottomLeftRadius:"18px", borderBottomRightRadius:"18px"}}>
            <span style={{textDecorationLine: "line-through"}}>₹ {oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={{fontWeight:"bolder"}}>₹ {newPrice}</span>
        </div>
    );
}