import { useState } from "react";
import Ticket from "./Ticket";
import Button from "./Button";
import { genRandomNum , sum} from "./helper";


export default function Lottery({n=3 ,winCondition}){
    let [ticket, setTicket] = useState(genRandomNum(n))
    let isWinning = winCondition(ticket)

    let getNewTicket = ()=>{
        setTicket(genRandomNum(n));
    }

    return(
        <div>
            <h2>Lottery Game!!!</h2>
             <br />
             <Ticket ticket={ticket}/>
            <br />
            <Button action={getNewTicket}/>
            <h3>{isWinning && "You Win!!!"}</h3>
        </div>
    );
}