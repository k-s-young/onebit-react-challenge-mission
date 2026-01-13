import './App.css'
import { useReducer, createContext, useRef, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import EditTransaction from "./pages/EditTransaction";


const mockData = [
  {
    id: 0,
    name: "마라탕 & 꿔바로우",
    amount: 59000,
    type: "expense",
    category: "🍚 식비",
    date: new Date().getTime() + 1,
  },
  {
    id: 1,
    name: "월세",
    amount: 500000,
    type: "expense",
    category: "🏠 생활",
    date: new Date().getTime() + 2,
  },
  {
    id: 2,
    name: "월급",
    amount: 3500000,
    type: "income",
    category: "🏢 급여",
    date: new Date().getTime() + 3,
  },
];

function reducer(state, action) {
  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((transaction) => 
        String(transaction.id) === String(action.data.id) ? action.data : transaction
      );
    case 'DELETE':
      return state.filter((transaction) => String(transaction.id) !== String(action.data.id));
    default:
      return state;
  }
}

export const TransactionStateContext = createContext();
export const TransactionDispatchContext = createContext();

function App() {
  const [transactions, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreateTransaction = useCallback((name, amount, type, category, date) => {
    dispatch({ 
      type: 'CREATE', 
      data: {
        id: idRef.current++,
        name, amount, type, category, date,
      }
    });
  }, []);

  const onUpdateTransaction = useCallback((id, name, amount, type, category, date) => {
    dispatch({ 
      type: 'UPDATE', 
      data: { 
        id, name, amount, type, category, date,
      }
    });
  }, []);

  const onDeleteTransaction = useCallback((id) => {
    dispatch({ type: 'DELETE', id });
  }, []); 

  const memoizedDispatch = useMemo(() => {
    return {
      onCreateTransaction,
      onUpdateTransaction,
      onDeleteTransaction,
    }
  }, []);

  return (
    <TransactionStateContext.Provider value={transactions}>
      <TransactionDispatchContext.Provider value={memoizedDispatch}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-transaction" element={<NewTransaction />} />
          <Route path="/edit-transaction/:id" element={<EditTransaction />} />
        </Routes>
      </TransactionDispatchContext.Provider>
    </TransactionStateContext.Provider>
  )
}

export default App
