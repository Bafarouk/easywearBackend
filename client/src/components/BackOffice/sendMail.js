import React from "react";
const SendMail = () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row justify-content-md-center">
          <div className="col-md-12 col-lg-8">
            <h1 className="h2 mb-4">Submit issue</h1>
            <label>Describe the issue in detail</label>
            <div className="form-group">
              <textarea id="editor" defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SendMail;
