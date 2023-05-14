import { useContext } from "react";

import { ClientStateContext } from "../../ClientStateContext";

export const Modal = ({ content }) => {
  const { globalClientState, setGlobalClientState } =
    useContext(ClientStateContext);

  return (
    <>
      {globalClientState?.isModalActive ? (
        <div className="modal">
          <div className="modal__content">{content}</div>
        </div>
      ) : null}
    </>
  );
};
