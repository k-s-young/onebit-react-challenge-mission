import "./TransactionEditor.css";
import { useContext, useState, useEffect } from 'react';
import { TransactionDispatchContext } from '../App';
import { useNavigate } from 'react-router-dom';

const categories = ["🍚 식비", "💧 구독", "🏠 생활", "🏢 급여", "💰 금융"];

export default function TransactionEditor({type, initData}) {
  const { onCreateTransaction, onUpdateTransaction } = useContext(TransactionDispatchContext);
  const nav = useNavigate();
  const [input, setInput] = useState({
    type: "expense",
    name: "",
    amount: 0,
    category: categories[0],
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if(type === "EDIT" && initData) {
      setInput({
        ...initData,
        date: new Date(initData.date).toISOString().split("T")[0],
      });
    }
  }, [type, initData]);

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    if (!input.name || !input.amount || !input.category || !input.date) {
      alert("모든 필드를 입력해주세요");
      return;
    }

    if(type === "NEW") {
      onCreateTransaction(input.name, input.amount, input.type, input.category, input.date);
    } else {
      onUpdateTransaction(initData.id, input.name, input.amount, input.type, input.category, input.date);
    }
    nav("/", { replace: true });
  }

  return (
    <div className="TransactionEditor">
      <div>
        <div className="description">분류</div>
        <select 
          name="type" 
          value={input.type}
          onChange={onChangeInput}
        >
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </div>
      <div>
        <div className="description">지출/수입 이름</div>
        <input
          type="text"
          id="name"
          placeholder="지출 & 수입 이름을 입력하세요 ..."
          name="name"
          value={input.name}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <div className="description">지출/수입 금액</div>
        <input
          type="number"
          id="amount"
          placeholder="금액을 입력하세요"
          name="amount"
          value={input.amount}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <div className="description">카테고리</div>
        <select
          name="category"
          value={input.category}
          onChange={onChangeInput}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="description">날짜</div>
        <input
          type="date"
          id="date"
          name="date"
          value={input.date}
          onChange={onChangeInput} 
        />
      </div>
      <div className="button_container">
        <button className="submit_button" onClick={onSubmit}>저장</button>
        <button className="cancel_button" onClick={() => nav(-1)}>취소</button>
      </div>
    </div>
  );
}