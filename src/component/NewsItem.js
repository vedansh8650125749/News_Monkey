import React from 'react'

const NewsItem = (props) => {
    return (
        <>
            <div className='container my-3'>
                <div className={`card bg-${props.mode !== 'light' ? 'dark' : 'light'}`}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1, left: '50%' }}>{props.source}</span>
                    <img src={!props.ImageUrl ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : props.ImageUrl} className="card-img-top news-image" alt="..." />
                    <div className="card-body">
                        <h5 className={`card-title text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.title}...</h5>
                        <p className={`card-text text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!props.author ? "Unknown Author" : props.author} on {new Date(props.date).toGMTString()}</small></p>
                        <a href={props.newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-warning">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsItem