import React from 'react';
import './email-subscription.css';
import iconError from '../../task/images/icon-error.svg';
import iconArrow from '../../task/images/icon-arrow.svg';

export function EmailSubscription() {
  const [state, dispatch] = React.useState({
    isValid: false,
    errorMessage: '',
    email: '',
    showError: false,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!state.isValid) {
      dispatch((prevState) => ({ ...prevState, showError: true }));
    } else {
      dispatch((prevState) => ({ ...prevState, showError: false }));
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const regEx = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    const isValid = regEx.test(event.target.value);

    if (!isValid) {
      dispatch((prevState) => ({ ...prevState, isValid: false, errorMessage: 'Please provide a valid email', email: '' }));
      return;
    }

    dispatch((prevState) => ({ ...prevState, isValid: true, errorMessage: '', email: event.target.value }));
  };

  return (
    <form className="email-subscription-form" onSubmit={onSubmit}>
      <div className="email-subscription-input-box">
        <input className="email-input" name="email" type="text" placeholder="Email Address" onChange={onChange}></input>
        <div>
          {state.showError ? <img className="email-error-icon" alt="" src={iconError} /> : null}
          <button className="email-submit-button" type="submit">
            <img className="email-arrow-icon" alt="" src={iconArrow} />
          </button>
        </div>
      </div>
      {state.showError ? <p className='error-message'>{state.errorMessage}</p> : null}
    </form>
  );
}
