import "./EditTransaction.css";
import TransactionEditor from "../components/TransactionEditor";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TransactionStateContext, TransactionDispatchContext } from '../App';

const EditTransaction = () => {
  const { id } = useParams();
  const transactions = useContext(TransactionStateContext);
  const { onUpdateTransaction } = useContext(TransactionDispatchContext);
  const initData = transactions.find((transaction) => transaction.id === Number(id));
  const onSubmit = (input) => {
    const { name, amount, type, category, date } = input;
    onUpdateTransaction(id, name, amount, type, category, date);
  }
  return (
    <div className="EditTransaction">
      <header>
        <h1>Edit Transaction</h1>
      </header>
      <TransactionEditor initData={initData} onSubmit={onSubmit} />
    </div>
  )
}

export default EditTransaction;