import React, {Component} from 'react';
import './Lot.css'

class Lot extends Component {
    render() {
        return (
            <div className="Lot">
                <div className="Lot-title">
                    Кофеварка
                </div>

                <div className="Lot-container">
                    <div className="Lot-img">
                        <img src="/test.jpg"></img>
                    </div>
                    <div className="test">
                        <div className="Lot-info">
                            <div className="Lot-about">
                                Отличная кофеварка
                            </div>
                            <div className="Lot-cost">
                                1000
                            </div>
                        </div>

                        <a href="/#" className="Lot-button">
                            Купить
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lot;