import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-3 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-center">
              <p className="mb-0">
                © {new Date().getFullYear()} Binod Magar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
