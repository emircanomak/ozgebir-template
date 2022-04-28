import React from "react";

function Body() {
  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-pane active show" id="Company_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Medya Ekle</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Medya Başlığı</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Açıklma</label>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
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
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Ekleme Tarihi</label>
                      <div className="input-group">
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 ">
                    <div className="form-group">
                      <label>Kayıtlı Öğrenci Sayısı</label>
                      <input className="form-control" type="number" />
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
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Eğitmen</label>
                      <div className="form-group">
                        <select className="form-control">
                          <option selected="selected">--Eğitmen Seçiniz--</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                          <option>Lorem ipsum</option>
                        </select>
                      </div>
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
