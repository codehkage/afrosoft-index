(function() {
    $.get("https://api.coinmarketcap.com/v1/ticker/?limit=1", function(data, status) {
        console.log(data[0])
        document.getElementById("rank").innerText = "No." + data[0].rank + "  |  ";
        document.getElementById("name").innerText = data[0].name + "  |  ";
        document.getElementById("price-btc").innerText = data[0].price_btc + "  |  ";
        document.getElementById("price-usd").innerText = data[0].price_usd + "  |  ";
        //document.getElementById("24-volume-usd").innerText = data[0].24h_voulme_usd;
        /*  document.getElementById("available-supply").innerText = data[0].available_supply + "  |  "; */
        /*  document.getElementById("last-updated").innerText = data[0].last_updated + "  |  ";
         document.getElementById("market-cap-usd").innerText = data[0].market_cap_usd + "  |  "; */
        /*  document.getElementById("max-supply").innerText = data[0].max_supply + "  |  "; */
        document.getElementById("percent-change-1h").innerText = data[0].percent_change_1h + "%" + "  |  ";
        document.getElementById("percent-change-7d").innerText = data[0].percent_change_7d + "%" + "  |  ";
        document.getElementById("percent-change-24h").innerText = data[0].percent_change_24h + "%" + "  ";
        /*  document.getElementById("total-supply").innerText = data[0].total_supply; */
    })
})();