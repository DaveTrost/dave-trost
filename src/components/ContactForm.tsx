import React, { useEffect } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { IOnClickHandler, IOnSubmitHandler } from '../types/types';
import './ContactForm.scss';

export interface IContactForm {
  isDisplayed: Boolean;
  handleClose: Function;
}

const ContactFormClassName = 'ContactForm'

const ContactForm = ({isDisplayed, handleClose}: IContactForm) => {

  const closeForm = () => {
    clearAllBodyScrollLocks();
    handleClose();
  }
  const handleSubmit: IOnSubmitHandler = event => {
    closeForm();
  }
  const cancelForm: IOnClickHandler = ({target}) => {
    if((target as HTMLDivElement).className.includes(ContactFormClassName)) {
      closeForm();
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
      onClick={cancelForm}
    >
      <div className='appContainer formArea'>
        <div className='row justify-content-center'>
          <div className='col-sm-8'>
            <h3>Get In Touch!</h3>
          </div>
        </div>
        <form name='contact-form' method='post' onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value='contact-form' />
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
                <div className='form-check bumpUpward'>
                  <input 
                    className='form-check-input' 
                    id='copy-submitter'
                    name='copy-submitter'
                    type='checkbox' 
                    />
                  <label className='form-check-label' htmlFor='copy-submitter'>
                    Send me a copy
                  </label>
                </div>
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
