import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div id="footer-links" aria-label="LinkedIn, Github and Contact links">
        <a
          href="https://www.linkedin.com/in/sheyladelossantos/"
          target="_blank"
          aria-label="Connect with me on LinkedIn"
        >
          linkedin
        </a>
        <a
          href="https://github.com/ssshhheeeyyy"
          target="_blank"
          aria-label="Visit my profile on github."
        >
          github
        </a>
        <a
          href="mailto:delossantosshey@gmail.com"
          target="_blank"
          aria-label="Click to send me an email."
        >
          contact
        </a>
      </div>
      <p id="copyright">
        Copyright 2023 © Sheyla De los Santos. Made with ♡ in NYC.
      </p>
    </footer>
  );
};

export default Footer;
