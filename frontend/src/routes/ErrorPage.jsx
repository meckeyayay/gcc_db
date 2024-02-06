import React from 'react';
// import './ErrorPage.css'; 

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h2 className="error-heading">Oops! Something went wrong.</h2>
      <p className="error-message">
        We apologize for the inconvenience. Please try again later or contact support.
      </p>
      {/* You can include additional information or links here */}
    </div>
  );
};

export default ErrorPage;