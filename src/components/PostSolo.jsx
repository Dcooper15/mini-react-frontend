import React from "react";
import { useParams } from "react-router-dom";

const PostSolo = (props) => {
    const { posts } = props;
    const { post_id } = useParams();



    const post = posts.find((post) => {
        return post.id === parseInt(post_id) ? post : null;
    });

    return (
        <div>

            {!!post ? (<><h3>{post.title}</h3>
                <p>{post.content}</p></>) : (<p>Loading Post...</p>)}

        </div>
    );

};





export default PostSolo;

