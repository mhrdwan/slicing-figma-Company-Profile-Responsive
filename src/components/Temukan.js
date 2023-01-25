import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import rumahicon from '../assets/img/rumahicon.png'
import uangicon from '../assets/img/uangicon.png'

const Temukan = () => {

  return (
    <div className="temukan">
      <div className="container">
        <div className="row">
          <div className="col text-start">
            <h1>Temukan Rumah Impianmu</h1>
            <div className="col text-end">
            <p className='text-end'>
              sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya{" "}
              <br />
              tersembunyi, dengan ratusan rumah untuk anda
            </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Temukan;
