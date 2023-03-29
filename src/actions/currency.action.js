import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
 
export const getCurrencies = async () => {
  try {
    let response = await axios.get("https://api.apilayer.com/exchangerates_data/symbols", {
      headers: {
        'apikey': apiKey,
      },
    }
    )
    return response
  } catch (error) {
    console.log({error});
      throw error;
  }
}

export const convertCurrency = async (data) => {
  try {
    let response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${data.to}&from=${data.from}&amount=${data.amount}`, {
      headers: {
        'apikey': apiKey,
      },
    }
    )
    return response
  } catch (error) {
    console.log({error});
      throw error;
  }
}