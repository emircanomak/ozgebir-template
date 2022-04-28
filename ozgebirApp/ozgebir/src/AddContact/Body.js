import React from "react";

function Body() {
  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-pane active show" id="Company_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">İletişim Ekle</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Adres Başlığı</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Telefon</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>E-mail</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Adres</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>

                </div>
             
               
                <div className="row">
                  <div className="col-sm-12 text-right m-t-20">
                    <button type="button" className="btn btn-primary">
                      Ekle
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Localization">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Basic Settings</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Default Country</label>
                      <select className="form-control">
                        <option selected="selected">USA</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date Format</label>
                      <select className="form-control">
                        <option value="d/m/Y">15/05/2016</option>
                        <option value="d.m.Y">15.05.2016</option>
                        <option value="d-m-Y">15-05-2016</option>
                        <option value="m/d/Y">05/15/2016</option>
                        <option value="Y/m/d">2016/05/15</option>
                        <option value="Y-m-d">2016-05-15</option>
                        <option value="M d Y">May 15 2016</option>
                        <option selected="selected" value="d M Y">
                          15 May 2016
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Timezone</label>
                      <select className="form-control">
                        <option>10:45am Chicago (GMT-6)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Default Language</label>
                      <select className="form-control">
                        <option selected="selected">English</option>
                        <option>Russian</option>
                        <option>Arabic</option>
                        <option>French</option>
                        <option>Hindi</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Currency Code</label>
                      <select className="form-control">
                        <option selected="selected">USD</option>
                        <option>Pound</option>
                        <option>EURO</option>
                        <option>Ringgit</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Currency Symbol</label>
                      <input className="form-control" value="$" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 text-right m-t-20">
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Roles_Permissions">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Roles &amp; Permissions</h3>
            </div>
            <div className="card-body">
              <ul className="list-group mb-3 tp-setting">
                <li className="list-group-item">
                  Anyone seeing my profile page
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone send me a message
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone posts a comment on my post
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone invite me to group
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked=""
                      />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
              </ul>
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th>Read</th>
                      <th>Write</th>
                      <th>Create</th>
                      <th>Delete</th>
                      <th>Import</th>
                      <th>Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Employee</td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Holidays</td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Leave Request</td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Events</td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked=""
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                      <td>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Email_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">SMTP Email Settings</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="fancy-radio custom-color-green">
                    <input
                      name="gender3"
                      value="PHP Mail"
                      type="radio"
                      checked=""
                    />
                    <span>
                      <i></i>PHP Mail
                    </span>
                  </label>
                  <label className="fancy-radio custom-color-green">
                    <input name="gender3" value="SMTP" type="radio" />
                    <span>
                      <i></i>SMTP
                    </span>
                  </label>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email From Address</label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Emails From Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>SMTP HOST</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>SMTP USER</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>SMTP PASSWORD</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>SMTP PORT</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>SMTP Security</label>
                      <select className="form-control">
                        <option>None</option>
                        <option>SSL</option>
                        <option>TLS</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>SMTP Authentication Domain</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 m-t-20 text-right">
                    <button type="button" className="btn btn-primary">
                      SAVE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Invoice_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Invoice Settings</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Invoice prefix</label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="dropify-wrapper">
                      <div className="dropify-message">
                        <span className="file-icon"></span>{" "}
                        <p>Drag and drop a file here or click</p>
                        <p className="dropify-error">
                          Ooops, something wrong appended.
                        </p>
                      </div>
                      <div className="dropify-loader"></div>
                      <div className="dropify-errors-container">
                        <ul></ul>
                      </div>
                      <input type="file" className="dropify" />
                      <button type="button" className="dropify-clear">
                        Remove
                      </button>
                      <div className="dropify-preview">
                        <span className="dropify-render"></span>
                        <div className="dropify-infos">
                          <div className="dropify-infos-inner">
                            <p className="dropify-filename">
                              <span className="file-icon"></span>{" "}
                              <span className="dropify-filename-inner"></span>
                            </p>
                            <p className="dropify-infos-message">
                              Drag and drop or click to replace
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <small id="fileHelp" className="form-text text-muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </small>
                  </div>
                  <div className="col-sm-12 m-t-20 text-right">
                    <button type="button" className="btn btn-primary">
                      SAVE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Notifications">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Notifications Settings</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  Anyone send me a message
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone seeing my profile page
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked=""
                      />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone posts a comment on my post
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked=""
                      />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone send me a message
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  Anyone seeing my profile page
                  <div className="float-right">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">&nbsp;</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Change_Password">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Change Password</h3>
            </div>
            <div className="card-body">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="louispierce"
                      disabled=""
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      value="louis.info@yourdomain.com"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  /
                  <hr />
                  <h6>Change Password</h6>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
                <div className="col-sm-12 m-t-20 text-right">
                  <button type="button" className="btn btn-primary">
                    SAVE
                  </button>{" "}
                  &nbsp;
                  <button type="button" className="btn btn-default">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
