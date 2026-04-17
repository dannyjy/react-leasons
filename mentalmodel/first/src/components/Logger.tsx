import React, { useRef } from "react";

export function Logger() {
    const [count, setCount] = React.useState(0);
    const countRef = useRef(count)
    countRef.current = count

    console.log("Rendered")
    React.useEffect(() => {
        console.log("Rendered")
        const id = setInterval(() => {
            console.log(countRef.current);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return <button onClick={ () => setCount(prevCount => prevCount + 1)}>Increment</button >;
}

// export function Logger() {
//     const [count, setCount] = React.useState(0);
//     console.log("Rendered")
//     React.useEffect(() => {
//         console.log("Rendered")
//         const id = setInterval(() => {
//             console.log(count);
//         }, 1000);

//         return () => clearInterval(id);
//     }, [count]);

//     return <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment</button>
// }