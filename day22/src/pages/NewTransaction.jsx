import TransactionEditor from "../components/TransactionEditor";
import "./NewTransaction.css";

const NewTransaction = () => {
  return (
    <div className="NewTransaction">
      <header>
        <h1>새로운 기록</h1>
      </header>
      <TransactionEditor type={"CREATE"} />
    </div>
  )
}

export default NewTransaction;