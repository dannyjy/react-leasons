import React from 'react'

const Batching = () => {
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    return <button onClick={increment}>{ count }</button >;
}

export default Batching