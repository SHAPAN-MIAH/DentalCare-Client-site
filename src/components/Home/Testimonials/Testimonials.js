import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png';
import Testimonial from '../Testimonial/Testimonial';
import Carousel from 'react-grid-carousel'
import { useState} from 'react';



const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
    // {
    //     quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
    //     name : 'Aliza Farari',
    //     from : 'California',
    //     img : aliza
    // },
]


const Testimonials = () => {
 
    return (
       <section className="testimonials mt-5">
           <div className="container">
               <div className="section-header">
                   <h4 style={{color: '#ffffff'}} className="text-uppercase">Testimonial</h4>
                   <h2 style={{color: '#3A4256'}}>What Our Patients <br/> Says </h2>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                      }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;