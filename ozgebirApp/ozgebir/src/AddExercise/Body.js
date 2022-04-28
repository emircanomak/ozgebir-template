import React from "react";

function Body() {
  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-pane active show" id="Company_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Egzersiz Ekle</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Egzersiz Adı</label>
                      <div className="form-group">
                        <select className="form-control">
                          <option selected="selected">
                            --Egzersiz Seçiniz--
                          </option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Bölüm</label>
                      <div className="form-group">
                        <select className="form-control">
                          <option selected="selected">--Bölüm Seçiniz--</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>
                        Eğitmen Adı <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>
                        Öğrenci Adı <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Video</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-sm-12 text-right m-t-20">
                    <button type="button" className="btn btn-primary">
                      Ekle
                    </button>
                  </div>
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
