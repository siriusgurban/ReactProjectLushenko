import React from 'react';
import './Rate.css';

class Rate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'time_next_update_utc' : ' ',
            'currencyRate' : {}
        }
        this.currency = ['USD', 'EUR' , 'RUB' , 'AZN']
        this.getRate();

        
        
    }

    getRate = () => {
        fetch('https://open.er-api.com/v6/latest')
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            this.setState({time_next_update_utc: data.time_next_update_utc});
            let result = {};
            for(let i = 0; i < this.currency.length; i++){
                result[this.currency[i]] = data.rates[this.currency[i]];
            }
            console.log(result)
            this.setState({currencyRate : result})
        });
    } 

    render() {

        

        return (
            <div>
                <h3>Currency value in {this.state.time_next_update_utc}</h3>

                <div className='flex-container'>
                    {Object.keys(this.state.currencyRate).map((keyName, i) => (
                        <div className='block flex-container-item' key = {keyName}>
                        <div className='currency-name'>{keyName}</div>
                        <div className='currency-in'>{this.state.currencyRate[keyName].toFixed(2)}</div>
                        {/* <div className='currency-out'>1200</div> */}
                    </div>
                    ))};

                </div>
            </div>
        )
    }
}

export default Rate;