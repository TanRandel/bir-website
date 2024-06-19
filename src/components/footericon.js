import React from 'react';
import facebook from '../assets/facebook.png';
import chain from '../assets/chain.png';
import helpdesk from '../assets/helpdesk.png';
import phone from '../assets/icons8-phone-40.png'
const FooterIcons = () => {
  return (
    <>
    
    <div className="footer-icons">
          <a href="https://www.facebook.com/agricreditpolicycouncil"><img src={facebook} alt="Facebook" /></a>
          <a href="https://helpdesk.acpc.gov.ph/hc/en-us"><img src={helpdesk} alt="Helpdesk" /></a>
          <a href="https://acpc.gov.ph/"><img src={chain} alt="mainsite" /></a> 
          <a href="https://acpc.gov.ph/contact-us/#/"><img src={phone} alt="contact" /></a>     
      </div>
    </>
  );
};

export default FooterIcons;