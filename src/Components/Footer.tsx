import React from 'react';

export default function Footer (props: any) {

    if(props.data){
      var networks= props.data.social.map(function(network: any){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

        <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                  {networks}
              </ul>

              <ul>
                <li>Modified by Hector Palacios</li>
              </ul>

              <ul className="copyright">
                  <li>&copy; All credit goes to Hector Palacios - Copyright 2021 Hector Palacios</li>
              </ul>

            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
        
      </footer>
    );
  
}