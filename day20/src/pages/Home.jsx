import "./Home.css";
import { useContext } from 'react';
import { TransactionStateContext } from '../App';
import TransactionItem from "../components/TransactionItem";

const Home = () => {
  const transactions = useContext(TransactionStateContext);

  const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));


  return (
    <div className="Home">
      <header>
        <h1>한입 가계부</h1>
        <div className="new_button">+ 작성하기</div>
      </header>
      <main className="transaction_list">
        {sortedTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </main>
    </div>
  )
}

export default Home;