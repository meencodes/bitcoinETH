import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo/BTCE_Logo_white.svg'
import { Link as Scroll } from 'react-scroll'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pos: window.pageYOffset,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { pos } = this.state;

        const isTop = window.scrollY < 200;

        const temp = window.pageYOffset;
        const visible = pos > temp;

        if (isTop !== true) {
            this.setState({
                pos: temp,
                visible
            });
        }
    };

    render() {
        return (
            <div className={this.state.visible ? 'header' : 'header scrolled'}>
                <div className="navbar">
                    <div className="navbar-logo">
                        <Scroll to='main' spy={true} smooth={true} offset={0} duration={500} className="action">
                            <Link to="/"><img src={Logo} className="logo" /></Link>
                        </Scroll>
                    </div>

                    <div className="navbar-button">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;