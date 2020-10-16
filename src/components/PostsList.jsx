import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom";
import PostSolo from "./PostSolo";



const PostsList = (props) => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await fetch(`http://127.0.0.1:3002/all`);
            const postData = await response.json();
            console.log("postdata is", postData);
            setPost(postData);
        })();
    }, [setPost]);

    
        return (
        <>
            <h1>These are posts from my database</h1>
            <Route exact path="/">
           <div>
           {posts.map((post) => {
              return (
                  <li key={post.id}>
                      {post.title}
                <Link to={`/post/${post.id}`}>View Post</Link>
            
                      
                  </li>
              );
            })}
           </div>
           </Route>
           <Route path={`/post/:post_id`}>
                <Link to="/">Return to List</Link>
              <PostSolo posts={posts} />
          </Route>
        </>
       
       )
    
}

export default PostsList;
