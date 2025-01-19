function hendleFormSubmit(event){
    event.preventDefault();
    console.log("Form Submit");
}
function hendleHover(e){
    console.log("Hover Me!!!");
}

export default function Form(){
    return (
        <form onSubmit={hendleFormSubmit}>
            <input type="text" placeholder="Type Somting"/>
            <button>Submit</button>
            <h3 onMouseOver={hendleHover}>Hover Me!!!</h3>
        </form>
    )
}