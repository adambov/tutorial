import React from "react";

const Book = ({img, title, author}) => {

    const clickHandler = (e) => {
        alert('hello world');
        console.log(e);
        console.log(e.target);
    };

    const otherButton = (author) => {
        console.log(author);
    }

    return (
        <article className="book" onMouseOver={()=>{
            console.log(title);
        }}>
           <img src={img} alt='' />
           <h1 onClick={() => console.log(title)}>{title}</h1>
           <h4>{author}</h4>
           <button type="button" onClick={clickHandler}>
            example button
           </button>
            <button type="button" onClick={() => otherButton(author)}>other button</button>
        </article>
    );
};

export default Book

