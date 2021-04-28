import React from "react";
import * as Icon from "react-feather";
const DashBoard = () => {
  return (
    <>
      <div style={{ marginLeft: 280 }} className='page-wrapper'>
        <div class='page-body-wrapper'>
          <div className='page-body'>
            {/* Container-fluid starts*/}
            <div className='container-fluid'>
              <div className='page-header'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='page-header-left'>
                      <h3>
                        Dashboard
                        <small>Multikart Admin panel</small>
                      </h3>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <ol className='breadcrumb pull-right'>
                      <li className='breadcrumb-item'>
                        <a href='index.html'>
                          <i data-feather='home' />
                        </a>
                      </li>
                      <li className='breadcrumb-item active'>Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* Container-fluid Ends*/}
            {/* Container-fluid starts*/}
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card o-hidden widget-cards'>
                    <div className='bg-warning card-body'>
                      <div className='media static-top-widget row'>
                        <div className='icons-widgets col-4'>
                          <div className='align-self-center text-center'>
                            <i
                              data-feather='navigation'
                              className='font-warning'
                            />
                          </div>
                        </div>
                        <div className='media-body col-8'>
                          <span className='m-0'>Earnings</span>
                          <h3 className='mb-0'>
                            $ <span className='counter'>6659</span>
                            <small> This Month</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card o-hidden  widget-cards'>
                    <div className='bg-secondary card-body'>
                      <div className='media static-top-widget row'>
                        <div className='icons-widgets col-4'>
                          <div className='align-self-center text-center'>
                            <Icon.Box />
                          </div>
                        </div>
                        <div className='media-body col-8'>
                          <span className='m-0'>Products</span>
                          <h3 className='mb-0'>
                            $ <span className='counter'>9856</span>
                            <small> This Month</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card o-hidden widget-cards'>
                    <div className='bg-primary card-body'>
                      <div className='media static-top-widget row'>
                        <div className='icons-widgets col-4'>
                          <div className='align-self-center text-center'>
                            <i
                              data-feather='message-square'
                              className='font-primary'
                            />
                          </div>
                        </div>
                        <div className='media-body col-8'>
                          <span className='m-0'>Messages</span>
                          <h3 className='mb-0'>
                            $ <span className='counter'>893</span>
                            <small> This Month</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card o-hidden widget-cards'>
                    <div className='bg-danger card-body'>
                      <div className='media static-top-widget row'>
                        <div className='icons-widgets col-4'>
                          <div className='align-self-center text-center'>
                            <i data-feather='users' className='font-danger' />
                          </div>
                        </div>
                        <div className='media-body col-8'>
                          <span className='m-0'>New Vendors</span>
                          <h3 className='mb-0'>
                            $ <span className='counter'>45631</span>
                            <small> This Month</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 xl-100'>
                  <div className='card'>
                    <div className='card-header'>
                      <h5>Market Value</h5>
                      <div className='card-header-right'>
                        <ul className='list-unstyled card-option'>
                          <li>
                            <i className='icofont icofont-simple-left' />
                          </li>
                          <li>
                            <i className='view-html fa fa-code' />
                          </li>
                          <li>
                            <i className='icofont icofont-maximize full-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-minus minimize-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-refresh reload-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-error close-card' />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='market-chart' />
                      <div className='code-box-copy'>
                        <button
                          className='code-box-copy__btn btn-clipboard'
                          data-clipboard-target='#example-head'
                          title='Copy'
                        >
                          <i className='icofont icofont-copy-alt' />
                        </button>
                        <pre>
                          <code className='language-html' id='example-head'>
                            &lt;!-- Cod Box Copy begin --&gt;{"\n"}&lt;div
                            class="market-chart"&gt;&lt;/div&gt;{"\n"}&lt;!--
                            Cod Box Copy end --&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 xl-100'>
                  <div className='card'>
                    <div className='card-header'>
                      <h5>Latest Orders</h5>
                      <div className='card-header-right'>
                        <ul className='list-unstyled card-option'>
                          <li>
                            <i className='icofont icofont-simple-left' />
                          </li>
                          <li>
                            <i className='view-html fa fa-code' />
                          </li>
                          <li>
                            <i className='icofont icofont-maximize full-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-minus minimize-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-refresh reload-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-error close-card' />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='user-status table-responsive latest-order-table'>
                        <table className='table table-bordernone'>
                          <thead>
                            <tr>
                              <th scope='col'>Order ID</th>
                              <th scope='col'>Order Total</th>
                              <th scope='col'>Payment Method</th>
                              <th scope='col'>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td className='digits'>$120.00</td>
                              <td className='font-danger'>Bank Transfers</td>
                              <td className='digits'>On Way</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td className='digits'>$90.00</td>
                              <td className='font-secondary'>Ewallets</td>
                              <td className='digits'>Delivered</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td className='digits'>$240.00</td>
                              <td className='font-warning'>Cash</td>
                              <td className='digits'>Delivered</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td className='digits'>$120.00</td>
                              <td className='font-primary'>Direct Deposit</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td className='digits'>$50.00</td>
                              <td className='font-primary'>Bank Transfers</td>
                              <td className='digits'>Delivered</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href='order.html' className='btn btn-primary'>
                          View All Orders
                        </a>
                      </div>
                      <div className='code-box-copy'>
                        <button
                          className='code-box-copy__btn btn-clipboard'
                          data-clipboard-target='#example-head1'
                          title
                          data-original-title='Copy'
                        >
                          <i className='icofont icofont-copy-alt' />
                        </button>
                        <pre className=' language-html'>
                          <code className=' language-html' id='example-head1'>
                            {"\n"}&lt;div class="user-status table-responsive
                            latest-order-table"&gt;{"\n"}
                            {"    "}&lt;table class="table table-bordernone"&gt;
                            {"\n"}
                            {"        "}&lt;thead&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;th scope="col"&gt;Order
                            ID&lt;/th&gt;{"\n"}
                            {"                "}&lt;th scope="col"&gt;Order
                            Total&lt;/th&gt;{"\n"}
                            {"                "}&lt;th scope="col"&gt;Payment
                            Method&lt;/th&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Status&lt;/th&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"        "}&lt;/thead&gt;{"\n"}
                            {"        "}&lt;tbody&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;1&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$120.00&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="font-secondary"&gt;Bank Transfers&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;Delivered&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;2&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$90.00&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="font-secondary"&gt;Ewallets&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;Delivered&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;3&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$240.00&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="font-secondary"&gt;Cash&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;Delivered&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;4&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$120.00&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="font-primary"&gt;Direct Deposit&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;Delivered&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;5&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$50.00&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="font-primary"&gt;Bank Transfers&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;Delivered&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"        "}&lt;/tbody&gt;{"\n"}
                            {"    "}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}
                            {"                                    "}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card order-graph sales-carousel'>
                    <div className='card-header'>
                      <h6>Total Sales</h6>
                      <div className='row'>
                        <div className='col-6'>
                          <div className='small-chartjs'>
                            <div
                              className='flot-chart-placeholder'
                              id='simple-line-chart-sparkline-3'
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='value-graph'>
                            <h3>
                              42%{" "}
                              <span>
                                <i className='fa fa-angle-up font-primary' />
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='media'>
                        <div className='media-body'>
                          <span>Sales Last Month</span>
                          <h2 className='mb-0'>9054</h2>
                          <p>
                            0.25%{" "}
                            <span>
                              <i className='fa fa-angle-up' />
                            </span>
                          </p>
                          <h5 className='f-w-600'>Gross sales of August</h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting
                          </p>
                        </div>
                        <div className='bg-primary b-r-8'>
                          <div className='small-box'>
                            <i data-feather='briefcase' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card order-graph sales-carousel'>
                    <div className='card-header'>
                      <h6>Total purchase</h6>
                      <div className='row'>
                        <div className='col-6'>
                          <div className='small-chartjs'>
                            <div
                              className='flot-chart-placeholder'
                              id='simple-line-chart-sparkline'
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='value-graph'>
                            <h3>
                              20%{" "}
                              <span>
                                <i className='fa fa-angle-up font-secondary' />
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='media'>
                        <div className='media-body'>
                          <span>Monthly purchase</span>
                          <h2 className='mb-0'>2154</h2>
                          <p>
                            0.13%{" "}
                            <span>
                              <i className='fa fa-angle-up' />
                            </span>
                          </p>
                          <h5 className='f-w-600'>Avg Gross purchase</h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting
                          </p>
                        </div>
                        <div className='bg-secondary b-r-8'>
                          <div className='small-box'>
                            <i data-feather='credit-card' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card order-graph sales-carousel'>
                    <div className='card-header'>
                      <h6>Total cash transaction</h6>
                      <div className='row'>
                        <div className='col-6'>
                          <div className='small-chartjs'>
                            <div
                              className='flot-chart-placeholder'
                              id='simple-line-chart-sparkline-2'
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='value-graph'>
                            <h3>
                              28%{" "}
                              <span>
                                <i className='fa fa-angle-up font-warning' />
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='media'>
                        <div className='media-body'>
                          <span>Cash on hand</span>
                          <h2 className='mb-0'>4672</h2>
                          <p>
                            0.8%{" "}
                            <span>
                              <i className='fa fa-angle-up' />
                            </span>
                          </p>
                          <h5 className='f-w-600'>Details about cash</h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting
                          </p>
                        </div>
                        <div className='bg-warning b-r-8'>
                          <div className='small-box'>
                            <i data-feather='shopping-cart' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 xl-50'>
                  <div className='card order-graph sales-carousel'>
                    <div className='card-header'>
                      <h6>Daily Deposits</h6>
                      <div className='row'>
                        <div className='col-6'>
                          <div className='small-chartjs'>
                            <div
                              className='flot-chart-placeholder'
                              id='simple-line-chart-sparkline-1'
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='value-graph'>
                            <h3>
                              75%{" "}
                              <span>
                                <i className='fa fa-angle-up font-danger' />
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='media'>
                        <div className='media-body'>
                          <span>Security Deposits</span>
                          <h2 className='mb-0'>0782</h2>
                          <p>
                            0.25%{" "}
                            <span>
                              <i className='fa fa-angle-up' />
                            </span>
                          </p>
                          <h5 className='f-w-600'>Gross sales of June</h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting
                          </p>
                        </div>
                        <div className='bg-danger b-r-8'>
                          <div className='small-box'>
                            <i data-feather='calendar' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='card'>
                    <div className='card-header'>
                      <h5>Buy / Sell</h5>
                      <div className='card-header-right'>
                        <ul className='list-unstyled card-option'>
                          <li>
                            <i className='icofont icofont-simple-left' />
                          </li>
                          <li>
                            <i className='view-html fa fa-code' />
                          </li>
                          <li>
                            <i className='icofont icofont-maximize full-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-minus minimize-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-refresh reload-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-error close-card' />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='card-body sell-graph'>
                      <canvas id='myGraph' />
                      <div className='code-box-copy'>
                        <button
                          className='code-box-copy__btn btn-clipboard'
                          data-clipboard-target='#example-head3'
                          title
                          data-original-title='Copy'
                        >
                          <i className='icofont icofont-copy-alt' />
                        </button>
                        <pre className=' language-html'>
                          <code className=' language-html' id='example-head3'>
                            &lt;div class="card-body sell-graph"&gt;{"\n"}
                            {"   "}&lt;canvas id="myGraph"&gt;&lt;/canvas&gt;
                            {"\n"}
                            &lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 xl-100'>
                  <div className='card height-equal'>
                    <div className='card-header'>
                      <h5>Goods return</h5>
                      <div className='card-header-right'>
                        <ul className='list-unstyled card-option'>
                          <li>
                            <i className='icofont icofont-simple-left' />
                          </li>
                          <li>
                            <i className='view-html fa fa-code' />
                          </li>
                          <li>
                            <i className='icofont icofont-maximize full-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-minus minimize-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-refresh reload-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-error close-card' />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='user-status table-responsive products-table'>
                        <table className='table table-bordernone mb-0'>
                          <thead>
                            <tr>
                              <th scope='col'>Details</th>
                              <th scope='col'>Quantity</th>
                              <th scope='col'>Status</th>
                              <th scope='col'>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Simply dummy text of the printing</td>
                              <td className='digits'>1</td>
                              <td className='font-primary'>Pending</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>Long established</td>
                              <td className='digits'>5</td>
                              <td className='font-secondary'>Cancle</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>sometimes by accident</td>
                              <td className='digits'>10</td>
                              <td className='font-secondary'>Cancle</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>Classical Latin literature</td>
                              <td className='digits'>9</td>
                              <td className='font-primary'>Return</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>keep the site on the Internet</td>
                              <td className='digits'>8</td>
                              <td className='font-primary'>Pending</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>Molestiae consequatur</td>
                              <td className='digits'>3</td>
                              <td className='font-secondary'>Cancle</td>
                              <td className='digits'>$6523</td>
                            </tr>
                            <tr>
                              <td>Pain can procure</td>
                              <td className='digits'>8</td>
                              <td className='font-primary'>Return</td>
                              <td className='digits'>$6523</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className='code-box-copy'>
                        <button
                          className='code-box-copy__btn btn-clipboard'
                          data-clipboard-target='#example-head4'
                          title
                          data-original-title='Copy'
                        >
                          <i className='icofont icofont-copy-alt' />
                        </button>
                        <pre className=' language-html'>
                          <code className=' language-html' id='example-head4'>
                            {"\n"}&lt;div class="user-status table-responsive
                            products-table"&gt;{"\n"}
                            {"    "}&lt;table class="table table-bordernone
                            mb-0"&gt;
                            {"\n"}
                            {"        "}&lt;thead&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Details&lt;/th&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Quantity&lt;/th&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Status&lt;/th&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Price&lt;/th&gt;
                            {"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"        "}&lt;/thead&gt;{"\n"}
                            {"        "}&lt;tbody&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;Simply dummy text of
                            the printing&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;1&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-primary"&gt;Pending&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;Long
                            established&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;5&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-secondary"&gt;Cancle&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;sometimes by
                            accident&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;10&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-secondary"&gt;Cancle&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;Classical Latin
                            literature&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;9&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-primary"&gt;Return&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;keep the site on the
                            Internet&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;8&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-primary"&gt;Pending&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;Molestiae
                            consequatur&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;3&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-secondary"&gt;Cancle&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td&gt;Pain can
                            procure&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;8&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td
                            class="font-primary"&gt;Return&lt;/td&gt;{"\n"}
                            {"                "}&lt;td
                            class="digits"&gt;$6523&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"        "}&lt;/tbody&gt;{"\n"}
                            {"    "}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}
                            {"                                    "}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 xl-100'>
                  <div className='card height-equal'>
                    <div className='card-header'>
                      <h5>Empolyee Status</h5>
                      <div className='card-header-right'>
                        <ul className='list-unstyled card-option'>
                          <li>
                            <i className='icofont icofont-simple-left' />
                          </li>
                          <li>
                            <i className='view-html fa fa-code' />
                          </li>
                          <li>
                            <i className='icofont icofont-maximize full-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-minus minimize-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-refresh reload-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-error close-card' />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='user-status table-responsive products-table'>
                        <table className='table table-bordernone mb-0'>
                          <thead>
                            <tr>
                              <th scope='col'>Name</th>
                              <th scope='col'>Designation</th>
                              <th scope='col'>Skill Level</th>
                              <th scope='col'>Experience</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='bd-t-none u-s-tb'>
                                <div className='align-middle image-sm-size'>
                                  <img
                                    className='img-radius align-top m-r-15 rounded-circle blur-up lazyloaded'
                                    src='/assetsBack/images/dashboard/user2.jpg'
                                    alt=''
                                    data-original-title
                                    title
                                  />
                                  <div className='d-inline-block'>
                                    <h6>
                                      John Deo{" "}
                                      <span className='text-muted digits'>
                                        (14+ Online)
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Designer</td>
                              <td>
                                <div className='progress-showcase'>
                                  <div
                                    className='progress'
                                    style={{ height: 8 }}
                                  >
                                    <div
                                      className='progress-bar bg-primary'
                                      role='progressbar'
                                      style={{ width: "30%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className='digits'>2 Year</td>
                            </tr>
                            <tr>
                              <td className='bd-t-none u-s-tb'>
                                <div className='align-middle image-sm-size'>
                                  <img
                                    className='img-radius align-top m-r-15 rounded-circle blur-up lazyloaded'
                                    src='/assetsBack/images/dashboard/user1.jpg'
                                    alt=''
                                    data-original-title
                                    title
                                  />
                                  <div className='d-inline-block'>
                                    <h6>
                                      Holio Mako{" "}
                                      <span className='text-muted digits'>
                                        (250+ Online)
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Developer</td>
                              <td>
                                <div className='progress-showcase'>
                                  <div
                                    className='progress'
                                    style={{ height: 8 }}
                                  >
                                    <div
                                      className='progress-bar bg-secondary'
                                      role='progressbar'
                                      style={{ width: "70%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className='digits'>3 Year</td>
                            </tr>
                            <tr>
                              <td className='bd-t-none u-s-tb'>
                                <div className='align-middle image-sm-size'>
                                  <img
                                    className='img-radius align-top m-r-15 rounded-circle blur-up lazyloaded'
                                    src='/assetsBack/images/dashboard/man.png'
                                    alt=''
                                    data-original-title
                                    title
                                  />
                                  <div className='d-inline-block'>
                                    <h6>
                                      Mohsib lara
                                      <span className='text-muted digits'>
                                        (99+ Online)
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Tester</td>
                              <td>
                                <div className='progress-showcase'>
                                  <div
                                    className='progress'
                                    style={{ height: 8 }}
                                  >
                                    <div
                                      className='progress-bar bg-primary'
                                      role='progressbar'
                                      style={{ width: "60%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className='digits'>5 Month</td>
                            </tr>
                            <tr>
                              <td className='bd-t-none u-s-tb'>
                                <div className='align-middle image-sm-size'>
                                  <img
                                    className='img-radius align-top m-r-15 rounded-circle blur-up lazyloaded'
                                    src='/assetsBack/images/dashboard/user.png'
                                    alt=''
                                    data-original-title
                                    title
                                  />
                                  <div className='d-inline-block'>
                                    <h6>
                                      Hileri Soli{" "}
                                      <span className='text-muted digits'>
                                        (150+ Online)
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Designer</td>
                              <td>
                                <div className='progress-showcase'>
                                  <div
                                    className='progress'
                                    style={{ height: 8 }}
                                  >
                                    <div
                                      className='progress-bar bg-secondary'
                                      role='progressbar'
                                      style={{ width: "30%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className='digits'>3 Month</td>
                            </tr>
                            <tr>
                              <td className='bd-t-none u-s-tb'>
                                <div className='align-middle image-sm-size'>
                                  <img
                                    className='img-radius align-top m-r-15 rounded-circle blur-up lazyloaded'
                                    src='/assetsBack/images/dashboard/designer.jpg'
                                    alt=''
                                    data-original-title
                                    title
                                  />
                                  <div className='d-inline-block'>
                                    <h6>
                                      Pusiz bia{" "}
                                      <span className='text-muted digits'>
                                        (14+ Online)
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Designer</td>
                              <td>
                                <div className='progress-showcase'>
                                  <div
                                    className='progress'
                                    style={{ height: 8 }}
                                  >
                                    <div
                                      className='progress-bar bg-primary'
                                      role='progressbar'
                                      style={{ width: "90%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className='digits'>5 Year</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className='code-box-copy'>
                        <button
                          className='code-box-copy__btn btn-clipboard'
                          data-clipboard-target='#example-head5'
                          title
                          data-original-title='Copy'
                        >
                          <i className='icofont icofont-copy-alt' />
                        </button>
                        <pre className=' language-html'>
                          <code className=' language-html' id='example-head5'>
                            {"\n"}&lt;div class="user-status table-responsive
                            products-table"&gt;{"\n"}
                            {"    "}&lt;table class="table table-bordernone
                            mb-0"&gt;
                            {"\n"}
                            {"        "}&lt;thead&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Name&lt;/th&gt;
                            {"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Designation&lt;/th&gt;{"\n"}
                            {"                "}&lt;th scope="col"&gt;Skill
                            Level&lt;/th&gt;{"\n"}
                            {"                "}&lt;th
                            scope="col"&gt;Experience&lt;/th&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"        "}&lt;/thead&gt;{"\n"}
                            {"        "}&lt;tbody&gt;{"\n"}
                            {"                "}&lt;tr&gt;{"\n"}
                            {"                    "}&lt;td class="bd-t-none
                            u-s-tb"&gt;{"\n"}
                            {"                        "}&lt;div
                            class="align-middle image-sm-size"&gt;&lt;img
                            class="img-radius align-top m-r-15 rounded-circle
                            blur-up lazyloaded"
                            src="/assetsBack/images/dashboard/user2.jpg"
                            data-original-title="" title=""&gt;{"\n"}
                            {"                        "}&lt;div
                            class="d-inline-block"&gt;{"\n"}
                            {"                        "}&lt;h6&gt;John Deo
                            &lt;span class="text-muted digits"&gt;(14+
                            Online)&lt;/span&gt;&lt;/h6&gt;{"\n"}
                            {"                        "}&lt;/div&gt;{"\n"}
                            {"                        "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/td&gt;{"\n"}
                            {"                    "}
                            &lt;td&gt;Designer&lt;/td&gt;
                            {"\n"}
                            {"                    "}&lt;td&gt;{"\n"}
                            {"                        "}&lt;div
                            class="progress-showcase"&gt;{"\n"}
                            {"                        "}&lt;div class="progress"
                            style="height: 8px;"&gt;{"\n"}
                            {"                        "}&lt;div
                            class="progress-bar bg-primary" role="progressbar"
                            style="width: 30%" aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"&gt;&lt;/div&gt;
                            {"\n"}
                            {"                        "}&lt;/div&gt;{"\n"}
                            {"                        "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/td&gt;{"\n"}
                            {"                    "}&lt;td class="digits"&gt;2
                            Year&lt;/td&gt;{"\n"}
                            {"                "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td class="bd-t-none
                            u-s-tb"&gt;
                            {"\n"}
                            {"                    "}&lt;div class="align-middle
                            image-sm-size"&gt;&lt;img class="img-radius
                            align-top m-r-15 rounded-circle blur-up lazyloaded"
                            src="/assetsBack/images/dashboard/user1.jpg"
                            data-original-title="" title=""&gt;{"\n"}
                            {"                    "}&lt;div
                            class="d-inline-block"&gt;
                            {"\n"}
                            {"                    "}&lt;h6&gt;Holio Mako
                            &lt;span class="text-muted digits"&gt;(250+
                            Online)&lt;/span&gt;&lt;/h6&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td&gt;Developer&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td&gt;{"\n"}
                            {"                    "}&lt;div
                            class="progress-showcase"&gt;{"\n"}
                            {"                    "}&lt;div class="progress"
                            style="height: 8px;"&gt;{"\n"}
                            {"                    "}&lt;div class="progress-bar
                            bg-secondary" role="progressbar" style="width: 70%"
                            aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100"&gt;&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td class="digits"&gt;3
                            Year&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td class="bd-t-none
                            u-s-tb"&gt;
                            {"\n"}
                            {"                    "}&lt;div class="align-middle
                            image-sm-size"&gt;&lt;img class="img-radius
                            align-top m-r-15 rounded-circle blur-up lazyloaded"
                            src="/assetsBack/images/dashboard/man.png"
                            data-original-title="" title=""&gt;{"\n"}
                            {"                    "}&lt;div
                            class="d-inline-block"&gt;
                            {"\n"}
                            {"                    "}&lt;h6&gt;Mohsib
                            lara&lt;span class="text-muted digits"&gt;(99+
                            Online)&lt;/span&gt;&lt;/h6&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td&gt;Tester&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td&gt;{"\n"}
                            {"                    "}&lt;div
                            class="progress-showcase"&gt;{"\n"}
                            {"                    "}&lt;div class="progress"
                            style="height: 8px;"&gt;{"\n"}
                            {"                    "}&lt;div class="progress-bar
                            bg-primary" role="progressbar" style="width: 60%"
                            aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100"&gt;&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td class="digits"&gt;5
                            Month&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td class="bd-t-none
                            u-s-tb"&gt;
                            {"\n"}
                            {"                    "}&lt;div class="align-middle
                            image-sm-size"&gt;&lt;img class="img-radius
                            align-top m-r-15 rounded-circle blur-up lazyloaded"
                            src="/assetsBack/images/dashboard/user.png"
                            data-original-title="" title=""&gt;{"\n"}
                            {"                    "}&lt;div
                            class="d-inline-block"&gt;
                            {"\n"}
                            {"                    "}&lt;h6&gt;Hileri Soli
                            &lt;span class="text-muted digits"&gt;(150+
                            Online)&lt;/span&gt;&lt;/h6&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td&gt;Designer&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td&gt;{"\n"}
                            {"                    "}&lt;div
                            class="progress-showcase"&gt;{"\n"}
                            {"                    "}&lt;div class="progress"
                            style="height: 8px;"&gt;{"\n"}
                            {"                    "}&lt;div class="progress-bar
                            bg-secondary" role="progressbar" style="width: 30%"
                            aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100"&gt;&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td class="digits"&gt;3
                            Month&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"            "}&lt;tr&gt;{"\n"}
                            {"                "}&lt;td class="bd-t-none
                            u-s-tb"&gt;
                            {"\n"}
                            {"                    "}&lt;div class="align-middle
                            image-sm-size"&gt;&lt;img class="img-radius
                            align-top m-r-15 rounded-circle blur-up lazyloaded"
                            src="/assetsBack/images/dashboard/designer.jpg"
                            data-original-title="" title=""&gt;{"\n"}
                            {"                    "}&lt;div
                            class="d-inline-block"&gt;
                            {"\n"}
                            {"                    "}&lt;h6&gt;Pusiz bia &lt;span
                            class="text-muted digits"&gt;(14+
                            Online)&lt;/span&gt;&lt;/h6&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td&gt;Designer&lt;/td&gt;
                            {"\n"}
                            {"                "}&lt;td&gt;{"\n"}
                            {"                    "}&lt;div
                            class="progress-showcase"&gt;{"\n"}
                            {"                    "}&lt;div class="progress"
                            style="height: 8px;"&gt;{"\n"}
                            {"                    "}&lt;div class="progress-bar
                            bg-primary" role="progressbar" style="width: 90%"
                            aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100"&gt;&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                    "}&lt;/div&gt;{"\n"}
                            {"                "}&lt;/td&gt;{"\n"}
                            {"                "}&lt;td class="digits"&gt;5
                            Year&lt;/td&gt;{"\n"}
                            {"            "}&lt;/tr&gt;{"\n"}
                            {"        "}&lt;/tbody&gt;{"\n"}
                            {"    "}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}
                            {"                                    "}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='card'>
                    <div className='card-header'>
                      <h5>Sales Status</h5>
                      <div className='card-header-right'>
                        <ul className='list-unstyled card-option'>
                          <li>
                            <i className='icofont icofont-simple-left' />
                          </li>
                          <li>
                            <i className='view-html fa fa-code' />
                          </li>
                          <li>
                            <i className='icofont icofont-maximize full-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-minus minimize-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-refresh reload-card' />
                          </li>
                          <li>
                            <i className='icofont icofont-error close-card' />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-xl-3 col-sm-6 xl-50'>
                          <div className='order-graph'>
                            <h6>Orders By Location</h6>
                            <div className='chart-block chart-vertical-center'>
                              <canvas id='myDoughnutGraph' />
                            </div>
                            <div className='order-graph-bottom'>
                              <div className='media'>
                                <div className='order-color-primary' />
                                <div className='media-body'>
                                  <h6 className='mb-0'>
                                    Saint Lucia{" "}
                                    <span className='pull-right'>$157</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-color-secondary' />
                                <div className='media-body'>
                                  <h6 className='mb-0'>
                                    Kenya{" "}
                                    <span className='pull-right'>$347</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-color-danger' />
                                <div className='media-body'>
                                  <h6 className='mb-0'>
                                    Liberia
                                    <span className='pull-right'>$468</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-color-warning' />
                                <div className='media-body'>
                                  <h6 className='mb-0'>
                                    Christmas Island
                                    <span className='pull-right'>$742</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-color-success' />
                                <div className='media-body'>
                                  <h6 className='mb-0'>
                                    Saint Helena{" "}
                                    <span className='pull-right'>$647</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3 col-sm-6 xl-50'>
                          <div className='order-graph sm-order-space'>
                            <h6>Sales By Location</h6>
                            <div className='peity-chart-dashboard text-center'>
                              <span className='pie-colours-1'>4,7,6,5</span>
                            </div>
                            <div className='order-graph-bottom sales-location'>
                              <div className='media'>
                                <div className='order-shape-primary' />
                                <div className='media-body'>
                                  <h6 className='mb-0 me-0'>
                                    Germany{" "}
                                    <span className='pull-right'>25%</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-shape-secondary' />
                                <div className='media-body'>
                                  <h6 className='mb-0 me-0'>
                                    Brasil{" "}
                                    <span className='pull-right'>10%</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-shape-danger' />
                                <div className='media-body'>
                                  <h6 className='mb-0 me-0'>
                                    United Kingdom
                                    <span className='pull-right'>34%</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-shape-warning' />
                                <div className='media-body'>
                                  <h6 className='mb-0 me-0'>
                                    Australia
                                    <span className='pull-right'>5%</span>
                                  </h6>
                                </div>
                              </div>
                              <div className='media'>
                                <div className='order-shape-success' />
                                <div className='media-body'>
                                  <h6 className='mb-0 me-0'>
                                    Canada{" "}
                                    <span className='pull-right'>25%</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-6 xl-100'>
                          <div className='order-graph xl-space'>
                            <h6>Revenue for last month</h6>
                            <div className='ct-4 flot-chart-container' />
                          </div>
                        </div>
                      </div>
                      <div className='code-box-copy'>
                        <button
                          className='code-box-copy__btn btn-clipboard'
                          data-clipboard-target='#example-head2'
                          title
                          data-original-title='Copy'
                        >
                          <i className='icofont icofont-copy-alt' />
                        </button>
                        <pre className=' language-html'>
                          <code className=' language-html' id='example-head2'>
                            &lt;div class="row"&gt;{"\n"}
                            {"   "}&lt;div class="col-xl-3 col-sm-6 xl-50"&gt;
                            {"\n"}
                            {"      "}&lt;div class="order-graph"&gt;{"\n"}
                            {"         "}&lt;h6&gt;Orders By Location&lt;/h6&gt;
                            {"\n"}
                            {"         "}&lt;div class="chart-block
                            chart-vertical-center"&gt;{"\n"}
                            {"            "}&lt;canvas
                            id="myDoughnutGraph"&gt;&lt;/canvas&gt;{"\n"}
                            {"         "}&lt;/div&gt;{"\n"}
                            {"         "}&lt;div class="order-graph-bottom"&gt;
                            {"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-color-primary"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6 class="mb-0"&gt;Saint
                            Lucia &lt;span
                            class="pull-right"&gt;$157&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-color-secondary"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6 class="mb-0"&gt;Kenya
                            &lt;span
                            class="pull-right"&gt;$347&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-color-danger"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6
                            class="mb-0"&gt;Liberia&lt;span
                            class="pull-right"&gt;$468&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-color-warning"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6
                            class="mb-0"&gt;Christmas Island&lt;span
                            class="pull-right"&gt;$742&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-color-success"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6 class="mb-0"&gt;Saint
                            Helena &lt;span
                            class="pull-right"&gt;$647&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"         "}&lt;/div&gt;{"\n"}
                            {"      "}&lt;/div&gt;{"\n"}
                            {"   "}&lt;/div&gt;{"\n"}
                            {"   "}&lt;div class="col-xl-3 col-sm-6 xl-50"&gt;
                            {"\n"}
                            {"      "}&lt;div class="order-graph
                            sm-order-space"&gt;
                            {"\n"}
                            {"         "}&lt;h6&gt;Sales By Location&lt;/h6&gt;
                            {"\n"}
                            {"         "}&lt;div class="peity-chart-dashboard
                            text-center"&gt;{"\n"}
                            {"            "}&lt;span
                            class="pie-colours-1"&gt;4,7,6,5&lt;/span&gt;{"\n"}
                            {"         "}&lt;/div&gt;{"\n"}
                            {"         "}&lt;div class="order-graph-bottom
                            sales-location"&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-shape-primary"&gt;&lt;/div&gt;{"\n"}
                            {"                  "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                     "}&lt;h6 class="mb-0
                            me-0"&gt;Germany &lt;span
                            class="pull-right"&gt;25%&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"                  "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-shape-secondary"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6 class="mb-0
                            me-0"&gt;Brasil &lt;span
                            class="pull-right"&gt;10%&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-shape-danger"&gt;&lt;/div&gt;{"\n"}
                            {"                  "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                     "}&lt;h6 class="mb-0
                            me-0"&gt;United Kingdom&lt;span
                            class="pull-right"&gt;34%&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"                  "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-shape-warning"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6 class="mb-0
                            me-0"&gt;Australia&lt;span
                            class="pull-right"&gt;5%&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;div class="media"&gt;{"\n"}
                            {"               "}&lt;div
                            class="order-shape-success"&gt;&lt;/div&gt;{"\n"}
                            {"               "}&lt;div class="media-body"&gt;
                            {"\n"}
                            {"                  "}&lt;h6 class="mb-0
                            me-0"&gt;Canada &lt;span
                            class="pull-right"&gt;25%&lt;/span&gt;&lt;/h6&gt;
                            {"\n"}
                            {"               "}&lt;/div&gt;{"\n"}
                            {"            "}&lt;/div&gt;{"\n"}
                            {"         "}&lt;/div&gt;{"\n"}
                            {"      "}&lt;/div&gt;{"\n"}
                            {"   "}&lt;/div&gt;{"\n"}
                            {"   "}&lt;div class="col-xl-6 xl-100"&gt;{"\n"}
                            {"      "}&lt;div class="order-graph xl-space"&gt;
                            {"\n"}
                            {"         "}&lt;h6&gt;Revenue for last
                            month&lt;/h6&gt;
                            {"\n"}
                            {"         "}&lt;div class="ct-4
                            flot-chart-container"&gt;&lt;/div&gt;{"\n"}
                            {"      "}&lt;/div&gt;{"\n"}
                            {"   "}&lt;/div&gt;{"\n"}&lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container-fluid Ends*/}
        </div>
      </div>
    </>
  );
};
export default DashBoard;
