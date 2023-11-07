import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState } from 'react';

let num = 0;

function App() {
  const [item, setItem] = useState([]);
  const [n, setN] = useState('');
  const [ph, setPh] = useState('');
  const [ema, setEma] = useState('');
  const [update, setUpdate] = useState(null);

  const addData = () => {
    if (n && ema && ph) {
      if (update) {
        const updatedItem = item.map((data) =>
          data.id === update.id ? { ...data, name: n} : data
        );
        setItem(updatedItem);
        setUpdate(null); 
      } else {
        setItem([...item, { id: num++, name: n, email: ema, phone: ph }]);
      }
      setN('');
      setEma('');
      setPh('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <>
      <div className="app container mt-5">
        <div className="d1 md-3">
          <span>Name </span>
          <input type="text" value={n} className='form-control'
          onChange={(e) => setN(e.target.value)} />
        </div>
        <div className="d1 md-3">
          <span>Email </span>
          <input type="email" value={ema} 
          className='form-control' onChange={(e) => setEma(e.target.value)} />
        </div>
        <div className="d1 md-3">
          <span>Phone </span>
          <input type="number" className='form-control' value={ph} onChange={(e) => setPh(e.target.value)} />
        </div>
        <button className='btn btn-primary' onClick={addData}>{update ? 'Update' : 'Save'}</button>
      </div>
      <table className="table table-striped m-auto ">
        <thead className='thead-dark m-auto p-auto '>
          <tr style={{textAlign:"center"}}>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>X</th>
            <th scope='col'>UpdateName</th>
          </tr>
        </thead>
        <tbody>
          {item.map((data) => (
            <tr style={{textAlign:"center"}} key={data.id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>
                <button className=' btn btn-danger ' onClick={() => setItem(item.filter((item) => item.id !== data.id))}>X</button>
              </td>
              <td>
                <button className='btn btn-secondary  ml-2' onClick={() => setUpdate(data)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;