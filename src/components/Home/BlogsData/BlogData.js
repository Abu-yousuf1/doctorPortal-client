import React from 'react';
import './BlogsData.css'
import wilson from '../../../images/Ellipse 1.png'
import Blogs from '../Blogs/Blogs';

const blogData =[
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
        author: 'Dr. Cudi',
        authorImg: wilson ,
        date: '23 April 2021'
    },
    {
        title: 'Tow time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
        author: 'Dr. Sinthia',
        authorImg: wilson ,
        date: '23 April 2021'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
        author: 'Dr. Cudi',
        authorImg: wilson ,
        date: '23 April 2021'
    }
]

const BlogData = () => {
    return (
        <section className=" blogs my-5 ">
        <div className="container">
            <div className="section-header text-center">
                <h5 className="text-primary text-uppercase">Our blog</h5>
                <h1>From Our Blogs News</h1>
            </div>
            <div className="mt-5 card-deck" >
                {
                    blogData.map(blog => <Blogs blog={blog} key={blog.title}></Blogs>)
                }
            </div>

        </div>
        
    </section>
    );
};

export default BlogData;