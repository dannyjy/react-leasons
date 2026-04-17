import React from 'react'
import type { SearchType } from '../types/types';

const Search = ({ query }: SearchType ) => {
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        const options = {query};
        fetch("https://dummyjson.com/posts", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(options)
        })
        .then(res => res.json())
        .then(setResults);
    }, [query]);

    return <div>{results.length}</div>;
}

export default Search