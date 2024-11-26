import React, { useState } from 'react';

const ExpenseTracker = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        setExpenses([...expenses, { description, amount }]);
        setDescription('');
        setAmount('');
    };

    return (
        <div>
            <h2>Expense Tracker</h2>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button onClick={addExpense}>Add Expense</button>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense.description}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseTracker;
