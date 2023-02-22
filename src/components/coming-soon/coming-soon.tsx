import { url } from 'inspector';
import React from 'react';
import iconLogo from '../../task/images/logo.svg';
import imageDesktop from '../../task/images/hero-mobile.jpg';
import imageMobile from '../../task/images/hero-desktop.jpg';
import { EmailSubscription } from '../email-subscription/email-subscription';
import './coming-soon.css';

export function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-header">
        <img src={iconLogo} alt="" />
      </div>
      <div className="coming-soon-image">
        <picture>
          <source media="(max-width:1099px)" srcSet={imageDesktop} />
          <source media="(min-width:1100px)" srcSet={imageMobile} />
          <img alt="" src="images/hero-mobile.jpg" />
        </picture>
      </div>
      <div className='coming-soon-content-box'>
        <div className="coming-soon-content">
          <div className="headline">
            <h1>we're</h1>
            <h1>coming soon</h1>
          </div>
          <div className="text">
            <p>
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch
              deals.
            </p>
          </div>
          <div className='coming-soon-subscription'>
            <EmailSubscription />
          </div>
        </div>
      </div>
    </div>
  );
}
