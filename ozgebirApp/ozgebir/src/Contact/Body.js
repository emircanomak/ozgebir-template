import React from "react";

function Body() {
  return (
    <div className="section-body mt-4">
      <div className="container-fluid">
        <div className="tab-content">
          <div className="tab-pane active" id="Staff-all">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Adres Başlığı</th>
                      <th>Telefon No</th>
                      <th>E-mail</th>
                      <th>Adres</th>
                      <th>Düzenle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="font-15">1</div>
                      </td>
                      <td>
                      <div className="font-15">Merkez</div>
                      </td>
                      <td>
                        <span>(417) 646-5023</span>
                      </td>
                      <td>Alice@info.com</td>
                      <td>
                      Neque porro quisquam est qui dolorem ipsum quia dolor
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-icon btn-sm"
                          title="View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-icon btn-sm"
                          title="Edit"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-icon btn-sm js-sweetalert"
                          title="Delete"
                          data-type="confirm"
                        >
                          <i className="fa fa-trash-o text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
