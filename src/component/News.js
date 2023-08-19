import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Image from './image'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props)=>{
   
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitilizeFirstString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    document.title = `${capitilizeFirstString(props.category)} - News Monkey`



    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${encodeURIComponent(props.newsApi)}&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }
    
    useEffect(()=>{
        updateNews()
    }, [])

    // handleNextClick = async () => {
    //     if (!(state.page + 1 > Math.ceil(state.totalResults / props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsApi}&page=${state.page + 1}&pageSize=${props.pageSize}`
    //         setState({ loading: true })
    //         let data = await fetch(url)
    //         let parsedData = await data.json()
    //         setState({
    //             articles: parsedData.articles,
    //             page: state.page + 1,
    //             loading: false,
    //             totalResults: parsedData.totalResults
    //         })
    //     }
    //     console.log('next')
    // }
    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsApi}&page=${state.page - 1}&pageSize=${props.pageSize}`
    //     let data = await fetch(url)
    //     let parsedData = await data.json()

    //     setState({
    //         articles: parsedData.articles,
    //         page: state.page - 1
    //     })
    //     console.log('prev')
    // }

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${encodeURIComponent(props.newsApi)}&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };
        return (
            <>
                <div className='container my-3'>
                    <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>NewsMonkey - Top {capitilizeFirstString(props.category)} HeadLines</h2>
                    <Image />
                    {loading && <Spinner/>}

                    <InfiniteScroll
                        dataLength={articles.length} 
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={loading && <Spinner/>}
                    >

                        <div className='container'>
                            <div className='row'>
                                {articles.map((element, i) => {
                                return <div className='col-md-4' key={i}>
                                    <NewsItem mode={props.mode} title={element.title ? element.title.slice(0, 45) : "N/A"} newsUrl={element.url} description={element.description ? element.description.slice(0, 88) : "N/A"}
                                        ImageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                                })}
                            </div>
                        </div>


                    </InfiniteScroll>

                    {/* <div className='container d-flex justify-content-between'>
                        <button type='button' disabled={state.page <= 1} className='btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
                        <button type='button' disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} className='btn btn-dark'
                            onClick={handleNextClick}>Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
