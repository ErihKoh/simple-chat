import "./Message.css";

export default function Message({ item, currentUser }) {
  const classMessage =
    item.user === currentUser ? "alert alert-primary" : "alert alert-dark";
  return (
    <div>
      <div className="message-container">
        <span className={classMessage}>
          {item.user}: {item.text}
        </span>
      </div>
    </div>
  );
}
