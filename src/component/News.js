import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Image from './image'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitilizeFirstString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    // articles = []
    constructor(props) {
        super(props)
        // console.log('hello constructor')
        // this.arc = []
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitilizeFirstString(this.props.category)} - News Monkey`
        // console.log(this.arc)
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${encodeURIComponent(this.props.newsApi)}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page: 1
        });
        this.props.setProgress(100);
    }
    

    async componentDidMount() {
        // console.log('cdm')
        this.updateNews()
    }
    // handleNextClick = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApi}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //         this.setState({ loading: true })
    //         let data = await fetch(url)
    //         let parsedData = await data.json()
    //         this.setState({
    //             articles: parsedData.articles,
    //             page: this.state.page + 1,
    //             loading: false,
    //             totalResults: parsedData.totalResults
    //         })
    //     }
    //     console.log('next')
    // }
    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApi}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     let data = await fetch(url)
    //     let parsedData = await data.json()

    //     this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page - 1
    //     })
    //     console.log('prev')
    // }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${encodeURIComponent(this.props.newsApi)}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
    };
    
    
    render() {
        let { mode } = this.props
        // console.log(this.state.articles.length)
        return (
            <>
                <div className='container my-3'>
                    <h2 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>NewsMonkey - Top {this.capitilizeFirstString(this.props.category)} HeadLines</h2>
                    <Image />
                    {this.state.loading && <Spinner/>}

                    <InfiniteScroll
                        dataLength={this.state.articles.length} 
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={this.state.loading && <Spinner/>}
                    >

                        <div className='container'>
                            <div className='row'>
                                {this.state.articles.map((element, i) => {
                                return <div className='col-md-4' key={i}>
                                    <NewsItem mode={mode} title={element.title ? element.title.slice(0, 45) : "N/A"} newsUrl={element.url} description={element.description ? element.description.slice(0, 88) : "N/A"}
                                        ImageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                                })}
                            </div>
                        </div>


                    </InfiniteScroll>

                    {/* <div className='container d-flex justify-content-between'>
                        <button type='button' disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark'
                            onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }
}
