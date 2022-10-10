import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css'
import Book from "./book";

const books = [
{
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
},
{
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81PMOtoT7zL._AC_UL127_SR127,127_.jpg',
    title: 'Fairy Tale',
    author: 'Fairy Tale'
},
{
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL127_SR127,127_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens'
}
];


function BookList() {
return (
    <section className="booklist">
        {books.map((book, index) => {
            // const { img, title, author } = book;
            return <Book key={book.id} {...book}></Book>;
        })}
    </section>
);
};


const container =  document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);

