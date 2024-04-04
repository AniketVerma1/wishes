import React, { useState } from 'react';

export default function Stocks() {
    const [initialQuantity, setInitialQuantity] = useState('');
    const [initialRate, setInitialRate] = useState('');
    const [currentRate, setCurrentRate] = useState('');
    const [desiredAvg, setDesiredAvg] = useState('');
    const [result, setResult] = useState('');

    function calculateQuantityAndAverage() {
        const initialQ = parseFloat(initialQuantity);
        const initialR = parseFloat(initialRate);
        const currentR = parseFloat(currentRate);
        const desiredA = parseFloat(desiredAvg);

        if (!isNaN(initialQ) && !isNaN(initialR) && !isNaN(currentR) && !isNaN(desiredA)) {
            const quantity = calculateQuantityForAverage(initialQ, initialR, currentR, desiredA);
            const average = calculateAvg(initialQ, initialR, currentR, quantity);
            setResult(`Quantity: ${quantity}, Average: ${average}`);
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

    return (
        <div className="mx-auto max-w-lg mt-8 p-8 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Stocks Calculator</h1>
            <div className="mb-4">
                <label className="block mb-1">Initial Quantity</label>
                <input type="number" className="w-full px-3 py-2 border rounded-md" value={initialQuantity} onChange={(e) => setInitialQuantity(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Initial Price</label>
                <input type="number" className="w-full px-3 py-2 border rounded-md" value={initialRate} onChange={(e) => setInitialRate(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Current Price</label>
                <input type="number" className="w-full px-3 py-2 border rounded-md" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Desired Average</label>
                <input type="number" className="w-full px-3 py-2 border rounded-md" value={desiredAvg} onChange={(e) => setDesiredAvg(e.target.value)} />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={calculateQuantityAndAverage}>Calculate</button>
            {result && <div className="mt-4">{result}</div>}
        </div>
    );
}
