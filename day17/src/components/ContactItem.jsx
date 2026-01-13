import "./ContactItem.css";
import { memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactItem({ id, name, email }) {
  const { onRemove } = useContext(ContactDispatchContext);
  
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={() => onRemove(id)}>🗑️ Remove</button>
    </div>
  );
}

const MemoizedContactItem = memo(ContactItem);
export default MemoizedContactItem;
