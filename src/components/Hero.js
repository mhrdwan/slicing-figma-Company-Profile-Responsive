import bg from '../assets/img/bg.png'
import layer from '../assets/img/layer.png'
import '../App'

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6">
            <h1 className='hero-font'>Membantu Temukan Rumah Impian.</h1>
            <p className='p-hero'>
              <span className="fw-bold "> Rumah Impian </span>
              hadir untuk temukan rumah terbaik untukmu, untuk di jual ataupun
              di sewa dengan sumber terpercaya.
            </p>
            <button className="button-lg-primary">Temukan Rumah</button>
            {/* <a href="#">
            <i className="bi bi-arrow-right-circle arrow"></i>
            </a> */}
           
          </div>
        </div>
      </div>
      <div className="asu">
            <img className='layer position-absolute start-0 bottom-0'  src={layer} alt="" />
            <img className='position-absolute end-0 bottom-0' src={bg} alt="" />
            </div>
      </div>
    </>
  );
};

export default Hero;
