import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Insert from './components/Insert';
import Table from './components/Table';

function App() { 

  const [data, setData] = useState((localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []))
  const [emode, setEmode] = useState(false);
  const [edata, setEdata] = useState({});
 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(data))
  }, [data])

  const handleEdit =  (value) => {
     setEmode(true);
     setEdata(value);

  }
  const handleDelete=(id)=>{
    setData(data.filter((data) => data.id !== id))
  }
  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-1/4 p-3 '>
         
            <Insert data={data} 
            setEmode={setEmode}
             setData={setData} 
             edata={edata} 
             emode={emode} 
             setEdata={setEdata} /> 
       
        </div>
        <div className='w-3/4 p-3'>
          <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
