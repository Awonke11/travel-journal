import {useState, useEffect} from 'react';

const Quotes = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const url = "http://api.quotable.io/random";

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(quote => {
            console.log(quote)
            setQuote(quote.content)
            setAuthor(quote.author)
        })
    }, [])
    
    return (
        <div className='quotes'>
            <h1 className='quote'>"{quote}"</h1>
            <h2 classNmae='author'>-{author}-</h2>
        </div>
    );
}

export default Quotes;