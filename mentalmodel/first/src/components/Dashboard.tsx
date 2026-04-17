import React from 'react'
import type { PostType } from '../types/types';

const Dashboard = ({ postId }: { postId: string }) => {
    const [post, setPost] = React.useState<PostType | null>(null);
    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
            .then(res => res.json())
            .then(setPost);
            setTheme("light");
        document.body.style.background = theme === "dark" ? "#000" : "#fff";
        document.body.style.color = theme === "dark" ? "#fff" : "#000";
    }, [postId, theme]);

    return <div>{post?.title}</div>;
}

export default Dashboard