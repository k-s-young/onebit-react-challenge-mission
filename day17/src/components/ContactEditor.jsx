import "./ContactEditor.css";
import { useState, memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext);
  
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  const onChangeContact = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    if(contact.name === '' || contact.email === '') {
      alert('이름과 이메일을 입력해주세요');
      return;
    }
    onCreate(contact.name, contact.email);
    // setContact({ name: '', email: '' });
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input 
          className="name"
          placeholder="이름 ..."
          name="name"
          value={contact.name}
          onChange={onChangeContact}
        />
        <input
          className="contact"
          placeholder="연락처(이메일) ..."
          name="email"
          value={contact.email}
          onChange={onChangeContact}
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

const MemoizedContactEditor = memo(ContactEditor);

export default MemoizedContactEditor;