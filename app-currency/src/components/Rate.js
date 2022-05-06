import React from 'react';
import './Rate.css';

class Rate extends React.Component {

    render() {

        return (
            <div>
                <h3>Currency value in 04 may 2022</h3>

                <div className='flex-container'>

                    <div className='block flex-container-item'>
                        <div className='currency-name'>USD</div>
                        <div className='currency-in'>1500</div>
                        <div className='currency-out'>1200</div>
                    </div>

                    <div className='block flex-container-item'>
                        <div className='currency-name'>USD</div>
                        <div className='currency-in'>1500</div>
                        <div className='currency-out'>1200</div>
                    </div>

                    <div className='block flex-container-item'>
                        <div className='currency-name'>USD</div>
                        <div className='currency-in'>1500</div>
                        <div className='currency-out'>1200</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Rate;