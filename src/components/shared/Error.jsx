export const Error = () => {
  return (
    <div className="error">
      <img
        src="../../../src/assets/icons/crud/error.png"
        className="error__icon"
        alt="Error"
      />
      <h1 className="error__message">
        There was an issue with loading data. Please try again later.
      </h1>
    </div>
  );
};
