import React, { Component } from 'react';




class Footer extends Component {

  // render nav
  render() {
    return (
      <div >
         <nav id="footerBody" className="uk-navbar-container  uk-margin-auto-vertical  uk-text-center " uk-navbar='true' uk-navbar="mode: click">
          
            {/* <div id="leftfooter" className="uk-width-1-4 uk-text-center uk-margin-auto  uk-margin-auto-vertical uk-visible@m">
                <img id="footer-logo"  src="../images/Wildrein Logo_White.png" alt='' ></img>
            </div>
            <div id='' className="uk-width-1-4 uk-text-center uk-visible@m  uk-margin-auto uk-margin-auto-vertical">
    
            </div>
            <div id='' className="uk-width-1-4 uk-text-center uk-visible@m  uk-margin-auto uk-margin-auto-vertical">
               
            </div>
            <div id='rightfooter' className="uk-width-1-4  uk-visible@m  uk-margin-auto-vertical">
                <div className='uk-margin-small-bottom uk-margin-auto-vertical'>
                <a href=''><span  class="uk-icon-button " uk-icon="icon:instagram"></span></a>
                <a href=''><span  class="uk-icon-button " uk-icon="icon:facebook"></span></a>
                <a href=''><span  class="uk-icon-button " uk-icon="icon:youtube"></span></a> 
                </div>
                <h5 id='footerEmailInfo' className='uk-margin-small-top'>thomas@wildrein.com</h5>  
            </div> */}


              <div className="uk-navbar-left  uk-margin-auto-vertical">
                <img id="footer-logo"  src="../images/Wildrein Logo_White.png"  ></img>
              </div>
            
              <div className="uk-navbar-right footerButtons uk-margin-auto-vertical">
               <div className='uk-margin-auto-vertical footerRight'>
                  <a href=''><span  class="uk-icon-button " uk-icon="icon:instagram"></span></a>
                  <a href=''><span  class="uk-icon-button " uk-icon="icon:facebook"></span></a>
                  <a href=''><span  class="uk-icon-button " uk-icon="icon:youtube"></span></a> 
                  <h5 id='footerEmailInfo' className='uk-margin-small-top '>thomas@wildrein.com</h5> 
                </div>         
              </div>
  
        </nav>

        {/* mobile */}
        {/* <nav id="footerBody" className="uk-navbar-container  uk-text-center uk-hidden@m" uk-navbar='true' uk-navbar="mode: click">
        
                  <div id="leftfooter" className="uk-width-1-2 uk-remove-margin-left uk-margin-auto-vertical uk-hidden@m">
                        <img id="footer-logo"  src="../images/Wildrein Logo_White.png" ></img>
                  </div>
              
                  <div id='' className="uk-width-1-2 uk-text-center uk-hidden@m uk-margin-auto-vertical">
                  <div className='uk-margin-small-bottom uk-margin-auto-vertical'>
                <a href=''><span  class="uk-icon-button " uk-icon="icon:instagram"></span></a>
                <a href=''><span  class="uk-icon-button " uk-icon="icon:facebook"></span></a>
                <a href=''><span  class="uk-icon-button " uk-icon="icon:youtube"></span></a> 
                </div>
                <h5 id='footerEmailInfo' className='uk-margin-small-top'>thomas@wildrein.com</h5>  
                  </div>
            
            </nav> */}

      </div>
    );
  }
}


export default Footer;
