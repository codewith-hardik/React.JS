import { useState } from "react";
import "./Comment.css"

import CommentsForm from "./CommentsForm";

export default function Comment(){

    let [comments, setComment] = useState([{
        username: "Hardik",
        comment: "Good Coder!!!",
        rating: 5
    }])
    let addNewComment = (comment)=>{
        setComment((currComments)=> [...currComments, comment])
        
    }

    return (
        <div>
            <h2>All Comment</h2>
            {comments.map((comment,idx)=>(
                <div className="comment" key={idx}>
                <span><i> -{comment.username}</i></span>
                <br />
                <span>{comment.comment}</span>
                <br />
                <span>(Rating : {comment.rating}⭐)
                </span>
            </div>
            ))}
            
            <hr />
            <CommentsForm  addNewComment={addNewComment}/>
        </div>
    );
}