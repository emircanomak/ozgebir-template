import React from "react";

function Body() {
  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-pane active show" id="Company_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Servis Ekle</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Plaka</label>
                      <input className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Bölge</label>
                      <input className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>
                        Giriş Saati <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="time" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>
                        Çıkış SAati <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="time" />
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
      </div>
    </div>
  );
}

export default Body;
