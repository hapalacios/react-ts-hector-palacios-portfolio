import React, { useState, useEffect } from 'react';
//import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

const App = () => {
  const [resumeData, setResumeData] = useState({
    "main": "",
    "resume": "",
    "portfolio":"",
    "testimonials": ""
  });

  const getResumeData = async () => {
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(this: any, data: any){
        setResumeData(data);
      },
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

   useEffect(() => {
    getResumeData();
  }, []);
  
  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      <Portfolio data={resumeData.portfolio}/>
      <Testimonials data={resumeData.testimonials}/>
      <Contact data={resumeData.main}/>
      <Footer data={resumeData.main}/>
    </div>
  );
  
}

export default App;