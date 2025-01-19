import Product from "./Product"

export default function ProductTab(){
   let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alingItems: "center"
   };
    return (
    
       
        <div style={styles}>
        <Product title="Logitech MX Master 3S" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Neb-Transformet" idx={2}/>
        <Product title=" Wireless Mouse" idx={3}/>
        </div>

    )
}