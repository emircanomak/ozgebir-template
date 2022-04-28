import React from "react";

function Body() {
  return (
    <div className="container-fluid">
      <div className="tab-content">
        <div className="tab-pane active show" id="Company_Settings">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Kullanıcı Ekle</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>
                        Kullanıcı Tipi <span className="text-danger">*</span>
                      </label>

                      <div className="form-group">
                        <select className="form-control">
                          <option selected="selected">
                            --Kullanıcı Tipi Seçiniz--
                          </option>
                          <option>Yönetici</option>
                          <option>Eğitmen</option>
                          <option>Fizyoterapist</option>
                          <option>Öğrenci</option>
                          <option>Dil Konuşma Terapisti</option>
                          <option>Psikolog</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Adı</label>
                      <input
                        className="form-control"
                        placeholder="Şeyma"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Soyad</label>
                      <input
                        className="form-control"
                        placeholder="KAYA"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Şifre</label>
                      <input
                        className="form-control"
                        placeholder="******"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>
                        Telefon No <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        placeholder="+1 882-635-7531"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>
                        Telefon No 2 <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        placeholder="+1 882-635-7531"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Adres</label>
                      <textarea
                        className="form-control"
                        placeholder="44 Shirley Ave. West Chicago, IL 60185"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="seymakaya@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Doğum Tarihi</label>
                      <div className="input-group">
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label>Anne Adı</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label>Baba Adı</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-3">
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
