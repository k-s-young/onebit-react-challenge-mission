import TransactionEditor from "../components/TransactionEditor";
import "./NewTransaction.css";
import { useContext } from "react";
import { TransactionDispatchContext } from "../App";

const NewTransaction = () => {
  const { onCreateTransaction } = useContext(TransactionDispatchContext);
  const onSubmit = (input) => {
    const { name, amount, type, category, date } = input;
    if(name === "" || amount === 0 || category === "" || date === "") {
      alert("모든 필드를 입력해주세요");
      return;
    }
    onCreateTransaction(name, amount, type, category, date);
  }
  return (
    <div className="NewTransaction">
      <header>
        <h1>새로운 기록</h1>
      </header>
      <TransactionEditor onSubmit={onSubmit} />
    </div>
  )
}

export default NewTransaction;