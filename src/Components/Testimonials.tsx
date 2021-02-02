import React from 'react';

export default function Testimonials (props: any){

    if(props.data){
      var testimonials = props.data.testimonials.map(function(testimonials: any){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    //                  <h1><span>Client Testimonials</span></h1>


    return (
      <section id="testimonials">
         <div className="text-container">
            <div className="row">

               <div className="two columns header-col">
                  <h1><span>Quotes</span></h1>
               </div>

               <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
      </section>
    );
  
}