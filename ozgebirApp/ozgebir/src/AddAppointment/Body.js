import React from "react";

function Body() {
  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-pane active show" id="Company_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Randevu Ekle</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Bölüm</label>
                      <div className="form-group">
                        <select className="form-control">
                          <option selected="selected">--Bölüm Seçiniz--</option>
                          <option>Fizyoterapist</option>
                          <option>Özel Eğitim</option>
                          <option>Dil Konuşma Terapisti</option>
                          <option>Psikolog</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>
                        Adı <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>
                        Soyadı <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" value="" />
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>
                        Telefon No <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value="+1 882-635-7531"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Tarih</label>
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Saat</label>
                      <input className="form-control" type="time" />
                    </div>
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
