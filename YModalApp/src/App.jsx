import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    function handler(event) {
      if (open) {
        if (event.target === modalRef.current) {
          setOpen(false);
        }
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [open]);

  return (
    <div className="container">
      <div className="header_container">
        <h1>Users Details Modal</h1>
        <button
          onClick={() => {
            setOpen((isOpen) => !isOpen);
          }}
        >
          Open Form
        </button>
      </div>
      <Modal ref={modalRef} open={open}>
        <Form />
      </Modal>
    </div>
  );
}

export default App;
