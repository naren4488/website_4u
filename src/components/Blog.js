import React from 'react'
import "./css/Blog.css";
import blogs from "./blogData.json";
import { HashLink } from 'react-router-hash-link';

export default function Blog() {
    return (
        <section className="blogs">
            <h3 className="section-heading">Blogs</h3>
            <div className="blog" id="blog">
                {
                    blogs.map((blog,i)=>{
                        return <div className="card">
                        <div class="card-top">
                            <img src={blog.image} alt="Blog Name"/>
                        </div>
                        <div class="card-info">
                            <h2>{blog.Title}</h2>
                            <span class="date">{blog.date}</span>
                            <p class="excerpt">{blog.text.slice(0,100).concat("...")}</p>
                        </div>
                        <div class="card-bottom flex-row">
                            <p class="author">- By {blog.author}</p>
                            <HashLink to={blog.link} class="button">Read More</HashLink>
                        </div>
                    </div>
                    })
                }
            </div>
        </section>
    )
}
