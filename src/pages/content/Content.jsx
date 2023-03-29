import React from 'react'
import './content.scss'
import { Repeat } from 'feather-icons-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCurrencies, convertCurrency } from '../../actions/currency.action'

const Content = () => {

  const [amount, setAmount] = useState(0);
  const [result, setReuslt] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('COP')
  const [currencies, setCurrencies] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=> {
    const getDataCurrencies = async () => {
      let result = await getCurrencies();
      if(result.data && result.data.symbols){
        setCurrencies(Object.keys(result.data.symbols))
      }
      setLoading(false);
    }
    getDataCurrencies();
    console.log('pasa')
  }, [])

  const changeCurrency = async () => {
    let data = { to, from, amount }
    setLoading(true);
    let response = await convertCurrency(data);
    if(response && response.data && response.data.result){
      setReuslt(response.data.result)
      console.log({response})
    }
    setLoading(false);
  }

  return (
    <div className='center--content'>
      <div className='container--data'>
        <div className='content--container'>
          <div className='input--container'>
            <p>Amount</p>
            <input type="number" min="0" onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <div className='veritical--divider' />
          <div className='input--container'>
            <p>From</p>
            <select name="from" id="from" value={from} onChange={(item) => setFrom(item.target.value)}>
              <option value="" selected disabled hidden> Select option </option> 
              {
                currencies.map(currency => {
                  return(
                    <option value={currency}>{currency}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='container--icon--repeat'>
            <Repeat  aria-label="icon change money" className='icon--repeat' />
          </div>
          <div className='input--container'>
            <p>To</p>
            <select name="to" id="to" value={to} onChange={(item) => setTo(item.target.value)}>
              <option value="" selected disabled hidden> Select option </option> 
              {
                currencies.map(currency => {
                  return(
                    <option value={currency}>{currency}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className='button--container'>
          <button onClick={()=> changeCurrency()}>Change</button>
        </div>
        <div className="answer--container">
          <p>{amount} {from} = </p>
          <span>{result} {to}</span>
        </div>
      </div>
      {
        loading ? 
        <div className='container--loading'>
          <span className="loader"></span>
          <p>Load money</p>
        </div>
        : null
      }
     
    </div>

  )
}

export default Content