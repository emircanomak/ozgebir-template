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
                                    <th>Bölüm</th>
                                    <th>Eğitmen</th>
                                    <th>Tarih</th>
                                    <th>Saat</th>
                                    <th>Açıklama</th>
                                    <th>Düzenle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Fizyoterapist</td>
                                    <td>Emmett L Johnson</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Özel Eğitim</td>
                                    <td>Corrine M Johnson</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Dil Konuşma Terapisti</td>
                                    <td>Gladys J Smith</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Psikolog</td>
                                    <td>Gladys J Smith</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Fizyoterapist</td>
                                    <td>Patricia Smith</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Özel Eğitim</td>
                                    <td>Patricia Smith</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Dil Konuşma Terapisti</td>
                                    <td>Danny M Johnson</td>
                                    <td>15/05/2022</td>
                                    <td>10.40</td>
                                    <td>lorem</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                    </td>
                                </tr>
                                <button type="button" className="btn btn-info">Randevu ekle</button>
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
