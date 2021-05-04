import React from "react";
const Events = () => {
  return (
    <>
      <div style={{ marginLeft: 250 }} className="page-wrapper">
        <div class="page-body-wrapper">
          <div className="page-body"></div>
          <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-lg-6">
                  <div className="page-header-left">
                    <h3>
                      Events
                      <small>Multikart Admin panel</small>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ol className="breadcrumb pull-right">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </a>
                    </li>
                    <li className="breadcrumb-item">DashBoard</li>
                    <li className="breadcrumb-item active">Events</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* write ur code here guys*/}
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
