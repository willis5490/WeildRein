import React, { Component } from 'react';




class Services extends Component {

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
      <div >
          <div id='servicesWrapper1'>
            <div className='uk-container'>
              <div className='' uk-grid='true'>
                <div id='servicesGearContainer' className='uk-width-1-1'>
                      <h1 className='uk-margin-large-top'>
                            Another Statment for Wilrein collevctive about the business
                      </h1>
                      <hr className='servicesHr uk-hidden@m uk-margin-remove-bottom uk-margin-large-top'></hr>
                      <p id='paraServiceGears' className=''>
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
                      <span id ='serviceGearIcon' href="" class="uk-icon-button" uk-icon="icon:cog; ratio:3"></span>
                </div>
              </div>
            </div>
          </div>

          <div id='servicesWrapper2'>
            <div className='uk-container'>
              <div className='' uk-grid='true'>
                <div className='uk-width-1-1'>
                     <h6 style={{fontWeight:'600', letterSpacing:'3px'}} className='uk-margin-large-top'>
                       PROCSS + PURPOSE 
                     </h6>
                     <h2 className='thickerFonts uk-margin-remove-top'>ONE</h2>
                </div>
              </div>
            </div>
          </div>

          <div id='servicesWrapper3'>
            <div className='uk-container'>
              <div className='' uk-grid='true'>
                  <div className='uk-width-1-2@m uk-width-1-1'>
                      <p className='uk-margin-remove-top uk-margin-medium-bottom'>
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
                        <p >
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                          Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        </p>
                        <a><button id='homeWhiteButton' className='uk-button  uk-button-default uk-button-large uk-margin-xlarge-bottom uk-margin-medium-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                  </div>
                  <div className='uk-width-1-2@m uk-visible@m'>
                       <p className='uk-margin-large-top uk-margin-large-bottom'>
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

          <div id='servicesWrapper4'>
          <div className='uk-hidden@m'>
            <div className='uk-grid-match' uk-grid='true'>
              <div className='uk-width-1-2'>
                <img id='' className=''src='../images/placeholder.jpg'></img>
              </div>
              <div className='uk-width-1-2'>
                <img id='' className=''src='../images/placeholder.jpg'></img>
              </div>
            </div>
          </div>
            <div className='uk-container'>
              <div className='uk-grid-match uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                <div className='uk-width-1-2 uk-visible@m'>
                  <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                  <img id='' className=''src='../images/placeholder.jpg'></img>
                </div>              
                <div className='uk-width-1-1 uk-width-1-2@m'>
                     <h1 className='thickerFonts'>LEADERSHIP</h1>
                     <p className='uk-margin-small-top uk-margin-small-bottom'>
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
                      <ul>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                      </ul>
                      <h4><b>Packages starting a $400</b></h4>
                      <p>*Creating your own personalized options are availabe as well.</p>
                      <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                </div>
              </div>
            </div>
          </div>

            <div id='servicesWrapper5'>
            <div className='uk-grid-match  uk-margin-xlarge-top  uk-hidden@m' uk-grid='true'>
              <div className='uk-width-1-1'>
                <img id='' className=''src='../images/placeholder.jpg'></img>
              </div>
            </div>
              <div className='uk-container'>
                <div className='uk-grid-match  uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                  <div className='uk-width-1-2@m uk-visible@m uk-width-1-1 uk-flex-last@m'>
                    <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                  </div>
                  <div className='uk-width-1-1 uk-width-1-2@m'>
                      <h1 id='servicesGraphicDesignH1' className='thickerFonts'>GRAPHIC DESIGN</h1>
                      <p className='uk-margin-small-top uk-margin-small-bottom'>
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
                        <ul>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        </ul>
                        <h4><b>Packages starting a $400</b></h4>
                        <p>*Creating your own personalized options are availabe as well.</p>
                        <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                  </div>
                </div>
              </div>
            </div>

            <div id='homeYellowSection' className='uk-visible@m'>
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

            <div id='servicesWrapper6'>
            <div className='uk-grid-match uk-hidden@m' uk-grid='true'>
            <div className='uk-width-1-2@m uk-width-1-1'>
                  <img id='' className='uk-margin-small-bottom'src='../images/placeholder.jpg'></img>       
                </div>
            </div>
            <div className='uk-container'>
              <div className='uk-grid-match uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1 uk-visible@m'>
                  <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                  <img id='' className='uk-visible@m'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-1 uk-width-1-2@m'>
                     <h1 className='thickerFonts'>WEB DESIGN</h1>
                     <p className='uk-margin-small-top uk-margin-small-bottom'>
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
                      <ul>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                      </ul>
                      <h4><b>Packages starting a $400</b></h4>
                      <p>*Creating your own personalized options are availabe as well.</p>
                      <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                </div>
              </div>
            </div>
          </div>

           <div id='servicesWrapper7'>
            <div className='uk-grid-match uk-hidden@m' uk-grid='true'>
                  <div className='uk-width-1-2'>
                    <img id='' className='uk-margin-small-bottom'src='../images/placeholder.jpg'></img>
                    <img id='' className='uk-margin-small-bottom'src='../images/placeholder.jpg'></img>
                  </div>
                  <div className='uk-width-1-2'>
                    <img id='' className='uk-margin-small-bottom'src='../images/placeholder.jpg'></img>                
                  </div>
              </div>
              <div className='uk-container'>
                <div className='uk-grid-match  uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                  <div className='uk-width-1-2@m uk-width-1-1 uk-flex-last@m uk-visible@m'>
                    <div className='uk-grid-match' uk-grid='true'>
                        <div className='uk-width-1-2'>
                          <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                          <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                        </div>
                        <div className='uk-width-1-2'>
                          <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                          <img id='' className='uk-margin-medium-bottom uk-visible@m'src='../images/placeholder.jpg'></img>
                        </div>
                    </div>
                  </div>

                  <div className='uk-width-1-1 uk-width-1-2@m'>
                      <h1 className='thickerFonts'>PHOTOGRAPHY</h1>
                      <p className='uk-margin-small-top uk-margin-small-bottom'>
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
                        <ul>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        </ul>
                        <h4><b>Packages starting a $400</b></h4>
                        <p>*Creating your own personalized options are availabe as well.</p>
                        <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                  </div>
                </div>
              </div>
            </div>

             <div id='servicesWrapper8'>
             <div className='uk-grid-match' uk-grid='true'>
                <div className=' uk-width-1-1 uk-hidden@m'>
                  <img id='' className='uk-margin-small-bottom'src='../images/placeholder.jpg'></img>              
                </div>
             </div>
            <div className='uk-container'>
              <div className='uk-grid-match uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1 uk-visible@m'>
                  <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                  <img id='' className='uk-visible@m'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-1 uk-width-1-2@m'>
                     <h1 className='thickerFonts'>SOCIAL MEDIA</h1>
                     <p className='uk-margin-small-top uk-margin-small-bottom'>
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
                      <ul>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                      </ul>
                      <h4><b>Packages starting a $400</b></h4>
                      <p>*Creating your own personalized options are availabe as well.</p>
                      <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-top   uk-text-center '><b>LETS GET STARTED</b></button></a>
                </div>
              </div>
            </div>
          </div>
          <div id='servicesWrapper9'>
            <div className='uk-grid-match' uk-grid='true'>
              <div className='uk-width-1-1 uk-hidden@m'>
                  <img id='' className='uk-margin-small-bottom'src='../images/placeholder.jpg'></img>
                </div>
            </div>
              <div className='uk-container'>
                <div className='uk-grid-match  uk-margin-xlarge-top uk-margin-xlarge-bottom' uk-grid='true'>
                  <div className='uk-width-1-2@m uk-visible@m uk-width-1-1 uk-flex-last@m'>
                    <img id='' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                  </div>
                  <div className='uk-width-1-1 uk-width-1-2@m'>
                      <h1 className='thickerFonts'>BUSINESS COACHING</h1>
                      <p className='uk-margin-small-top uk-margin-small-bottom'>
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
                        <ul>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                          <li> Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</li>
                        </ul>
                        <h4><b>Packages starting a $400</b></h4>
                        <p>*Creating your own personalized options are availabe as well.</p>
                        <a><button id='homeYellowButton' className='uk-button  uk-button-default uk-button-large uk-margin-medium-top   uk-text-center uk-hidden@m'><b>LETS GET STARTED</b></button></a>
                  </div>
                </div>
              </div>
            </div>
            <div id='buttonSplitSection' className='uk-visible@m'>
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


export default Services;
