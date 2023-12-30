export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <span className="title">{header ? header : "Header"}</span>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <p>Footer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
