import React, { useState } from 'react';

const BudgetPlanner = () => {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [balance, setBalance] = useState('');

    const calculateBalance = () => {
        const balance = parseFloat(income) - parseFloat(expenses);
        setBalance(balance.toFixed(2));
    };

    return (
        <div>
            <h2>Budget Planner</h2>
            <div>
                <label>Monthly Income:</label>
                <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
            </div>
            <div>
                <label>Total Expenses:</label>
                <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
            </div>
            <button onClick={calculateBalance}>Calculate Balance</button>
            <div>Your balance is ${balance}</div>
        </div>
    );
};

export default BudgetPlanner;
