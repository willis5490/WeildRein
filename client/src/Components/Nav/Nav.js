import React, { Component } from 'react';




class Nav extends Component {

  // render nav
  render() {
    return (
      <div >
         <div  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
       <nav id = 'navBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical uk-visible@m" uk-navbar='true' uk-navbar="mode: click" >
        
            <div className="uk-navbar-left uk-margin-auto-vertical">
                <a id="mobileMenu"  uk-toggle="target: #offcanvas-nav-primary"><img id="mobileMenu"  src='../images/menuIcon.svg'></img></a>
                    <div className="uk-offcanvas-content">
                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; mode:push" >
                            <div className="uk-offcanvas-bar">
                                <ul className="uk-nav uk-nav-default">
                                    <li className="uk-nav-header">
                                        <a className="uk-offcanvas-close" uk-close>X</a>
                                        <img id='logoMobile' className="uk-margin-small-right" src="../images/Wildrein Logo_Black.png" alt='' ></img>
                                    </li>
                                    <li className="uk-nav-divider"></li>

                                    <li className="mobileMenuText"><a href="/">Home</a></li>
                                    <li className="mobileMenuText"><a href="/Services">Services</a></li>
                                    <li className="mobileMenuText"><a href="/About">About</a></li>
                                    <li className="mobileMenuText"><a href="/Work">Work</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="uk-navbar-center uk-margin-auto-vertical ">
                <img id='logoMobile' className="" src="../images/Wildrein Logo_Black.png" alt=''></img>
            </div>
        </nav>

        {/* mobile */}
        <nav id = 'navBodyMobile' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical uk-hidden@m" uk-navbar='true' uk-navbar="mode: click" >
        
        <div id='mobileNavLeft' className="uk-navbar-left uk-margin-auto-vertical">
            <a id="mobileMenu"  uk-toggle="target: #offcanvas-nav-primary"><img id="mobileMenu"  src='../images/menuIcon.svg'></img></a>
                <div className="uk-offcanvas-content">
                    <div id="offcanvas-nav-primary"  uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar">
                            <ul className="uk-nav uk-nav-default">
                                <li className="uk-nav-header">
                                    <a className="uk-offcanvas-close" uk-close>X</a>
                                    <img id='logoMobile' className="uk-margin-small-right" src="../images/Wildrein Logo_Black.png" alt='' ></img>
                                </li>
                                <li className="uk-nav-divider"></li>

                                <li className="mobileMenuText"><a href="/">Home</a></li>
                                <li className="mobileMenuText"><a href="/Services">Services</a></li>
                                <li className="mobileMenuText"><a href="/About">About</a></li>
                                <li className="mobileMenuText"><a href="/Work">Work</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        <div id='mobileNavRight' className="uk-navbar-right uk-margin-auto-vertical ">
            <img id='logoMobile' className="" src="../images/Wildrein Logo_Black.png" alt=''></img>
        </div>
    </nav>
      </div>
      </div>
    );
  }
}


export default Nav;
