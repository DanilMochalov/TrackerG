function createCryptoItem(crypto) {
    const cryptoItem = document.createElement('div');
    cryptoItem.className = 'crypto-item';
    cryptoItem.innerHTML = `
      <img src="${crypto.image}" alt="${crypto.name}" width="30" height="30">
      <h3>${crypto.name} (${crypto.symbol.toUpperCase()})</h3>
      <p>Price: $${crypto.current_price}</p>
      <p>24-hour change: ${crypto.price_change_percentage_24h}%</p>
    `;
    return cryptoItem;
  }
  
  function displayCryptoList(cryptoData) {
    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = '';
  
    cryptoData.forEach(crypto => {
      const cryptoItem = createCryptoItem(crypto);
      cryptoList.appendChild(cryptoItem);
    });
  }
  
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayCryptoList(data);
    })
    .catch(error => {
      console.error('error:', error);
    });