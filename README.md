const marketData = [
  {
    symbol: "NVDA",
    name: "NVIDIA",
    type: "Stock",
    price: 132.48,
    change: 2.44,
    gamma: 96,
    iv: 31.2,
    volume: "1.8x",
    signal: "Mega gamma breakout",
    sentiment: "Bullish",
    sector: "Semis"
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices",
    type: "Stock",
    price: 168.94,
    change: 1.89,
    gamma: 89,
    iv: 29.4,
    volume: "1.5x",
    signal: "Trend follow-through",
    sentiment: "Bullish",
    sector: "Semis"
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    type: "Stock",
    price: 442.2,
    change: 1.14,
    gamma: 81,
    iv: 24.9,
    volume: "1.3x",
    signal: "Steady momentum",
    sentiment: "Bullish",
    sector: "Tech"
  },
  {
    symbol: "AAPL",
    name: "Apple",
    type: "Stock",
    price: 221.76,
    change: 0.82,
    gamma: 73,
    iv: 20.6,
    volume: "1.1x",
    signal: "Short squeeze risk",
    sentiment: "Neutral",
    sector: "Tech"
  },
  {
    symbol: "SPY",
    name: "S&P 500 ETF",
    type: "Index",
    price: 542.44,
    change: 0.91,
    gamma: 86,
    iv: 14.2,
    volume: "1.6x",
    signal: "Index trend support",
    sentiment: "Bullish",
    sector: "Broad market"
  },
  {
    symbol: "QQQ",
    name: "Nasdaq 100 ETF",
    type: "Index",
    price: 488.28,
    change: 1.78,
    gamma: 91,
    iv: 17.9,
    volume: "1.9x",
    signal: "Strong gamma leader",
    sentiment: "Bullish",
    sector: "Index"
  },
  {
    symbol: "IWM",
    name: "Russell 2000 ETF",
    type: "Index",
    price: 212.88,
    change: 1.22,
    gamma: 76,
    iv: 18.7,
    volume: "1.2x",
    signal: "Small-cap acceleration",
    sentiment: "Bullish",
    sector: "Broad market"
  },
  {
    symbol: "META",
    name: "Meta Platforms",
    type: "Stock",
    price: 533.47,
    change: 1.64,
    gamma: 84,
    iv: 23.4,
    volume: "1.4x",
    signal: "Vol crush candidate",
    sentiment: "Bullish",
    sector: "Tech"
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    type: "Stock",
    price: 214.14,
    change: -0.66,
    gamma: 62,
    iv: 42.5,
    volume: "1.3x",
    signal: "High volatility fade",
    sentiment: "Neutral",
    sector: "Auto"
  },
  {
    symbol: "XLC",
    name: "Communication Services",
    type: "Index",
    price: 92.1,
    change: 0.74,
    gamma: 68,
    iv: 16.1,
    volume: "0.9x",
    signal: "Range expansion",
    sentiment: "Neutral",
    sector: "Index"
  }
];

const resultsContainer = document.getElementById("resultsContainer");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const sortFilter = document.getElementById("sortFilter");
const watchlistItems = document.getElementById("watchlistItems");

const formatPrice = (value) => `$${value.toFixed(2)}`;

const getSortedData = (data) => {
  const sortMode = sortFilter.value;
  const cloned = [...data];

  if (sortMode === "change") {
    return cloned.sort((a, b) => b.change - a.change);
  }

  if (sortMode === "name") {
    return cloned.sort((a, b) => a.symbol.localeCompare(b.symbol));
  }

  return cloned.sort((a, b) => b.gamma - a.gamma);
};

const renderWatchlist = () => {
  const top = [...marketData]
    .sort((a, b) => b.gamma - a.gamma)
    .slice(0, 4);

  watchlistItems.innerHTML = top
    .map(
      (item) => `
        <li>
          <div class="mini-badge">${item.symbol.slice(0, 2)}</div>
          <div>
            <strong>${item.symbol}</strong>
            <small>${item.name}</small>
          </div>
          <span class="${item.change >= 0 ? "positive" : "neutral"}">${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%</span>
        </li>
      `
    )
    .join("");
};

const renderCards = () => {
  const query = searchInput.value.trim().toLowerCase();
  const selectedType = typeFilter.value;

  let filtered = marketData.filter((item) => {
    const matchesText =
      !query ||
      item.symbol.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.sector.toLowerCase().includes(query);

    const matchesType = selectedType === "all" || item.type === selectedType;
    return matchesText && matchesType;
  });

  if (!filtered.length) {
    resultsContainer.innerHTML = `
      <div class="result-card" style="grid-column: 1 / -1; min-height: 220px; justify-content: center; align-items: center; text-align: center;">
        <div class="ticker-badge" style="margin: 0 auto;">!</div>
        <h4>No matches found</h4>
        <p class="muted" style="max-width: 420px;">Try a different ticker or switch back to all assets to see the full gamma scan.</p>
      </div>
    `;
    return;
  }

  const sorted = getSortedData(filtered);

  resultsContainer.innerHTML = sorted
    .map(
      (item) => `
        <article class="result-card">
          <div class="result-top">
            <div class="ticker">
              <div class="ticker-badge">${item.symbol.slice(0, 2)}</div>
              <div>
                <strong>${item.symbol}</strong>
                <small>${item.name}</small>
              </div>
            </div>
            <span class="score-pill">${item.gamma}</span>
          </div>

          <div class="result-meta">
            <div>
              <span class="meta-label">Type</span>
              <span class="meta-value">${item.type}</span>
            </div>
            <div>
              <span class="meta-label">Price</span>
              <span class="meta-value">${formatPrice(item.price)}</span>
            </div>
            <div>
              <span class="meta-label">Change</span>
              <span class="meta-value ${item.change >= 0 ? "positive" : "neutral"}">${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%</span>
            </div>
            <div>
              <span class="meta-label">IV</span>
              <span class="meta-value">${item.iv.toFixed(1)}%</span>
            </div>
          </div>

          <div class="result-footer">
            <div>
              <div class="signal-note">${item.signal}</div>
              <div class="signal-note">Volume ${item.volume}</div>
            </div>
            <span class="${item.sentiment === "Bullish" ? "positive" : "neutral"}">${item.sentiment}</span>
          </div>
        </article>
      `
    )
    .join("");
};

searchInput.addEventListener("input", renderCards);
typeFilter.addEventListener("change", renderCards);
sortFilter.addEventListener("change", renderCards);
document.getElementById("scanButton").addEventListener("click", renderCards);

renderCards();
renderWatchlist();
























































































































































































































