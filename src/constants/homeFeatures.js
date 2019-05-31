import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import CALLOUTS from '../constants/homeCallouts';

class homeFeature extends React.Component {
    static renderCallouts() {
        return CALLOUTS.map((card) => {
            const cardClass = `col-lg-3 col-md-4 col-sm-6`;
            return (
                <div className={cardClass} key={card.TITLE}>
                    <div className="card text-center feature-list">
                        <div className="card-text">
                            <p className="card-icon">{card.IMAGE}</p>
                            <h3>{card.TITLE}</h3>
                            <p>{card.COPY}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render(){
        return (
            <div id="features" className="features wow fadeInDown">
                <div className="container">
                    <div className="features-intro text-center">
                        <h2>
                            Features
                        </h2>
                    </div>
                    <div className="row">
                        {homeFeature.renderCallouts()}
                    </div>
                    <div className="features-intro text-center">
                        <p>
                            <a href="/features">
                                Explore All Features <FaArrowRight/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default homeFeature
