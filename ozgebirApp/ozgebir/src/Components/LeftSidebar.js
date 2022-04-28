import React from "react";

function LeftSidebar() {
  return (
    <div id="left-sidebar" className="sidebar">
      <h5 className="brand-name">
        ÖZGEBİR
        <a href="#" className="menu_option float-right">
          <i
            className="icon-grid font-16"
            data-toggle="tooltip"
            data-placement="left"
            title="Grid & List Toggle"
          ></i>
        </a>
      </h5>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#menu-uni">
            Kullanıcı
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu-admin">
            Admin
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div
          className="tab-pane fade show active"
          id="menu-uni"
          role="tabpanel"
        >
          <nav className="sidebar-nav">
            <ul className="metismenu">
              <li className="active">
                <a href="#">
                  <i className="fa fa-home"></i>
                  <span>Anasayfa</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users"></i>
                  <span>Kullanıcılar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar"></i>
                  <span>Randevular</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar-check-o"></i>
                  <span>Egzersizler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-play"></i>
                  <span>Medya Havuzu</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar-check-o"></i>
                  <span>Ekipmanlar ve Öneriler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book"></i>
                  <span>Ders Programı</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bus"></i>
                  <span>Servisler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-question"></i>
                  <span>S.S.S</span>
                </a>
              </li>
              <li>
                <a href="holiday.html">
                  <i className="fa fa-phone"></i>
                  <span>İletişim</span>
                </a>
              </li>
              
            </ul>
          </nav>
        </div>
        <div className="tab-pane fade" id="menu-admin" role="tabpanel">
          <nav className="sidebar-nav">
            <ul className="metismenu">
              <li>
                <a href="#">
                  <i className="fa fa-home"></i>
                  <span>Anasayfa</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users"></i>
                  <span>Kullanıcılar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar"></i>
                  <span>Randevular</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar-check-o"></i>
                  <span>Egzersizler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-play"></i>
                  <span>Medya Havuzu</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar-check-o"></i>
                  <span>Ekipmanlar ve Öneriler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book"></i>
                  <span>Ders Programı</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-money"></i>
                  <span>Ödemeler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bus"></i>
                  <span>Servisler</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-question"></i>
                  <span>S.S.S</span>
                </a>
              </li>
              <li>
                <a href="setting.html">
                  <i className="fa fa-phone"></i>
                  <span>İletişim</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
