import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/Ellipse 1.png';
import Sinthia from '../../../images/Ellipse 2.png';
import './Blogs.css'
import borderBrige from '../../../images/title-icon.png'

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : Sinthia,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs mt-5 pb-5">
           <div className="container pt-1">
               <div className="text-center mt-5 mb-5">
                  <h2>RECENT NEWS</h2>
                  <img src={borderBrige} alt=""/>
                  <br/>
                  <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
               </div>
               <div className="card-deck mt-5 mb-5">
                {
                  blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                }
               </div>
           </div>
       </section>
    );
};

export default Blogs;