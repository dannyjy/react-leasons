import React from 'react'
import type { PostType } from '../types/types';

const Post = ({ postId }: { postId: string }) => {
    const [post, setPost] = React.useState<PostType | null>(null);

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const timeout = setTimeout(() => {
            controller.abort()
        },2000)

        fetch(`https://dummyjson.com/posts/${postId}`, { signal })
            .then(res => res.json())
            .then(setPost);

        return () => {
            clearTimeout(timeout);
        };
    }, [postId]);

    return <div>{post?.title}</div>;
}

export default Post