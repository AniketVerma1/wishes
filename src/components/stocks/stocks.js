import React, { useState } from 'react';
import Header from './header';

export default function Stocks() {
    const [initialQuantity, setInitialQuantity] = useState('');
    const [initialRate, setInitialRate] = useState('');
    const [currentRate, setCurrentRate] = useState('');
    const [desiredAvg, setDesiredAvg] = useState('');
    const [result, setResult] = useState('');

    const [customAmount, setCustomAmount] = useState('');
    const [currentAvgPrice, setCurrentAvgPrice] = useState('');
    const [totalInvested, setTotalInvested] = useState('');
    const [currentStockPrice, setCurrentStockPrice] = useState('');
    const [customResult, setCustomResult] = useState('');

    function calculateQuantityAndAverage() {
        const initialQ = parseFloat(initialQuantity);
        const initialR = parseFloat(initialRate);
        const currentR = parseFloat(currentRate);
        const desiredA = parseFloat(desiredAvg);

        if (!isNaN(initialQ) && !isNaN(initialR) && !isNaN(currentR) && !isNaN(desiredA)) {
            const quantity = calculateQuantityForAverage(initialQ, initialR, currentR, desiredA);
            const average = calculateAvg(initialQ, initialR, currentR, quantity);
            setResult(`you will need to buy: ${quantity} additional stocks to reach the desired average: ${average}, Total amount to be invested: ${(quantity * currentR).toFixed(2)}`);
        } else {
            setResult('Please enter valid numbers for all fields.');
        }
    }

    function calculateAvg(initialQuantity, initialRate, currentRate, currentQuantity) {
        let initialAmount = initialQuantity * initialRate;
        let currentAmount = currentRate * currentQuantity;
        let avg = (initialAmount + currentAmount) / (initialQuantity + currentQuantity);
        return avg.toFixed(2);
    }

    function calculateQuantityForAverage(initialQuantity, initialRate, currentRate, desiredAvg) {
        let initialAmount = initialQuantity * initialRate;
        let rateDiff = desiredAvg - currentRate;
        let currentQuantity;
        if (currentRate === desiredAvg) {
            return initialQuantity;
        } else {
            currentQuantity = initialAmount - (desiredAvg * initialQuantity);
        }
        return Math.round(currentQuantity / rateDiff);
    }

    function calculateCustomAverage() {
        const amount = parseFloat(customAmount);
        const avgPrice = parseFloat(currentAvgPrice);
        const invested = parseFloat(totalInvested);
        const stockPrice = parseFloat(currentStockPrice);

        if (!isNaN(amount) && !isNaN(avgPrice) && !isNaN(invested) && !isNaN(stockPrice)) {
            const totalQuantityBefore = invested / avgPrice; // Total quantity before investment
            const quantityPurchased = amount / stockPrice; // Quantity purchased with custom investment
            const newTotalInvested = invested + amount; // Total invested after custom investment
            const newTotalQuantity = totalQuantityBefore + quantityPurchased; // Total quantity after custom investment
            const newAvg = newTotalInvested / newTotalQuantity; // New average price
            setCustomResult(`New Average Price: ${newAvg.toFixed(2)}`);
        } else {
            setCustomResult('Please enter valid numbers for all fields.');
        }
    }

    return (
        <>
        <Header/>
        <div className="mx-auto max-w-4xl mt-8 p-8 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Stocks Calculator</h1>
            <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Original Form */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Calculate Quantity for Desired Average</h2>
                    <div className="mb-4">
                        <label className="block mb-1">If your current number of stocks is</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={initialQuantity} onChange={(e) => setInitialQuantity(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">the current average price is</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={initialRate} onChange={(e) => setInitialRate(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">and today's price is</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">and you want to achieve a desired average price of</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={desiredAvg} onChange={(e) => setDesiredAvg(e.target.value)} />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={calculateQuantityAndAverage}>Calculate</button>
                    {result && <div className="mt-4">{result}</div>}
                </div>

                {/* Right Column - New Form */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Calculate Average After Custom Investment</h2>
                    <div className="mb-4">
                        <label className="block mb-1">Custom Investment Amount</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Current Average Price</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={currentAvgPrice} onChange={(e) => setCurrentAvgPrice(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Total Invested Money</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={totalInvested} onChange={(e) => setTotalInvested(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Current Stock Price</label>
                        <input type="number" className="w-full px-3 py-2 border rounded-md" value={currentStockPrice} onChange={(e) => setCurrentStockPrice(e.target.value)} />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={calculateCustomAverage}>Calculate</button>
                    {customResult && <div className="mt-4">{customResult}</div>}
                </div>
            </div>
        </div>
        Developed by AV
        </>
    );
}