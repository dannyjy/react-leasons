import React, { useEffect, useRef } from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const timeOutRef = useRef(0)

    function handleClick() {
        timeOutRef.current = setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }

    useEffect(() => {
        return () => clearTimeout(timeOutRef.current)
    },[])

    return <button onClick={handleClick}>Count: { count }</button>;
}

export default Counter