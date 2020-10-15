import React, { useEffect, useState } from 'react';
import { loadData } from "../utils/loadData";



const Posts = (props) => {
    const [post, setPost] = useState([]);

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
           <div>
           {/* {data.map((post) => {
              return (
                  <li key={post.id}>
                      {post.content}
                      
                  </li>
              );
            })} */}
           </div>
        </>
       
       )
    
}

export default Posts;
