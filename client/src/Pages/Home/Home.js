import React, { Component } from 'react';




class Home extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
       }
    
       sendEmail = event => {
        //  event.preventDefault();
         if(this.state.name === ''){
           alert("ALL FIELDS ARE REQUIRED!")
         }else if(this.state.email === ''){
          alert("ALL FIELDS ARE REQUIRED!")
         }else if(this.state.subject === ''){
          alert("ALL FIELDS ARE REQUIRED!")
         }else if(this.state.message === ''){
          alert("ALL FIELDS ARE REQUIRED!")
         }
         else { alert("jews")
          // axios.post(`/sendEmail`, {
          //   email: this.state.email,
          //    name: this.state.name,
          //    inquiry: this.state.inquiry,
          //    message: this.state.message
          //  })
          //    .then((response) => {
    
          //    })
          //    .catch((err) => {
          //      console.log(err)
          //    })
         }
    
    
       };
    
       handleInputChange = event => {
         const { name, value } = event.target;
         this.setState({
           [name]: value
         });
       };
    
       emptyFields = () => {
         this.setState({
           name: '',
           email: '',
           subject: '',
           message: ''
         })
       }


  // render nav
  render() {
    return (
      <div id='homMainBody' className='uk-overflow-hidden'>
         <div id='homeFirstSection' class="uk-height-expand uk-background-cover uk-overflow-hidden uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-2-3@m  uk-margin-auto uk-margin-auto-vertical">
                   <div className='uk-container homeTopDiv'>
                      <h6 className='uk-margin-medium-top' id='wildreinHeaderHome'>WILDREIN COLLECTIVE</h6>
                      <h1 className='homeFirstSectionText'>A soulfully creative <br></br> studio based in Denver, CO</h1>
                      <hr class="uk-divider-small"></hr>
                      <p className='homeFirstSectionText'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                      Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                      <p className='homeFirstSectionText'>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                      <i className="fas fa-heart uk-margin-medium-bottom"></i>
                   </div>
                </div>
                <div class="uk-width-1-3@m  ">

                </div>
            </div>

            {/* Mobile homMainBody*/}
            <div id='homeFirstSection' class="uk-height-expand uk-background-cover uk-overflow-hidden  uk-flex uk-flex-top uk-hidden@m " uk-grid='true' >
                <div class="uk-width-1-1@m  uk-margin-auto uk-margin-auto-vertical">
                   <div className='uk-container homeTopDiv uk-margin-medium-top'>
                      <h6 className='uk-margin-xlarge-top' id='wildreinHeaderHome'>WILDREIN COLLECTIVE</h6>
                      <h1 className='homeFirstSectionText uk-margin-small-top'>A soulfully <br></br> creative studio based in <br></br> Denver, CO</h1>
                      <hr  className="uk-divider-small uk-overflow-hidden uk-margin-xlarge-top"></hr>
                      <p className='homeFirstSectionText uk-margin-small-bottom'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                      Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                      <p className='homeFirstSectionText uk-margin-xlarge-bottom'>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                      <i class="fas fa-heart uk-margin-medium-bottom"></i>
                   </div>
                </div>
            </div>
            {/* end */}

            <div id='homeSecondSection' class="uk-height-expand uk-background-cover uk-margin-large-top uk-overflow-hidden uk-flex uk-flex-top uk-visible@m"  >
                <div className='uk-container' uk-grid='true'>
                    <div class="uk-width-1-2@m uk-margin-auto-vertical">
                      <div className=''>
                          <p>HEY THERE!</p>
                          <h1 className='uk-margin-small-top thickerFonts'><b>WE ARE WILDREIN COLLECTIVE</b></h1>
                        
                      </div>
                    </div>
                    <div class="uk-width-1-2@m   uk-margin-auto-vertical">
                      <div className=''>
                        <p className=''>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                        <p className='uk-margin-medium-top'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            
                        </p>
                      </div>
                    </div>
                </div>
            </div>

            {/* mobile homeSecondSection */}
            <div id='' class="uk-height-expand uk-background-cover uk-margin-large-top uk-overflow-hidden uk-flex uk-flex-top uk-hidden@m"  >
                <div className='uk-container' uk-grid='true'>
                    <div class="uk-width-1-1@m uk-margin-auto-vertical">
                      <div className=''>
                          <p style={{letterSpacing:'3px'}} className='uk-margin-remove-bottom'>HEY THERE!</p>
                          <h2 id='homeWildreinh2' className='uk-margin-small-top thickerFonts'><b>WE ARE WILDREIN COLLECTIVE</b></h2>
                        
                      </div>
                      <hr class="smallerHrMobile uk-margin-small-bottom"></hr>
                    </div>
                    <div class="uk-width-1-1@m   uk-margin-auto-vertical">
                      <div className=''>
                        <p className=''>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                        <p className='uk-margin-small-top'>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            
                        </p>
                        <hr class=" largehrMobile uk-margin-small-bottom"></hr>
                      </div>
                    </div>
                </div>
            </div>
            {/* end */}


            <hr class="uk-align-center uk-text-center  uk-overflow-hidden  bodydividers uk-margin-xlarge-bottom uk-margin-large-top uk-visible@m"></hr>
            <div className='uk-container'>
             <div  class=" uk-height-expand uk-background-cover uk-overflow-hidden uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto ">
                   <div id='BioContainer' className='uk-align-center'>
                      <img className='uk-border-circle homeBioPics' src='../images/placeholder.jpg'></img>
                        <h3 className='uk-margin-remove-top homeNames'>Charlotte Harrison</h3>
                   </div>
                </div>
                <div class="uk-width-1-2@m   uk-margin-auto  uk-overflow-hidden  uk-margin-auto-vertical rightsideWebpage ">                    
                        <h4><b>CASI@WILDREIN.COM</b></h4>
                        <p className='uk-margin-large-top'>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                        <a><button  className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-xlarge-bottom homeButtons uk-text-center'><b>MORE ABOUT CASI</b></button></a>                  
                </div>
            </div>
            </div>
            <div className='uk-container'>
             <div  class=" uk-height-expand uk-background-cover uk-overflow-hidden uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto ">
                   <div id='BioContainer' className='uk-align-center'>
                      <img className='uk-border-circle homeBioPics' src='../images/placeholder.jpg'></img>
                        <h3 className='uk-margin-remove-top homeNames'>Charlotte Harrison</h3>
                   </div>
                </div>
                <div class="uk-width-1-2@m   uk-margin-auto  uk-overflow-hidden  uk-margin-auto-vertical rightsideWebpage ">                    
                        <h4><b>CASI@WILDREIN.COM</b></h4>
                        <p className='uk-margin-large-top'>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                        <a><button  className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-xlarge-bottom homeButtons uk-text-center'><b>MORE ABOUT CASI</b></button></a>                  
                </div>
            </div>
            </div>
            


            {/* mobile view */}

            <div class=" uk-height-expand uk-background-cover uk-margin-large-top uk-margin-large-bottom uk-overflow-hidden uk-flex uk-flex-top uk-hidden@m " uk-grid='true'>
                <div class="uk-width-1-1  uk-margin-auto uk-margin-auto-vertical">
                  <div className='uk-text-center'>
                        <div id='BioContainer' className='uk-align-center'>
                            <img className='uk-border-circle homeBioPics' src='../images/placeholder.jpg'></img>
                                <h3 className='uk-margin-remove-top homeNames'>Charlotte Harrison</h3>
                        </div>
                        <div className='bioIconsMobile uk-margin-small-top'>
                            <a href=''><span  class="iconMobileAbout" uk-icon="icon:instagram"></span></a>
                            <a href=''><span  class="iconMobileAbout" uk-icon="icon:facebook"></span></a>
                            <a href=''><span  class="iconMobileAbout" uk-icon="icon:youtube"></span></a> 
                        </div>
                        <h5 className='uk-margin-small-top'><b>Designer</b></h5>
                   </div>
                   <div className='uk-container'> 
                        <h6><b>CASI@WILDREIN.COM</b></h6>
                        <p className='uk-margin-small-top'>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                        <a><button className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-xlarge-bottom homeButtons uk-text-center'><b>MORE ABOUT CASI</b></button></a>
                    </div>
                </div>
                <div class="uk-width-1-1@xs  uk-margin-auto uk-margin-auto-vertical">
                  <div className='uk-text-center'>
                        <div id='BioContainer' className='uk-align-center'>
                            <img className='uk-border-circle homeBioPics' src='../images/placeholder.jpg'></img>
                                <h3 className='uk-margin-remove-top homeNames'>Charlotte Harrison</h3>
                        </div>
                        <div className='bioIconsMobile uk-margin-small-top'>
                            <a href=''><span  class="iconMobileAbout" uk-icon="icon:instagram"></span></a>
                            <a href=''><span  class="iconMobileAbout" uk-icon="icon:facebook"></span></a>
                            <a href=''><span  class="iconMobileAbout" uk-icon="icon:youtube"></span></a> 
                        </div>
                        <h5 className='uk-margin-small-top'><b>Developer</b></h5>
                   </div>
                   <div className='uk-container'> 
                        <h6><b>CASI@WILDREIN.COM</b></h6>
                        <p className='uk-margin-small-top'>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                        <a><button className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-large-bottom homeButtons uk-text-center'><b>MORE ABOUT CASI</b></button></a>
                    </div>
                </div>

            </div>
            {/* end */}



          <div id='homePicSection' className='uk-visible@m'>
              <div  className='uk-container uk-container-center'>
                  <div className='uk-grid-match' uk-grid='true'>
                        <div className='uk-width-2-3 '>
                            <img className='' src='../images/placeholder.jpg' width='100%' ></img>
                        </div>
                        <div className='uk-width-1-3'>
                            <img className='uk-margin-medium-bottom' src='../images/placeholder.jpg'   width='100%'></img>
                            <img className='' src='../images/placeholder.jpg'   width='100%'></img>
                        </div>
                  </div>
              </div>
          </div>


          {/* mobile homePicSection */}
          <div id='homePicSectionMobile' className='uk-hidden@m uk-margin-remove-bottom'>
              <div  className=''>
                  <div className='' uk-grid='true'>
                        <div className='uk-width-1-1@s'>
                            <img className='' src='../images/placeholder.jpg' width='100%'  ></img>
                        </div>
                  </div>
                  <div  className='uk-margin-remove-bottom' uk-grid='true'>
                        <div className='uk-width-1-2'>
                            <img  className='' src='../images/placeholder.jpg'   width='100%'></img>
                        </div>
                        <div className='uk-width-1-2'>
                            <img className='' src='../images/placeholder.jpg'   width='100%'></img>
                        </div>
                  </div>
              </div>
          </div>
          {/* end */}


          <div id='homeGreySection' >
              <div className='uk-container  uk-overflow-hidden '>
                <h1 className='uk-margin-large-top'>Your business dreams make <br></br> our hearts flip!</h1>
                <p  className='uk-margin-medium-top '>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        
                </p>
                <hr id='bottonDivider' class=" uk-hidden@m"></hr>
                <div className='uk-grid-match uk-overflow-hidden uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                      <div className='uk-width-1-2@m'>
                          <h1 id='homeH1DefineStory' className='uk-margin-remove-bottom uk-visible@m'><b>DEFINE YOUR <br></br> STORY</b></h1>
                          <h1 id='homeH1DefineStory' className='uk-margin-remove-bottom uk-margin-remove-top uk-hidden@m'><b>DEFINING YOUR STORY.</b></h1>
                          <p >
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
                      <div className='uk-width-1-2@m uk-visible@m'>
                        <img className=''  src='../images/placeholder.jpg' width='350px'></img>
                      </div>
                </div>
              </div>
              
          </div>

          <div className='uk-visible@m' id='homeYellowSection'>
                <div className='uk-container'>
                    <i className="far fa-4x fa-comments uk-margin-large-top"></i>
                    <h1 className='thickerFonts'><b>BOOK COMPLIMENTARY <br></br> 20 MINUTE CONSULTATION</b></h1>
                    <p className='uk-margin-remove-top'>Way better than a nice to e-meet you. Speaking in person will get the ball rolling.</p>
                    <a><button id='homeWhiteButton' className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-large-bottom  uk-text-center'><b>PENCIL ME IN NOW</b></button></a>
                </div>
          </div>
          <div className='uk-hidden@m' id='homeYellowSection'>
                <div className='uk-container'>
                    <i className="fas fa-4x fa-mobile-alt uk-margin-large-top"></i>
                    <h1 className='thickerFonts'><b>FREE <br></br> 20 MINUTE<br></br> CALL</b></h1>
                    <p className='uk-margin-remove-top'>Way better than a nice to e-meet you. Speaking in person will get the ball rolling.</p>
                    <a><button id='homeWhiteButton' className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-large-bottom  uk-text-center'><b>PENCIL ME IN NOW</b></button></a>
                </div>
          </div>


           <div className='uk-visible@m' >
              <div className='uk-container  uk-overflow-hidden '>
                
                <div className='uk-grid-match uk-overflow-hidden uk-margin-large-top uk-margin-large-bottom' uk-grid='true'>
                      <div className='uk-width-1-2@m'>
                        <img className='' src='../images/placeholder.jpg' width='450px'></img>
                      </div>
                      <div className='uk-width-1-2@m'>
                      <h1 className='thickerFonts'><b>PROCESS+  PURPOSE</b></h1>
                      <p>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            </p>
                            <a><button id='homeYellowButton' className='uk-button uk-align-center uk-button-default uk-button-large uk-margin-large-top   uk-text-center uk-hidden@m'><b>NEED MORE? CLICK ME</b></button></a>
                            <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-large-top   uk-text-center uk-visible@m'><b>NEED MORE? CLICK ME</b></button></a>
                      </div>
                </div>
              </div>
              
          </div>

          {/* mobile */}
          <div  className='uk-hidden@m'>
            <img className='uk-align-center uk-margin-remove-top' src='../images/placeholder.jpg' width='450px'></img>
            <div className='uk-container  uk-overflow-hidden '>
                <div className='uk-grid-match uk-overflow-hidden uk-margin-large-top uk-margin-large-bottom' uk-grid='true'>
                        <div className='uk-width-1-1@'>
                        <h1 className='thickerFonts'><b>PROCESS + PURPOSE</b></h1>
                        <p>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            </p>
                            <a><button id='homeYellowButton' className='uk-button uk-align-center uk-button-default uk-button-large uk-margin-large-top   uk-text-center uk-hidden@m'><b>NEED MORE? CLICK ME</b></button></a>
                            <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-large-top   uk-text-center uk-visible@m'><b>NEED MORE? CLICK ME</b></button></a>
                        </div>
                </div>
            </div>
              
          </div>



                 <div>
                    <div className='uk-container  uk-overflow-hidden '>
                        
                        <div className='uk-grid-match uk-overflow-hidden uk-text-center uk-margin-large-top uk-margin-large-bottom  uk-visible@m' uk-grid='true'>
                            <div className='uk-width-2-5'>
                                <img className='homeMiddleThreePics' src='../images/placeholder.jpg' width='250px'></img>   
                            </div>
                            <div className='uk-width-expand'>
                                <img className='homeMiddleThreePics' src='../images/placeholder.jpg' width='250px'></img>   
                            </div>
                            <div className='uk-width-expand'>
                                <img className='homeMiddleThreePics' src='../images/placeholder.jpg' width='250px'></img>   
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div>
                    <div className=' uk-overflow-hidden '>
                        
                        <div className=' uk-overflow-hidden uk-text-center uk-margin-large-top uk-margin-large-bottom uk-hidden@m' uk-grid='true'>
                            <div className='uk-width-1-2 uk-margin-remove-bottom'>
                                <img className='homeMiddleThreePicsMobile 'src='../images/placeholder.jpg'></img>  
                            </div>
                            <div className='uk-width-1-2'>
                                <img className='homeMiddleThreePicsMobile'src='../images/placeholder.jpg'></img>  
                            </div>
                            <div className='uk-width-1-2'>
                                <img className='homeMiddleThreePicsMobile'src='../images/placeholder.jpg'></img>  
                            </div>
                            <div className='uk-width-1-2'>
                                <img className='homeMiddleThreePicsMobile'src='../images/placeholder.jpg'></img>  
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}




            <div className='uk-container'>
                <div>
                    <h1 style={{fontSize:'80px'}} className='uk-margin-large-top uk-visible@m'>Services include, but not<br></br> limited to</h1>
                    <h1 className='uk-margin-large-top uk-hidden@m'>Services<br></br> include, but not limited to</h1>
                    <hr id='bottonDivider' class=""></hr>
                    <h1 className='uk-margin-remove-top uk-margin-remove-bottom serviceList thickerFonts'><b>LEADERSHIP</b></h1>
                    <h1 className='uk-margin-remove-top uk-margin-remove-bottom serviceList thickerFonts'><b>GRAPHIC DESIGN</b></h1>
                    <h1 className='uk-margin-remove-top uk-margin-remove-bottom serviceList thickerFonts'><b>WEB DESIGN</b></h1>
                    <h1 className='uk-margin-remove-top uk-margin-remove-bottom serviceList thickerFonts'><b>PHOTOGRAPHY</b></h1>
                    <h1 className='uk-margin-remove-top uk-margin-remove-bottom serviceList thickerFonts'><b>SOCIAL MEDIA</b></h1>
                    <h1 className='uk-margin-remove-top uk-margin-xlarge-bottom serviceList thickerFonts'><b>BUSINESS COACHING</b></h1>
                </div>

            </div>

            <div id='buttonSplitSection'>
                <div className='uk-container'>
                    <a><button id='homeWhiteButton' className='uk-button uk-button-default uk-button-large  uk-text-center'><b>I NEED PRICING</b></button></a>
                </div>
            </div>

            <div id='homeContactSection' className=' uk-visible@m'>
                <div className='uk-container'>
                    <h1 className='uk-margin-large-top thickerFonts'><b>CONNECT WITH US</b></h1>
                    <div className="formDiv ">
                        <form>
                            <fieldset className="uk-fieldset ">
                            <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-2">
                                <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                                <input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name='name'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Name" />
                                </div>
                                <div  id='formLastName' className="uk-inline uk-width-1-2">
                                <a id='formLastName' className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                                <input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name='email'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Email" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-1">
                                <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                                <input
                                value={this.state.subject}
                                onChange={this.handleInputChange}
                                name='subject'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Subject" />
                                </div>
                            </div>
                           

                            <div id="textInput" className="uk-margin uk-width-1-1">

                                <textarea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name='message'
                                className="uk-textarea ContactInputBody"
                                rows="5"
                                placeholder="Message">
                                </textarea>
                            </div>
                            </fieldset>
                        </form>
                        <button onClick={()=>{this.sendEmail(); this.emptyFields(); alert('Your Email has been sent.')}} id="send-button" type="submit" name="action" className="uk-align-center uk-button uk-margin-auto uk-button-default uk-margin-xlarge-bottom uk-button-large uk-width-large">Send</button>
                        </div>
                </div>
            </div>


                {/* mobile Contact */}
                <div id='homeContactSection' className='uk-hidden@m'>
                <div className='uk-container'>
                    <h2 className='uk-margin-large-top thickerFonts'><b>CONNECT <br></br> WITH US</b></h2>
                    <div className="formDiv ">
                        <form>
                            <fieldset className="uk-fieldset ">
                            <div className="uk-margin">
                                <div  id='' className="uk-inline uk-width-1-1">
                                <a id='' className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                                <input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name='name'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Name" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-1">
                                <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                                <input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name='email'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Email" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-1">
                                <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                                <input
                                value={this.state.subject}
                                onChange={this.handleInputChange}
                                name='subject'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Subject" />
                                </div>
                            </div>
                           

                            <div id="textInput" className="uk-margin uk-width-1-1">

                                <textarea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name='message'
                                className="uk-textarea ContactInputBody"
                                rows="5"
                                placeholder="Message">
                                </textarea>
                            </div>
                            </fieldset>
                        </form>
                        <button onClick={()=>{this.sendEmail(); this.emptyFields(); alert('Your Email has been sent.')}} id="send-buttonMobile" type="submit" name="action" className="uk-button uk-margin-auto uk-button-default uk-margin-xlarge-bottom uk-button-large uk-width-large"><b>Send It</b></button>
                        </div>
                </div>
            </div>
                {/* end */}
          
          


      </div>
    );
  }
}


export default Home;
