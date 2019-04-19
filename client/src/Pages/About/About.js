import React, { Component } from 'react';





class About extends Component {

  style1 = {
    fill:'white',
    stroke:'white'
  }
  // render nav
  render() {
    return (
      <div >
          <div id='aboutWrapper1' className='uk-margin-large-top'>
            <div className='uk-container'>
                <div  class=" uk-height-expand uk-background-cover uk-overflow-hidden uk-flex uk-flex-top  " uk-grid='true' >
                    <div id='aboutPicsDiv' class="uk-width-1-2@m uk-width-1-1 uk-text-center uk-margin-auto ">
                         <div id='BioContainer' className='uk-align-center'>
                            <img className='uk-border-circle homeBioPics' src='../images/placeholder.jpg'></img>
                                <h3 className='uk-margin-remove-top homeNames'>Charlotte Harrison</h3>
                        </div>
                    </div>
                    <div class="uk-width-1-2@m uk-width-1-1 uk-margin-auto  uk-overflow-hidden  uk-margin-auto-vertical  ">
                            <p className='uk-margin-remove-bottom'>UNICORN + FIRE</p>
                            <h3 className='uk-margin-remove-top thickerFonts'>CASI</h3>
                            <hr class=" aboutDividers uk-overflow-hidden uk-margin-small-bottom"></hr>
                            <h4 className='uk-margin-remove-top'><i class="fas fa-2x fa-mars-stroke-h uk-margin-small-right"></i>CASI@WILDREIN.COM</h4>
                            <hr class=" aboutDividers uk-overflow-hidden "></hr>
                            <p className='uk-margin-medium-top@m'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                    </div>
                </div>
                </div>
                <div className='uk-grid-match aboutPicDivs uk-margin-medium-top uk-margin-medium-bottom' uk-grid='true'>
                    <div className='uk-width-1-4@m uk-width-1-2'>
                        <img className=''src='../images/placeholder.jpg'></img>
                    </div>
                    <div className='uk-width-1-4@m uk-width-1-2'>
                        <img className=''src='../images/placeholder.jpg'></img>
                    </div>
                    <div className='uk-width-1-2@m uk-width-1-1'>
                        <img id='aboutMobileLargePic' className=''src='../images/placeholder.jpg'></img>
                    </div>
                </div>
                <div className='uk-grid-match aboutPicDivs  uk-margin-large-bottom' uk-grid='true'>
                    <div className='uk-width-1-2'>
                        <img className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                        <img className='uk-hidden@m'src='../images/placeholder.jpg'></img>
                    </div>
                    <div className='uk-width-1-4@m uk-width-1-2'>
                        <img className=''src='../images/placeholder.jpg'></img>
                        <svg  className='uk-visible@m' width="400" height="250">
                          <rect width="250" height="250" style={this.style1}/>
                        </svg>
                    </div>
                    <div className='uk-width-1-4@m uk-visible@m'>
                        <img className=''src='../images/placeholder.jpg'></img>
                        <svg className='uk-visible@m' width="400" height="250">
                          <rect width="250" height="250" style={this.style1}/>
                        </svg>
                        <div></div>
                    </div>
                </div>
                <div className='uk-container'>
                <div uk-grid='true'>
                  <div className='uk-width-1-1 uk-hidden@m'>
                      <p>
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                      </p>
                  </div>

                </div>

                <div uk-grid='true'>
                  <div className='uk-width-1-1 uk-width-1-2@m'>
                      <h1 className='aboutGiantText'>"No really thats what she said"</h1>
                  </div>
                  <div className='uk-width-1-1 uk-width-1-2@m'>
                      <p>
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                      </p>
                  </div>
                  <div className='uk-width-1-1 uk-visible@m'>
                      <a><button id='homeYellowButton' className='uk-button uk-align-center uk-margin-medium-bottom uk-button-default uk-button-large uk-margin-large-top   uk-text-center '><b>LETS GET THIS PARTY STARTED</b></button></a>
                  </div>
                  <div className='uk-width-1-1  uk-hidden@m'>
                    <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-bottom uk-margin-large-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                  </div>
                </div>  
                </div>       
          </div>

          <div id='aboutWrapper2' className='uk-margin-large-top'>
            <div className='uk-container'>
                <div  class=" uk-height-expand uk-background-cover uk-overflow-hidden uk-flex uk-flex-top  " uk-grid='true' >
                    <div id='aboutPicsDiv' class="uk-width-1-2@m uk-width-1-1 uk-text-center uk-margin-large-top ">
                         <div id='BioContainer' className='uk-align-center'>
                            <img className='uk-border-circle homeBioPics' src='../images/placeholder.jpg'></img>
                                <h3 className='uk-margin-remove-top homeNames'>Charlotte Harrison</h3>
                        </div>
                    </div>
                    <div class="uk-width-1-2@m uk-width-1-1 uk-margin-auto  uk-overflow-hidden  uk-margin-auto-vertical  ">
                            <p className='uk-margin-remove-bottom'>UNICORN + FIRE = UNSTOPPABLE</p>
                            <h3 className='uk-margin-remove-top thickerFonts'>CASI</h3>
                            <hr class=" aboutDividers uk-overflow-hidden uk-margin-small-bottom"></hr>
                            <h4 className='uk-margin-remove-top'><i class="fas fa-2x fa-mars-stroke-h uk-margin-small-right"></i>CASI@WILDREIN.COM</h4>
                            <hr class=" aboutDividers uk-overflow-hidden "></hr>
                            <p className='uk-margin-medium-top@m'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                    </div>
                </div>
            </div>
                <div className='uk-grid-match aboutPicDivs uk-margin-medium-top uk-margin-medium-bottom' uk-grid='true'>
                    <div className='uk-width-1-4@m uk-width-1-2'>
                        <img className=''src='../images/placeholder.jpg'></img>
                    </div>
                    <div className='uk-width-1-4@m uk-width-1-2'>
                        <img className=''src='../images/placeholder.jpg'></img>
                    </div>
                    <div className='uk-width-1-2@m uk-width-1-1'>
                        <img id='aboutMobileLargePic' className=''src='../images/placeholder.jpg'></img>
                    </div>
                </div>
                <div id='aboutEndPics' className='uk-grid-match aboutPicDivs uk-margin-medium-bottom' uk-grid='true'>
                    <div className='uk-width-1-2'>
                        <img className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                        <img className='uk-hidden@m'src='../images/placeholder.jpg'></img>
                    </div>
                    <div className='uk-width-1-4@m uk-width-1-2'>
                        <img className=''src='../images/placeholder.jpg'></img>
                        <svg  className='uk-visible@m' width="400" height="250">
                          <rect width="250" height="250" style={this.style1}/>
                        </svg>
                    </div>
                    <div className='uk-width-1-4@m uk-visible@m'>
                        <img className=''src='../images/placeholder.jpg'></img>
                        <svg className='uk-visible@m' width="400" height="250">
                          <rect width="250" height="250" style={this.style1}/>
                        </svg>
                        <div></div>
                    </div>
                </div>
            <div className='uk-container'>
                <div uk-grid='true' className='uk-hidden@m uk-margin-large-top'>
                  <div className='uk-width-1-1 '>
                      <p>
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                      </p>
                  </div>

                </div>  
                </div>                       
          </div>
          <div className='aboutWrapper3 uk-margin-xlarge-top uk-visible@m'>
            <div className='uk-container'>
                  <div uk-grid='true'>
                    <div className='uk-width-1-1 uk-width-1-2@m'>
                        <h1 className='aboutGiantText '>"No really thats what she said"</h1>
                    </div>
                    <div className='uk-width-1-1 uk-width-1-2@m'>
                        <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        </p>
                    </div>                  

                  </div>
            </div>
          </div>

          {/*   MOBILE   */}

          <div className='aboutWrapper4 uk-hidden@m '>
            <div className='uk-container'>
                  <div uk-grid='true'>
                    <div className='uk-width-1-1 uk-width-1-2@m'>
                        <h1 className='aboutGiantText uk-margin-large-top'>"No really thats what she said"</h1>
                    </div>                                   
                  </div>
            </div>
          </div>
          <div className='aboutWrapper5 uk-hidden@m '>
              <div className='uk-container'>
                  <div className='uk-width-1-1 uk-width-1-2@m'>
                      <p className='uk-margin-large-top'>
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                      </p>
                  </div>  
              </div>
          </div>

          {/* END */}

          <div className='aboutWrapper6 uk-visible@m'>
              <div className='uk-width-1-1 '>
                  <a><button id='homeWhiteButton' className='uk-button uk-align-center uk-button-default uk-button-large uk-margin-large-top   uk-text-center '><b>LETS GET THIS PARTY STARTED</b></button></a>
              </div>
          </div>
          <div id='aboutBottomFiller'className='uk-visible@m'></div>
          <div className='aboutWrapper7 uk-hidden@m'>
             <div className='uk-container'>
                <div className='uk-width-1-1  '>
                      <a><button id='homeWhiteButton' className='uk-button  uk-button-default uk-button-large uk-margin-xlarge-bottom uk-margin-large-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                  </div>
             </div>
          </div>

      </div>
    );
  }
}


export default About;
