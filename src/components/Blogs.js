import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogData, selectSearchInput } from "../features/userSlice";

function Blogs(){
    const searchInput = useSelector(selectSearchInput);

   const url = `https://gnews.io/api/v4/search?q=${searchInput}&
   token=a2b310e613d52642a18de76f0e4ffc12`;

 const dispatch = useDispatch();
 const [blogs, setBlogs] = useState();

 const [loadig, setLoading] = useState(true);


  useEffect  (() => {
       
    axios.get(url)
    .then( (response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
    })
    .catch( (error) => {
        console.log(error);
    });
   }, [searchInput]);

    return(
        <div className ='blogjs'>
        <h1 className = 'blog_header'>Blogs</h1>
        {loadig ? <h1 className='loading'>Loading...</h1> : ''}
        <div className = 'blogs'>
            {blogs?.articles?.map( (blog) =>
            (
                <a className = 'blog' target='_blank' href={blog.url}>
                    <img src = {blog.image} />
                <div>
                <h3 className= 'sourceName'>
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
                </h3>
                <h1>
                    {blog.title}
                    <p>{blog.decription}</p>
                </h1>
                </div>
          </a>
            ))}

            {blogs?.totalArticles == 0 && (
                <h1 className = 'no_blogs'>
                    No blogs available. Search something else to read blogs on the greatest platform.
                </h1>
            )}
        </div>
        </div>
    );
}
export default Blogs;