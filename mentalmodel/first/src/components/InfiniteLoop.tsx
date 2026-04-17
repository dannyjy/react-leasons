import React from 'react'

const InfiniteLoop = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const controller: AbortController = new  AbortController()
        function fetchData(){
            fetch("https://dummyjson.com/posts",{signal: controller.signal})
                .then(res => res.json())
                .then(setData)
                .catch(err => {
                    if(err instanceof DOMException && err.name === "AbortError") return
                })
        }
        fetchData()

        return () => {
            controller.abort()
        }
    }, []);

    return <h1>{data.length > 0 ? data.length : 0 }</h1>;
}

export default InfiniteLoop