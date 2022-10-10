import React from "react";
import ReactDOM from "react-dom";

function BookList() {
return (
    <section>
        <Book/>
    </section>
);
};

const Book = () => {
    return (
        <article>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Image = () => {
    return (<img 
    src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg"
    alt=""
    />
)
};

const Title = () => {
    return <h1>I Love You to the Moon and Back</h1>
};

const Author = () => {
    return <p>Amelia Hepworth</p>
};

ReactDOM.render(<BookList/>, document.getElementById('root'));