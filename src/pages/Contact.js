import React from 'react';

const Contact = () => {

  const copyText = (e) => {
    const textElement = e.target.parentElement.parentElement.nextSibling.children[1]
      
    e.target.previousSibling.style.width = "100%"
    e.target.classList.add("clicked")

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(textElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
  }

  return (
    <div id="contact-site" className="contact-site">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 display-flex flex-column justify-content-center">
            <div className="w-100 d-flex justify-content-center">
              <div className="button-div" onClick={copyText}>
                <div className="upper-line"></div>
                <button 
                  type="button" 
                  className="mx-auto contact-copy-btn "
                >Copy</button>
              </div>
            </div>
            <div>
              <p className="font-sans text-center contact-text">Phone Number</p>
              <p className="font-sans text-center contact-text">796 213 412</p>
            </div>

          </div>
          <div className="col-12 col-lg-6 display-flex flex-column border-lg-left border-white border-top border-lg-top-0">
            <div className="w-100 d-flex justify-content-center">
              <div className="button-div" onClick={copyText}>
                <div className="upper-line"></div>
                <button 
                  type="button" 
                  className="mx-auto contact-copy-btn "
                >Copy</button>
              </div>
            </div>
            <div>
              <p className="font-sans text-center contact-text">E-mail</p>
              <p className="font-sans text-center contact-text">kacper.leszczynski@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;