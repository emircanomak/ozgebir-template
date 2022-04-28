import React from "react";

function Body() {
  return (
    <div
      className="tab-pane fade active show"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Profil</h3>
          <div className="card-options">
            <a
              href="#"
              className="card-options-fullscreen"
              data-toggle="card-fullscreen"
            >
              <i className="fe fe-maximize"></i>
            </a>
            <a
              href="#"
              className="card-options-remove"
              data-toggle="card-remove"
            >
              <i className="fe fe-x"></i>
            </a>
            <div className="item-action dropdown ml-2">
              <a href="#" data-toggle="dropdown">
                <i className="fe fe-more-vertical"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-eye"></i> View Details{" "}
                </a>
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-share-alt"></i> Share{" "}
                </a>
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-cloud-download"></i>{" "}
                  Download
                </a>
                <div className="dropdown-divider"></div>
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-copy"></i> Copy to
                </a>
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-folder"></i> Move to
                </a>
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-edit"></i> Rename
                </a>
                <a href="javascript:void(0)" className="dropdown-item">
                  <i className="dropdown-icon fa fa-trash"></i> Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body form-horizontal">
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Kullanıcı Tipi <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <div className="form-group">
                <select className="form-control">
                  <option selected="selected">--Kullanıcı Tipi Seçiniz--</option>
                  <option>Yönetici</option>
                  <option>Fizyoterapist</option>
                  <option>Özel Eğitim</option>
                  <option>Dil Konuşma Terapisti</option>
                  <option>Psikolog</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Adı <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Soyadı <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              E-mail <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Şifre <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="password" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Telefon No <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="phoneNumber" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Telefon No 2 (Acil) <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="phoneNumber" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Adres <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
                  <div className="col-sm-3 col-form-label">
                    <label>Cinsiyet</label>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">Kadın</label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">Erkek</label>
                    </div>
                  </div>
                </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
             Doğum Tarihi <span className="text-danger">*</span>
            </label>
            <div className="col-md-7">
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="card-footer text-right">
          <button type="submit" className="btn btn-primary">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
