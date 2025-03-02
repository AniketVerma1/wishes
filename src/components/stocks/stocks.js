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
            setResult(`You will need to buy: ${quantity} additional stocks to reach the desired average: ${average}. Total amount to be invested: ${(quantity * currentR).toFixed(2)}`);
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
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
                <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Stocks Calculator</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column - Original Form */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold text-blue-700 mb-4">Calculate Quantity for Desired Average</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">If your current number of stocks is</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={initialQuantity} onChange={(e) => setInitialQuantity(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">The current average price is</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={initialRate} onChange={(e) => setInitialRate(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">And today's price is</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">And you want to achieve a desired average price of</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={desiredAvg} onChange={(e) => setDesiredAvg(e.target.value)} />
                            </div>
                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300" onClick={calculateQuantityAndAverage}>Calculate</button>
                            {result && <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md">{result}</div>}
                        </div>

                        {/* Right Column - New Form */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold text-blue-700 mb-4">Calculate Average After Custom Investment</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">How much you want to invest - Amount?</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Average Price</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={currentAvgPrice} onChange={(e) => setCurrentAvgPrice(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Total Invested Money</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={totalInvested} onChange={(e) => setTotalInvested(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Stock Price</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={currentStockPrice} onChange={(e) => setCurrentStockPrice(e.target.value)} />
                            </div>
                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300" onClick={calculateCustomAverage}>Calculate</button>
                            {customResult && <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md">{customResult}</div>}
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-600 mt-6">Developed by AV</div>
            </div>
        </>
    );
}