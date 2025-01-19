import { useState } from "react";


export default function Count(){
    let [count, setCount] = useState(0);
    let  [isLike, setIsLike] = useState(false);
    function likeTouggle(){
        setIsLike(!isLike);
    }
    function incCount(){
        // setCount(count= count + 1);
        setCount((currCount)=>{
            return currCount + 1; 
        })
        setCount((currCount)=>{
            return currCount + 1; 
        })
    }
    // function incCount(){
    //     count = count + 1;
    //     console.log(count);
    // }
    
    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increse Count</button>
            <p onClick={likeTouggle}>
                {
                    isLike ?  <i class="fa-solid fa-heart" style={{color: "red"}}></i> :  <i class="fa-regular fa-heart" ></i> 
                }
           
            
            </p>
        </div>
    );
}