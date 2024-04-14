import React, { useEffect, useState } from 'react';
import API from '../../API';
export default function AddNewsComponent() {
  const [categoryId,setCategoryId]=useState("")
  const [title,setTitle]=useState("");
  const [slug,setSlug]=useState("");
  const [summary,setSummary]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [category, setCategory] = useState([]);
  const getCategory=()=>{
    API.get('/category').then(res => {
      setCategory(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    getCategory();
      },[]);

  const insertNews =(e)=>{
    e.preventDefault();
    let data=new FormData();
    data.append('category',categoryId);
    data.append('title',title);
    data.append('slug',slug);
    data.append('summary',summary);
    data.append('description',description);
    data.append('image',image);

  }

  return (
    <div>
      <h1>Add News</h1>
      <form action="" onSubmit={insetNews}>
        <div className="form-group mb-3">
          <label htmlFor="">Category</label>
          <select name="" onChange={(e)=>setCategoryId(e.target.value)} id="" className='form-control'>
            {category && category.map((cat,index) => (
              <option key={index} value={cat._id}>{cat.name}</option>
            ))}       
           </select>
        </div>
        <div className="form-group mb-3 mt-3">
          <label htmlFor="title">Title</label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="form-group mb-3 mt-3">
          <label htmlFor="slug">Slug</label>
          <input type="text" onChange={(e)=>setSlug(e.target.value)} className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Summary</label>
          <textarea className="form-control" onChange={(e)=>setSummary(e.target.value)}
           rows="5"></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Description</label>
          <textarea className="form-control"
          onChange={(e)=>setDescription(e.target.value)}
          rows="5"></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Image</label>
          <input type="file"
          onChange={(e)=>setImage(e.target.files[0])}          
          className="form-control" />
        </div>
        <div className="form-group mb-3">
          <button className="btn btn-primary">Add News</button>
        </div>
      </form>

    </div>
  )
}
