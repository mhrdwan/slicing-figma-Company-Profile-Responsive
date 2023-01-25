import rumah1 from "../assets/img/rumah1.png";
import rumah2 from "../assets/img/rumah2.png";
import rumah3 from "../assets/img/rumah3.png";
import rumah4 from "../assets/img/rumah4.png";
import rumah5 from "../assets/img/rumah5.png";
import rumah6 from "../assets/img/rumah6.png";
import bed from "../assets/img/bedicon.png";
import bath from "../assets/img/bathicon.png";
import globe from "../assets/img/globeicon.png";
import '../Card.css'

const Rekomendasi = () => {
  return (
    <div className="rekomendasi ">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h5>Rekomendasi Rumah Untuk Mu</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card rumah p-2">
              <img src={rumah1} alt="" />
              <div className="card-body">
                <h4>IDR.200.000.000</h4>
                <p>
                  Jl. Soekarno Hatta No.1 <br />{" "}
                  <span className="text-danger">Sewa</span>
                </p>
              </div>
              <div className="card-fasilitas d-flex justify-content-between mt-2">
                <span>
                  <img src={bed} alt="" />3
                <p>Kamar Tidur</p>
                </span>
                <span>
                  <img src={bath} alt="" />4
                <p>Kamar Mandi</p>
                </span>
                <span>
                  <img src={globe} alt="" />350m
                <p>Luas Rumah</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card rumah p-2">
              <img src={rumah2} alt="" />
              <div className="card-body">
                <h4>IDR.200.000.000</h4>
                <p>
                  Jl. Soekarno Hatta No.1 <br />{" "}
                  <span className="text-danger">Sewa</span>
                </p>
              </div>
              <div className="card-fasilitas d-flex justify-content-between mt-2">
                <span>
                  <img src={bed} alt="" />3
                <p>Kamar Tidur</p>
                </span>
                <span>
                  <img src={bath} alt="" />4
                <p>Kamar Mandi</p>
                </span>
                <span>
                  <img src={globe} alt="" />350m
                <p>Luas Rumah</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card rumah p-2">
              <img src={rumah3} alt="" />
              <div className="card-body">
                <h4>IDR.200.000.000</h4>
                <p>
                  Jl. Soekarno Hatta No.1 <br />{" "}
                  <span className="text-danger">Sewa</span>
                </p>
              </div>
              <div className="card-fasilitas d-flex justify-content-between mt-2">
                <span>
                  <img src={bed} alt="" />3
                <p>Kamar Tidur</p>
                </span>
                <span>
                  <img src={bath} alt="" />4
                <p>Kamar Mandi</p>
                </span>
                <span>
                  <img src={globe} alt="" />350m
                <p>Luas Rumah</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card rumah p-2">
              <img src={rumah4} alt="" />
              <div className="card-body">
                <h4>IDR.200.000.000</h4>
                <p>
                  Jl. Soekarno Hatta No.1 <br />{" "}
                  <span className="text-danger">Sewa</span>
                </p>
              </div>
              <div className="card-fasilitas d-flex justify-content-between mt-2">
                <span>
                  <img src={bed} alt="" />3
                <p>Kamar Tidur</p>
                </span>
                <span>
                  <img src={bath} alt="" />4
                <p>Kamar Mandi</p>
                </span>
                <span>
                  <img src={globe} alt="" />350m
                <p>Luas Rumah</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card rumah p-2">
              <img src={rumah5} alt="" />
              <div className="card-body">
                <h4>IDR.200.000.000</h4>
                <p>
                  Jl. Soekarno Hatta No.1 <br />{" "}
                  <span className="text-danger">Sewa</span>
                </p>
              </div>
              <div className="card-fasilitas d-flex justify-content-between mt-2">
                <span>
                  <img src={bed} alt="" />3
                <p>Kamar Tidur</p>
                </span>
                <span>
                  <img src={bath} alt="" />4
                <p>Kamar Mandi</p>
                </span>
                <span>
                  <img src={globe} alt="" />350m
                <p>Luas Rumah</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-evenly">
            <div className="card rumah p-2">
              <img src={rumah6} alt="" />
              <div className="card-body">
                <h4>IDR.200.000.000</h4>
                <p>
                  Jl. Soekarno Hatta No.1 <br />{" "}
                  <span className="text-danger">Sewa</span>
                </p>
              </div>
              <div className="card-fasilitas d-flex justify-content-between mt-2">
                <span>
                  <img src={bed} alt="" />3
                <p>Kamar Tidur</p>
                </span>
                <span>
                  <img src={bath} alt="" />4
                <p>Kamar Mandi</p>
                </span>
                <span>
                  <img src={globe} alt="" />350m
                <p>Luas Rumah</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">Lihat Lainnya</p>
    </div>
  );
};

export default Rekomendasi;
