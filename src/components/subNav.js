
import React from 'react';
import {useSelector} from 'react-redux'



export default function SubNav() {

    // get the coin to retrieve cumulative data
    const cryptoSummary = useSelector(state => state.cryptos.cryptoData.data)

    return (
        <div className="sub-nav">
            {!cryptoSummary && (<small></small>)}
            { cryptoSummary && (<div className="stats">
                    <p>
                        <span>Cryptos: </span>
                        <span className="stat-data">{cryptoSummary.stats.limit}</span>
                    </p>
                    <p>
                        <span>Exchanges: </span>
                        <span className="stat-data">{cryptoSummary.stats.totalExchanges}</span>
                    </p>
                    <p>
                        <span>Market Cap: </span>
                        <span className="stat-data">{(cryptoSummary.stats.totalMarketCap).toLocaleString('en-US', {
                        style: 'currency',
                        currency: cryptoSummary.stats.base,
                      })}</span>
                    </p>
                    <p>
                        <span>24h Vol: </span>
                        <span className="stat-data">{(cryptoSummary.stats.total24hVolume).toLocaleString('en-US', {
                        style: 'currency',
                        currency: cryptoSummary.stats.base,
                      })}</span>
                    </p>
                    <p>
                        <span className="sign">{cryptoSummary.base.sign}</span>
                        <span><strong>{cryptoSummary.base.symbol}</strong></span>
                    </p>
                </div>)
            }

      </div>
    );
}
