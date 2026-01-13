import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onRemove }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </div>
  );
}
