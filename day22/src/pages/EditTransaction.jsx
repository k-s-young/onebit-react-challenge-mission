import "./EditTransaction.css";
import TransactionEditor from "../components/TransactionEditor";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TransactionStateContext } from '../App';

const EditTransaction = () => {
  const { id } = useParams();
  const transactions = useContext(TransactionStateContext);
  const initData = transactions.find((transaction) => transaction.id === Number(id));

  return (
    <div className="EditTransaction">
      <header>
        <h1>기록 수정하기</h1>
      </header>
      <TransactionEditor initData={initData} type="EDIT" />
    </div>
  )
}

export default EditTransaction;