const Popup = ({ trigger, children }) => {
  return (
    trigger && (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "3",
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    )
  );
};

export default Popup;
