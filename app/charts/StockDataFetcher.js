import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import StockBarChart from './StockBarChart';

const STOCK_API_BASE_URL = 'https://api.iex.cloud/v1/data/core/intraday_prices'; 

const StockDataFetcher = () => {
  const [symbol, setSymbol] = useState('');
  const [stocks, setStocks] = useState([]);
  const [validSymbol, setValidSymbol]=useState(false);

  const handleSearch = async () => {
    try {
      if (!symbol) {
        setStocks([]); // Clear stock data if no symbol is provided
        return;
      }

      const response = await fetch(
        `${STOCK_API_BASE_URL}/${symbol}?range=5dm&token=pk_9e697d85bc3446ba8c552b18e85ff4bc`
      );
      if(response.ok){
        setValidSymbol(true);
      }

      if (!response.ok) {
        setValidSymbol(false);
        throw new Error('Failed to fetch stock data');
      }

      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter stock symbol"
        onChangeText={(text) => setSymbol(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      {stocks.length > 0 && <StockBarChart stockData={stocks} />}
      {stocks.length === 0 && validSymbol && <Text>No stock data available</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default StockDataFetcher;
