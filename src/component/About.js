import React, { Component } from 'react'

export default class About extends Component {
  render() {
    let {mode} = this.props
    return (
        <>
        <div className='container py-2'>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">{`{`}Vedansh Verma{`}`}<span className={`text-${mode === 'light' ? 'dark' : 'light'}`}>{`  <>`}Developer{`</>`}</span></h2>
                    <p className="lead">I m a React Web Developer and NewsMonkey is my Second React Web.</p>
                </div>       
                <div className="col-md-5">
                    <img className="bd-placeholder-img rounded-circle bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        src={`${process.env.PUBLIC_URL}/omen.png`}
                        width="500"
                        height="500"
                        alt="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false" />
                </div>
            </div>
        </div>
    </>
    )
  }
}
