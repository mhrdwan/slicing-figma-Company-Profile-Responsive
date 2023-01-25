import imgf1 from '../assets/img/imgf1.png'
import imgf2 from '../assets/img/imgf2.png'
import imgf3 from '../assets/img/imgf3.png'
import imgf4 from '../assets/img/imgf4.png'
import akanan from '../assets/img/arahkanan.png'
import akiri from '../assets/img/arahkiri.png'


const Fiturrumah = () => {

    return(
       <section className='fitur overflow-hidden'>
        <div className="container ">
            <div className="row">
                <div className="col-lg-9 col-md-12 text-center text-lg-start">
                <h2>Fitur Rumah</h2>
               
                </div>
                <div className="col-lg-3 col-md-12 ">
                <button className="btn-fitur">Lihat Semua..</button>
                </div>
            </div>
       
        <div className="container position-relative mt-3">
            <div className="row">
                <div className="col-12 d-flex justify-content-start">
                    <div className="card-fiture me-3 position-relative">
                        <img src={imgf1} alt="" />
                        <div className="overlay position-absolute end-0 start-0 top-0 bottom-0">
                            <div className='position-absolute top-50 start-50 translate-middle text-center w-100'>
                                <h5>Kamar Tidur</h5>
                                <span>Rumah minimalist Type-A2</span>
                                <h6>IDR.200jt</h6>
                                <button>Lihat Rumah</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-fiture me-3 position-relative">
                        <img src={imgf1} alt="" />
                        <div className="overlay position-absolute end-0 start-0 top-0 bottom-0">
                            <div className='position-absolute top-50 start-50 translate-middle text-center w-100'>
                                <h5>Kamar Tidur</h5>
                                <span>Rumah minimalist Type-A2</span>
                                <h6>IDR.200jt</h6>
                                <button>Lihat Rumah</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-fiture me-3 position-relative">
                        <img src={imgf1} alt="" />
                        <div className="overlay position-absolute end-0 start-0 top-0 bottom-0">
                            <div className='position-absolute top-50 start-50 translate-middle text-center w-100'>
                                <h5>Kamar Tidur</h5>
                                <span>Rumah minimalist Type-A2</span>
                                <h6>IDR.200jt</h6>
                                <button>Lihat Rumah</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-fiture me-3 position-relative">
                        <img src={imgf1} alt="" />
                        <div className="overlay position-absolute end-0 start-0 top-0 bottom-0">
                            <div className='position-absolute top-50 start-50 translate-middle text-center w-100'>
                                <h5>Kamar Tidur</h5>
                                <span>Rumah minimalist Type-A2</span>
                                <h6>IDR.200jt</h6>
                                <button>Lihat Rumah</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='kanan position-absolute end-0 top-50 translate-middle-y'><img src={akanan} alt="" /></button>
            <button className='kiri position-absolute start-0 top-50 translate-middle-y'><img src={akiri} alt="" /></button>
            </div>
        </div>
        
        </section>
   


    )
}

export default Fiturrumah;