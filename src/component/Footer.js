import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    let {mode} = this.props
    return (
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className={`mb-3 mb-md-0 text-${mode === 'light'?'dark':'light'}`}>© 2023 NewsMonkey, Inc</span>
          </div>
      
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className={`text-${mode === 'light'?'dark':'light'}`} href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li className="ms-3"><a className={`text-${mode === 'light'?'dark':'light'}`} href="/"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li className="ms-3"><a className={`text-${mode === 'light'?'dark':'light'}`} href="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
            <li className="ms-3"><a className={`text-${mode === 'light'?'dark':'light'}`} href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          </ul>
        </footer>
      </div>
    )
  }
}
