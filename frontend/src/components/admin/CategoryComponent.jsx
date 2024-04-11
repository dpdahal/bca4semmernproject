import React,{useEffect,useState} from 'react';
import API from '../../API';

export default function CategoryComponent() {
  const [category, setCategory] = useState([]);
  const [name,setName]=useState('');
  const insertCategory = (e) => {
    e.preventDefault();
    let data={name:name};
    API.post('/category',data).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    API.get('/category').then(res => {
      setCategory(res.data);
    }).catch(err => {
      console.log(err);
    })
  },[]);
  return (
    <div>
      <h1>Category</h1>
      <form onSubmit={insertCategory}>
        <div className="form-group mb-3 mt-3">
          <label htmlFor="">Category Name</label>
          <input type="text" className="form-control" 
          value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <button className="btn btn-primary">Add Category</button>
        </div>
      </form>
      
      <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S.n</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {category && category.map((cat,index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{cat.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
