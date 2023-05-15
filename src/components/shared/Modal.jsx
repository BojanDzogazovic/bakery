import { useContext } from "react";
import ReactDOM from "react-dom";

import { ClientStateContext } from "../../ClientStateContext";

export const Modal = ({ content }) => {
  const { globalClientState } =
    useContext(ClientStateContext);

  return ReactDOM.createPortal(
    <>
      {globalClientState?.isModalActive ? (
        <div className="modal">
          <div className="modal__content">{content}</div>
        </div>
      ) : null}
    </>,
    document.getElementById("portal")
  );
};
