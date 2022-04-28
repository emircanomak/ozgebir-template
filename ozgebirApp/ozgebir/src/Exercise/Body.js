import React from "react";
function Body() {
  return (
    <div className="section-body mt-4">
      <div className="container-fluid">
        <div className="tab-content">
          <div className="tab-pane active" id="Dep-all">
            <div className="table-responsive">
              <div className="table-responsive card">
                <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Egzersiz Adı</th>
                      <th>Bölüm</th>
                      <th>Eğitmen Adı</th>
                      <th>Öğrenci Adı</th>
                      <th>Video</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Lorem ipsum</td>
                      <td>Özel Eğitim</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="tag tag-success">İzle</span>
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
                    <tr>
                      <td>2</td>
                      <td>Lorem ipsum</td>
                      <td>Fizyoterapi</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="tag tag-success">İzle</span>
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
                    <tr>
                      <td>3</td>
                      <td>Lorem ipsum</td>
                      <td>Psikoloji</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Medya Yok</td>
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
                    <tr>
                      <td>4</td>
                      <td>Lorem ipsum</td>
                      <td>Fizyoterapi</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="tag tag-success">İzle</span>
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
                    <tr>
                      <td>5</td>
                      <td>Lorem ipsum</td>
                      <td>Özel Eğitim</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>
                        <span className="tag tag-success">İzle</span>
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
                    <tr>
                      <td>6</td>
                      <td>Lorem ipsum</td>
                      <td>Dil Konuşma</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Medya Yok</td>
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
                    <button type="button" className="btn btn-info">Egzersiz ekle</button>
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
