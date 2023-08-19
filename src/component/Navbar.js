import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavbarFixed: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
            this.setState({ isNavbarFixed: true });
        } else {
            this.setState({ isNavbarFixed: false });
        }
    };

    render() {
        let { toggleMode } = this.props;
        const { isNavbarFixed } = this.state;

        return (
            <>
                <nav className={`navbar navbar-expand-lg ${isNavbarFixed ? 'fixed-top' : ''} bg-dark navbar-dark`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Monkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                        <label>
                            <input type='checkbox' onClick={toggleMode}/>
                                <span className='check'></span>
                        </label>
                    </div>
                </nav>
            </>
        )
    }
}
