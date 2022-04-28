import React from "react";

function Header() {
  return (
    <div className="section-body" id="page_top">
      <div className="container-fluid">
        <div className="page-header">
          <div className="left">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What you want to find"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="notification d-flex">
              <div className="dropdown d-flex">
                <a
                  className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-envelope"></i>
                  <span className="badge badge-success nav-unread"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <ul className="right_chat list-unstyled w350 p-0">
                    <li className="online">
                      <a href="#;" className="media">
                        <img
                          className="media-object"
                          src="../assets/images/xs/avatar4.jpg"
                          alt=""
                        />
                        <div className="media-body">
                          <span className="name">Donald Gardner</span>
                          <div className="message">
                            It is a long established fact that a reader
                          </div>
                          <small>11 mins ago</small>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </a>
                    </li>
                    <li className="online">
                      <a href="#;" className="media">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar5.jpg"
                          alt=""
                        />
                        <div className="media-body">
                          <span className="name">Wendy Keen</span>
                          <div className="message">
                            There are many variations of passages of Lorem Ipsum
                          </div>
                          <small>18 mins ago</small>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </a>
                    </li>
                    <li className="offline">
                      <a href="#;" className="media">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar2.jpg"
                          alt=""
                        />
                        <div className="media-body">
                          <span className="name">Matt Rosales</span>
                          <div className="message">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </div>
                          <small>27 mins ago</small>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </a>
                    </li>
                    <li className="online">
                      <a href="#;" className="media">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar3.jpg"
                          alt=""
                        />
                        <div className="media-body">
                          <span className="name">Phillip Smith</span>
                          <div className="message">
                            It has roots in a piece of classNameical Latin
                            literature from 45 BC
                          </div>
                          <small>33 mins ago</small>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-divider"></div>
                  <a
                    href="#"
                    className="dropdown-item text-center text-muted-dark readall"
                  >
                    Mark all as read
                  </a>
                </div>
              </div>
              <div className="dropdown d-flex">
                <a
                  className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-bell"></i>
                  <span className="badge badge-primary nav-unread"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <ul className="list-unstyled feeds_widget">
                    <li>
                      <div className="feeds-left">
                        <span className="avatar avatar-blue">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                      <div className="feeds-body ml-3">
                        <p className="text-muted mb-0">
                          Campaign{" "}
                          <strong className="text-blue font-weight-bold">
                            Holiday
                          </strong>{" "}
                          is nearly reach budget limit.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="feeds-left">
                        <span className="avatar avatar-green">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <div className="feeds-body ml-3">
                        <p className="text-muted mb-0">
                          New admission{" "}
                          <strong className="text-green font-weight-bold">
                            32
                          </strong>{" "}
                          in computer department.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="feeds-left">
                        <span className="avatar avatar-red">
                          <i className="fa fa-info"></i>
                        </span>
                      </div>
                      <div className="feeds-body ml-3">
                        <p className="text-muted mb-0">
                          6th sem result{" "}
                          <strong className="text-red font-weight-bold">
                            67%
                          </strong>{" "}
                          in computer department.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="feeds-left">
                        <span className="avatar avatar-azure">
                          <i className="fa fa-thumbs-o-up"></i>
                        </span>
                      </div>
                      <div className="feeds-body ml-3">
                        <p className="text-muted mb-0">
                          New Feedback{" "}
                          <strong className="text-azure font-weight-bold">
                            53
                          </strong>{" "}
                          for university assessment.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="dropdown-divider"></div>
                  <a
                    href="#"
                    className="dropdown-item text-center text-muted-dark readall"
                  >
                    Mark all as read
                  </a>
                </div>
              </div>
              <div className="dropdown d-flex">
                <a href="#" className="chip ml-3" data-toggle="dropdown">
                  <span className="avatar"></span> George
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item" href="page-profile.html">
                    <i className="dropdown-icon fe fe-user"></i> Profile
                  </a>
                  <a className="dropdown-item" href="app-setting.html">
                    <i className="dropdown-icon fe fe-settings"></i> Settings
                  </a>
                  <a className="dropdown-item" href="app-email.html">
                    <span className="float-right">
                      <span className="badge badge-primary">6</span>
                    </span>
                    <i className="dropdown-icon fe fe-mail"></i> Inbox
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-send"></i> Message
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-help-circle"></i> Need
                    help?
                  </a>
                  <a className="dropdown-item" href="login.html">
                    <i className="dropdown-icon fe fe-log-out"></i> Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
