import bg3 from "../assets/img/bg3.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Konsultasi = () => {
  return (
    <div className="konsultasi">
      <div className="container-fluid overlay w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>
                Butuh Konsultasi..? Silahkan kontak kami Kami Siap Membantu
              </h3>
              <div className="kontak mb-2">
                <h6>Kontak</h6>
                <div className="mb-4">
                  <i class="bi bi-geo-alt">
                    <a href="#">
                      <span className="text-konsul">
                        {" "}
                        Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia
                      </span>
                    </a>
                  </i>
                  <br />
                  <i class="bi bi-telephone-inbound">
                    <span className="text-konsul">022-6545-2041</span>{" "}
                  </i>
                  <br />
                  <i class="bi bi-envelope">
                    <span className="text-konsul">rumahimpian@gmail.com</span>{" "}
                  </i>
                </div>
                <div className="socialmedia ">
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-twitter ms-3"></i>
                  <i class="bi bi-instagram ms-3">
                    {" "}
                    <span className="ms-4">
                      <span className="text-konsul">Rumahimpian</span>
                    </span>{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-contact w-100">
                <form>
                  <h2>ada pertanyaan..?</h2>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">
                      Masukan email anda disini...
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Pertanyaan Anda..</label>
                  </div>
                </form>
                <button type="submit" className="btn-kontak">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
