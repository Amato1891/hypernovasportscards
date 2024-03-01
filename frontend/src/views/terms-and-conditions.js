import React from 'react'

import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'

import './terms-and-conditions.css'

const TermsAndConditions = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      scrollToTop ();
  return (
    <body style={{backgroundColor:'black'}}>
    <div className="terms-container">
      <Helmet>
        <title>Hypernovasportscards - Terms and Conditions</title>
      </Helmet>
      <Navbar/>
      <header>
    <h1>Terms and Conditions</h1>
</header>
<main>
    <p>These terms and conditions ("Terms") govern your use of Hypernova Sportscards ("Website") operated by Hypernova Sportscards ("Company", "we", "us", or "our"). Please read these Terms carefully before using our Website.</p>

    <p>Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Website.</p>

    <p>By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Website.</p>

    <h2>Accounts</h2>
    <p>When you create an account with us, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Website.</p>
    <p>You are responsible for safeguarding the password that you use to access the Website and for any activities or actions under your password, whether your password is with our Website or a third-party service.</p>

    <h2>Intellectual Property</h2>
    <p>The Website and its original content, features, and functionality are and will remain the exclusive property of Hypernova Sportscards and its licensors. The Website is protected by copyright, trademark, and other laws of both the United States of America (U.S.) and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hypernova Sportscards.</p>

    <h2>Links To Other Websites</h2>
    <p>Our Website may contain links to third-party websites or services that are not owned or controlled by Hypernova Sportscards.</p>
    <p>Hypernova Sportscards has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Hypernova Sportscards shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>

    <h2>Changes</h2>
    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is a material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
    <p>By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Website.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions about these Terms, please contact us:</p>
    <ul className='contact-us-links'>
        <li><a href="https://www.instagram.com/hypernovasportscards/">Instagram DM</a></li>
        <li><a href="https://www.whatnot.com/user/hypernovasports">Whatnot DM</a></li>
    </ul>
</main>

<footer>
    <p>Copyright © 2024 Hypernova Sportscards. All rights reserved.</p>
</footer>
    </div>
    </body>
  )
}

export default TermsAndConditions
