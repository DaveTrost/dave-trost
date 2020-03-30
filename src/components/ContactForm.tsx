import React, { useEffect } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './ContactForm.scss';
import { IOnClickHandler } from '../types/types';

export interface IContactForm {
  isDisplayed: Boolean;
  handleClose: Function;
}

const ContactFormClassName = 'ContactForm'

const ContactForm = ({isDisplayed, handleClose}: IContactForm) => {

  const closeForm: IOnClickHandler = ({target}) => {
    if((target as HTMLDivElement).className.includes(ContactFormClassName)) {
      clearAllBodyScrollLocks();
      handleClose();
    }
  }

  useEffect(() => {
    if(isDisplayed) {
      const modalEle = document.querySelector(`.${ContactFormClassName}`);
      if(modalEle) disableBodyScroll(modalEle);
    }
  }, [isDisplayed]);

  return (
    <section 
      className={`${ContactFormClassName} ${isDisplayed ? 'visible' : 'hidden'}`}
      onClick={closeForm}
    >
      <div className='appContainer formArea'>
        <div className='row justify-content-center'>
          <div className='col-sm-8'>
            <h3>Get In Touch!</h3>
          </div>
        </div>
        <form id='contact-form'>
          <div className='messages'></div>
          <div className='controls'>
            <div className='row justify-content-center'>
              <div className='col-sm-8 col-md-4'>
                <div className='form-group'>
                  <input 
                    className='form-control' 
                    id='form_name' 
                    required 
                    type='text' 
                    name='name' 
                    placeholder='your name' 
                    data-error='Name is required.' 
                  />
                  <div className='help-block with-errors'></div>
                </div>
              </div>
              <div className='col-sm-8 col-md-4'>
                <div className='form-group'>
                  <input 
                    className='form-control' 
                    id='form_email' 
                    required 
                    type='email' 
                    name='email' 
                    placeholder='your email' 
                    data-error='Valid email is required.' 
                  />
                  <div className='help-block with-errors'></div>
                </div>
              </div>
              <div className='col-sm-8'>
                <div className='form-group'>
                  <textarea 
                    className='form-control' 
                    id='form_message' 
                    required 
                    name='message' 
                    placeholder='message' 
                    rows={4}
                    data-error='Please, leave me a message.'>
                  </textarea>
                  <div className='help-block with-errors'></div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-sm-8'>
                <input 
                  className='btn btn-send contactSubmitButton'
                  type='submit' 
                  value='Send message' 
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
