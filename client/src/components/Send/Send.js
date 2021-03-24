export default function Send({ onChange, onSend, value }) {
  return (
    <div>
      <form className="input-group" onSubmit={onSend}>
        <input className="form-control" value={value} onChange={onChange} />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
