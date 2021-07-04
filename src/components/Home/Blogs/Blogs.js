import React from 'react';

const Blogs = (props) => {
    const {title, description, author, authorImg, date} = props.blog;
    return (
        <div className="card shadow-sm">
              <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-center"> {description} </p>
            </div>
          
        </div>
    );
};

export default Blogs;