import React from 'react';
import './Testimonials.css'
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png'

const testimonialData =[
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name:'wilson Harry',
        from:'california',
        img: wilson
        
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name:'Ema Gomez',
        from:'california',
        img: ema
        
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name:' Aliza Farari',
        from:'california',
        img: aliza
        
    }
] 


const Testimonials = () => {
    return (
        <section className=" testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className="mt-5 card-deck" >
                    {
                        testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial.name}></TestimonialDetail>)
                    }
                </div>

            </div>
            
        </section>
    );
};

export default Testimonials;