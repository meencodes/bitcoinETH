import React, { Component } from 'react'
import styled from 'styled-components'
import banner from '../assets/images/logo/architectural-design-architecture-buildings-city-374811.jpg'
import arrow from '../assets/images/tooltip/arrow_down.svg'
import bgBtm from '../assets/images/btm/btm.jpg'
import Header from '../components/Header'

import { Link } from 'react-scroll';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <Info1>
                    <Session1>
                        <InfoImg1>
                            <BgImage src={banner} alt="saron" sizes="180vh" />
                        </InfoImg1>
                    </Session1>

                    <Session2>
                        <Message>
                            —<br />Bitcoin ETH<br />
                        </Message>
                        <Link
                            className="action"
                            to='about-section'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <span className="action_icon">
                                <img src={arrow} style={{ width: '23px', height: '23px' }} alt="action" />
                            </span>
                            <span className="action_message">Product</span>
                        </Link>
                    </Session2>
                </Info1>

                <div className="section2">
                    <div className="content">
                    <h3>Abstract</h3>A digital token backed by Bitcoin and decentralized method of exchanging value while using a familiar accounting unit. The innovation of blockchains is an auditable and cryptographically secured global ledger. Asset¬backed token issuers and other market participants can take advantage of blockchain technology, along with embedded consensus systems, to transact in familiar, less volatile currencies and assets. In order to maintain accountability and to ensure stability in exchange price, we propose a method to maintain a one¬ to ¬one reserve ratio between a cryptocurrency token, called BitcoinETH, and its associated world known cryptocurrency, Bitcoin. This method uses the Bitcoin blockchain, Proof of Reserves, and other audit methods to prove that issued tokens are fully backed and reserved at all times.<br /><br />
                        BitcoinETH (BTCE) is a Cryptocurrency which combined the best quality of both coin like reliability of Bitcoin and Rapidity of Ethereum. This idea was created to make it more convenience to the user as the value of BitcoinETH meant to mirror the value of Bitcoin. BitcoinETH brings out the unique points from both POW and POS to ensure the quality of BitcoinETH.
    
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;

const Info1 = styled.div`
              height: 100vh;
              overflow: hidden;
              position: relative;
            `
const Session1 = styled.div`
              top: 0;
              left: 0;
              width: 100vw;
              bottom: 0;
              overflow: hidden;
              position: absolute;
            `
const InfoImg1 = styled.div`
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 0;
              overflow: hidden;
              position: absolute;
            `
const BgImage = styled.img`
              top: 0;
              right: 0;
              width: 100vw;
              height: 100%;
              z-index: 0;
              position: absolute;
              object-fit: cover;
              /* filter: blur(2px); */
              filter: brightness(70%);
`
const Session2 = styled.div`
              left: 5vw;
              bottom: 5vh;
              position: absolute;
            `
const Message = styled.div`
              font-size: 8vmin;
              line-height: 0.85;
              margin-bottom: 1rem;
              color: white;
              letter-spacing: 0.1em;
            `