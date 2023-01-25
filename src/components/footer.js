import navbar from '../assets/img/navbrand.png'


const Footer = () => {
    return (

        <div className='footer d-flex align-items-center '>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
        <img src={navbar} alt="" />

                    </div>
                    <div className="col-md-5">

                        <a href=".hero">Beranda</a>
                    </div>
                </div>
                <div className="row position-absolute copyright">
                    <div className="col-12">
                        <p>
                        Copyright bg Creative Academy All Right Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        </div>
    )
}

export default Footer ;