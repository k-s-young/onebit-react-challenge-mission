import "./ContactItem.css";

export default function ContactItem({ id, name, email, onRemove }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={() => onRemove(id)}>🗑️ Remove</button>
    </div>
  );
}
