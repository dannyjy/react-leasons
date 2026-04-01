import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }

    return <button onClick={handleClick}>Count: { count }</button>;
}

export default Counter