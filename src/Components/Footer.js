import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <>
  {/* Footer*/}
  <footer className="border-top">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
          <div className="small text-center text-muted fst-italic">
            Copyright © Your Website 2023
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

            </div>
        );
    }
}

export default Footer;
