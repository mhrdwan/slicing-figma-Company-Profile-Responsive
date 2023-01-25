import "../App.css";
import rumah from "../assets/img/rumah.png";
import sewa from "../assets/img/sewa.png";
import beli from "../assets/img/beli.png";

const Layanan = () => {
  return (
    <div className="layanan-js">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold layanan ">Layanan kami</h1>
            <p>Rumah impian hadir menjadi solusi bagi kamu</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card text-center">
              <div className="icon-bulet position-relative mx-auto">
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={rumah}
                  alt=""
                />
              </div>
              <div className="layanan-font">
                <h5 className="fw-bold mt-4">Property Baru</h5>
                <p>
                  Rumah impian kini jadi kenyataan, Beli rumah bary dengan
                  fasilitas terbaik dengan lingkungan yang nyaman.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly ">
            <div className="card text-center">
              <div className="icon-bulet position-relative mx-auto">
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={sewa}
                  alt=""
                />
              </div>
              <div className="layanan-font">
                <h5 className="fw-bold mt-4">Sewa Rumah</h5>
                <p>
                  Sewa rumah yang indah untuk keluarga anda, pilihan terbaik
                  untuk tempat tinggal keluarga mu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-evenly">
            <div className="card text-center beli-rumah">
              <div className="icon-bulet position-relative mx-auto ">
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={beli}
                  alt=""
                />
              </div>
              <div className="layanan-font">
                <h5 className="fw-bold mt-4">Beli Rumah</h5>
                <p>
                  Beli Rumah sempurna dengan harga terbaik kualitas terjamin
                  dari sumber terpercaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
