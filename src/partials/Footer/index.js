import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container mx-auto">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section about">
            <h2>Hệ thống Quản lý Tuyển sinh</h2>
            <p>
              Giải pháp thông minh giúp tối ưu quy trình tuyển sinh, hỗ trợ bạn quản lý thông tin nhanh chóng và hiệu quả.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section links">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><a href="#">Trang chủ</a></li>
              <li><a href="#">Thông tin tuyển sinh</a></li>
              <li><a href="#">Đăng ký tài khoản</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact">
            <h3>Thông tin liên hệ</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Đường ABC, Quận XYZ, TP.HCM</p>
            <p><i className="fas fa-phone-alt"></i> +84 123 456 789</p>
            <p><i className="fas fa-envelope"></i> tuyensinh@he-thong.vn</p>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Hệ thống Quản lý Tuyển sinh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
 