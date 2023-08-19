import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, ImageUrl, newsUrl, mode, author, date, source } = this.props
        return (
            <>
                <div className='container my-3'>
                    <div className={`card bg-${mode !== 'light' ? 'dark' : 'light'}`}>
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'50%'}}>{source}</span>
                            <img src={!ImageUrl ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : ImageUrl} className="card-img-top news-image" alt="..." />
                            <div className="card-body">
                                <h5 className={`card-title text-${mode === 'light' ? 'dark' : 'light'}`}>{title}...</h5>
                                <p className={`card-text text-${mode === 'light' ? 'dark' : 'light'}`}>{description}...</p>
                                <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown Author" : author} on {new Date(date).toGMTString()}</small></p>
                                <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-warning">Read More</a>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}
