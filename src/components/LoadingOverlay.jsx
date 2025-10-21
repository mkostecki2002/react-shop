function LoadingOverlay() {
  return (
    <>
      <div className="modal-backdrop show bg-dark bg-opacity-80"></div>
      <div className="position-fixed top-0 start-0 w-100 min-vh-100 d-flex align-items-center justify-content-center z-3">
        <div className="text-center">
          <div
            className="spinner-grow text-light"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Ładowanie...</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingOverlay;
