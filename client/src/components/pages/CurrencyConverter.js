import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'HEX', 'USD', 'XRP', 'LTC', 'ADA']

    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>

            <table>
                <tbody>
<tr>
    <td>Primary Currency:</td>
<td>  
    <input type="number" 
    name="currency-amount-1"
    value={""} 
    /> 
    </td>
    <td>
        <select  
          value={""}
    name="currency-amount-1"
    className="currency-options"
    >  
        {currencies.map( currency, _index => (<option key={_index}>{currency}</option>))}
    </select>
    </td>
    </tr>

    <tr>
    <td>Secondary Currency:</td>
<td>  
    <input type="number" 
    name="currency-amount-2"
    value={""} 
    /> 
    </td>
    <td>
        <select  
          value={""}
    name="currency-amount-2"
    className="currency-options"
    >  
        {currencies.map( currency => (<option>{currency}</option>))}
    </select>
    </td>
    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyConverter