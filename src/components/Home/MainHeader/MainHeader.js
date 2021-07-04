import React from 'react';
import chair from '../../../images/Mask Group 1.png';
import { Link } from 'react-router-dom';


const MainHeader = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br />Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas tenetur distinctio blanditiis quidem perferendis ipsam deleniti exercitationem officia iste </p>
               <Link to = "appointment"> <button className="btn btn-primary">GET APPOINTMENT</button> </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default MainHeader;