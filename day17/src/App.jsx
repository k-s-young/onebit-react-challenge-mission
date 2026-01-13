import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer, useRef, useCallback } from 'react';

const mockContacts = [
  {
    id: 0,
    name: "John Doe",
    phone: "010-1234-5678",
    email: "john.doe@example.com",
  },
  {
    id: 1,
    name: "Jane Doe",
    phone: "010-1234-5679",
    email: "jane.doe@example.com",
  },
  {
    id: 2,
    name: "Jim Doe",
    phone: "010-1234-5680",
    email: "jim.doe@example.com",
  },
];

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'REMOVE':
      return state.filter((contact) => contact.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockContacts);
  const idRef = useRef(mockContacts.length);

  const onCreate = useCallback((name, email) => {
    dispatch({ 
      type: 'CREATE', 
      data: {
        id: idRef.current++,
        name, 
        email,
      }
    });
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ 
      type: 'REMOVE', 
      targetId 
    });
  }, []);
  
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onRemove={onRemove} />
      </section>
    </div>
  );
}

export default App;
