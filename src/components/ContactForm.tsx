import React from 'react';
import './ContactForm.scss';

const ContactForm = () => (
  <section className='ContactForm' onClick={({target}: React.MouseEvent) => {
    if((target as HTMLDivElement).className === 'ContactForm') console.log('cancel');
  }}>
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

export default ContactForm;
