import React from 'react'

const WindowSize = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div>{width}</div>;
}

export default WindowSize