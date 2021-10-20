import React from 'react';

import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <span className="iconify" data-icon="eva:phone-fill" style={{ color: "rgb(83, 83, 83)" }} data-width="30" data-height="30"></span>
      <span className="iconify" data-icon="fluent:book-contacts-32-filled" style={{ color: "rgb(83, 83, 83)" }} data-width="30" data-height="30"></span>
      <span className="iconify" data-icon="eva:keypad-fill" style={{ color: "rgb(83, 83, 83)" }} data-width="45" data-height="45"></span>
      <span className="iconify" data-icon="ci:settings-filled" style={{ color: "rgb(83, 83, 83)" }} data-width="30" data-height="30"></span>
      <span className="iconify" data-icon="grommet-icons:status-good-small" style={{ color: "rgb(83, 83, 83)" }}  data-width="25" data-height="25"></span>
    </footer>
  );
};

export default Footer;
