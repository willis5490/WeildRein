import React, { Component } from 'react';




class Work extends Component {


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



  
  render() {
    return (
      <div >

         <div id='workWrapper1'>
            <div className='uk-container uk-margin-large-top'>
              <div className='uk-grid-match' uk-grid='true'>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className='workRow1'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className=''src='../images/placeholder.jpg' ></img>  
                </div>
              </div>
            </div>
         </div>

         <div id='workWrapper2'>
            <div className='uk-container uk-margin-large-top uk-margin-large-bottom'>
              <div className='uk-grid-match' uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='workRow2'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2 uk-hidden@m'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-1'>
                  <img className=''src='../images/placeholder.jpg' ></img>  
                  <img className='uk-visible@m'src='../images/placeholder.jpg' ></img> 
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

          {/* MOBILE */}
          <div id='homeYellowSection' className='uk-hidden@m'>
                <div className='uk-container'>
                    <i className="fas fa-4x fa-mobile-alt uk-margin-large-top"></i>
                    <h1 className='thickerFonts'><b>FREE <br></br> 20 MINUTE CALL</b></h1>
                    <p className='uk-margin-remove-top'>Way better than a nice to e-meet you. Speaking in person will get the ball rolling.</p>
                    <a><button id='homeWhiteButton' className='uk-button uk-button-default uk-button-large uk-margin-medium-top uk-margin-large-bottom  uk-text-center'><b>LETS TALK DREAMS</b></button></a>
                </div>
          </div>
          {/* END */}

           <div className='uk-hidden@m' id='workWrapper3'>
            <div className='uk-container uk-margin-large-top uk-margin-large-bottom'>
              <div className='uk-grid-match' uk-grid='true'>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className='workRow uk-margin-medium-bottom'src='../images/placeholder.jpg'></img>
                  <img className='workRow'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-2 '>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-1'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className='workRow uk-margin-medium-bottom uk-hidden@m'src='../images/placeholder.jpg'></img>
                  <img className='workRow'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-4@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                  <img className='uk-visible@m'src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-3-5@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-5@m uk-width-1-2'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className=''src='../images/placeholder.jpg'></img>
                </div>
               
              </div>
            </div>
         </div>

          <div className='workWrapper3 uk-visible@m'>
                      <div className='uk-container uk-margin-xlarge-top'>
                        <div className='uk-grid-match' uk-grid='true'>
                          <div className='uk-width-1-2'>
                          
                              <div className='uk-grid-match' uk-grid='true'>
                                  <div className='uk-width-1-2'>
                                  <img id='workB1' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img> 
                                  <img id='workB2' className=''src='../images/placeholder.jpg'></img> 
                                  </div>
                                  <div className='uk-width-1-2'>
                                  <img id='workB3' className=''src='../images/placeholder.jpg'></img> 
                                  </div>
                              </div> 
                              <img className='uk-margin-medium-top centerLargePics'src='../images/placeholder.jpg'></img>   
                          </div>
                          <div className='uk-width-1-2'>
                          
                          <div className='uk-grid-match' uk-grid='true'>
                                  <div className='uk-width-1-2'>
                                  <img id='workB4' className=''src='../images/placeholder.jpg'></img> 
                                  
                                  </div>
                                  <div className='uk-width-1-2'>
                                  <img id='workB5' className=''src='../images/placeholder.jpg'></img> 
                                  </div>
                              </div> 
                              <img id='workB6'  className='uk-margin-medium-top  centerLargePics'src='../images/placeholder.jpg'></img> 
                              <div className='uk-grid-match' uk-grid='true'>
                                  <div className='uk-width-1-2'>
                                  <img id='workB7' className='uk-margin-medium-top'src='../images/placeholder.jpg'></img> 
                                  
                                  </div>
                                  <div className='uk-width-1-2'>
                                  <img id='workB8' className='uk-margin-medium-top'src='../images/placeholder.jpg'></img> 
                                  </div>
                              </div> 
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className='workWrapper4 uk-margin-medium-top uk-visible@m'>
                      <div className='uk-container'>
                        <div className='uk-grid-match' uk-grid='true'>
                          <div className='uk-width-1-2'>
                              <div className='uk-grid-match' uk-grid='true'>
                                  <div className='uk-width-1-2 uk-margin-medium-bottom'>
                                  <img id='workB9' className=''src='../images/placeholder.jpg'></img> 
                                  </div>
                                  <div className='uk-width-1-2'>
                                  <img id='workB10' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img> 
                                  </div>
                              </div> 
                              <img id='workB11' className=''src='../images/placeholder.jpg'></img> 
                          </div>
                          <div className='uk-width-1-2'>
                            <img id='workB12' className=''src='../images/placeholder.jpg'></img> 
                          </div>
                        </div>
                        <div className='uk-grid-match' uk-grid='true'>
                            <div className='uk-width-1-4'>
                              <img id='workB13' className=''src='../images/placeholder.jpg'></img> 
                            </div>
                            <div className='uk-width-1-4'>
                              <img id='workB14' className=''src='../images/placeholder.jpg'></img> 
                            </div>
                            <div className='uk-width-1-2'>
                              <img id='workB15' className=''src='../images/placeholder.jpg'></img> 
                            </div>
                        </div>
                        <div className='uk-grid-match' uk-grid='true'>
                            <div className='uk-width-1-2'>
                              <img id='workB16' className=''src='../images/placeholder.jpg'></img> 
                            </div>
                            <div className='uk-width-1-4'>
                              <img id='workB17' className=''src='../images/placeholder.jpg'></img> 
                            </div>
                            <div className='uk-width-1-4'>
                              <img id='workB18' className='uk-margin-medium-bottom'src='../images/placeholder.jpg'></img> 
                              <img id='workB19' className=''src='../images/placeholder.jpg'></img> 
                            </div>
                        </div>
                      </div>
                    </div>


          <div className='uk-container'>
                <div>
                    <h1 className='uk-margin-medium-top uk-visible@m'>Services include, but not limited to</h1>
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
                    <h2 className='uk-margin-large-top thickerFonts'><b>DROP US <br></br> A LINE</b></h2>
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


export default Work;
