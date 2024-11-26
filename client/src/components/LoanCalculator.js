import React, { useState } from 'react';

const LoanCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [interest, setInterest] = useState('');
    const [years, setYears] = useState('');
    const [payment, setPayment] = useState('');

    const calculatePayment = () => {
        const interestRate = parseFloat(interest) / 100 / 12;
        const numberOfPayments = parseInt(years) * 12;
        const monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -numberOfPayments));
        setPayment(monthlyPayment.toFixed(2));
    };

    return (
        <div>
            <h2>Loan Calculator</h2>
            <div>
                <label>Loan Amount:</label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </div>
            <div>
                <label>Annual Interest Rate (%):</label>
                <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} />
            </div>
            <div>
                <label>Loan Term (Years):</label>
                <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
            </div>
            <button onClick={calculatePayment}>Calculate Payment</button>
            <div>Your monthly payment is ${payment}</div>
        </div>
    );
};

export default LoanCalculator;
