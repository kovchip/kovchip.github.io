import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BudgetPlanner from './components/BudgetPlanner';
import LoanCalculator from './components/LoanCalculator';
import ExpenseTracker from './components/ExpenseTracker';
import Login from './components/Login';
import './style.css';

const App = () => (
    <Router>
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="/budget-planner">Budget Planner</a>
                <a href="/loan-calculator">Loan Calculator</a>
                <a href="/expense-tracker">Expense Tracker</a>
                <a href="/login">Login</a>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/budget-planner" component={BudgetPlanner} />
                <Route path="/loan-calculator" component={LoanCalculator} />
                <Route path="/expense-tracker" component={ExpenseTracker} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    </Router>
);

export default App;
