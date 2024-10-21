import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidMessageEdit } from 'react-icons/bi';
import NavbarS from '../Main';
import axios from "axios";
export const BookRec = () => {

  const [formData, setFormData] = useState({
    bn: "", bi: "", ba: "", bs: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/bookrec"; 
      const response = await axios.post(url, formData);
      console.log("Book Record Updated:", response.data);
      alert("Book Record Updated")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("Error Book Record Updated Not Send:", error);
        alert("Book Record  Not Updated")
      }
    }
  };


  const [bookrec, setbookrec] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/bookrec'); 
        setbookrec(response.data);
      } catch (error) {
        console.error('Error fetching Book data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     <NavbarS />
        <div>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">BookRecord Box</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Hello
      Add New BookDetails 
    </div>
    <div class="card card-body mt-2">
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="col-form-label">Book Id:</label>
    <input type="text" name="bi" className="form-control" value={formData.bi} onChange={handleChange} id="bi" />
  </div>
  <div className="mb-3">
    <label className="col-form-label">Book Name:</label>
    <input type="text" name="bn" className="form-control" value={formData.bn} onChange={handleChange} id="bn" />
  </div>
  <div className="mb-3">
    <label className="col-form-label">Book Author:</label>
    <input type="text" name="ba" className="form-control" value={formData.ba} onChange={handleChange} id="ba" />
  </div>
  <div className="mb-3">
    <label className="col-form-label">Book Subject:</label>
    <input type="text" name="bs" className="form-control" value={formData.bs} onChange={handleChange} id="bs" />
  </div>
  
  {error && <div >{error}</div>}
  <button type="submit" class="btn btn-secondary">Add Record</button>
  
</form>
    </div>
    
  </div>
  </div>
</div></div>

<div className='container'>
{Array.isArray(bookrec) && bookrec.length > 0 ? (
          bookrec.map((bookrec) => (
  <div class="list-group list-group-checkable d-grid gap-2 border-0 pb-2">
    
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
    <p>Book Id:{bookrec.bi}</p>
    <hr/>
    <p>Book Name:{bookrec.bn}</p> 
    <p>Book Author:{bookrec.ba}</p>
    <p>Book Subject:{bookrec.bs}</p>
    </label>

   
  </div>
   ))
   ) : (
     <p>No Book Record found.</p>
   )}
</div>

<div class="position-relative">
<div class="position-absolute bottom-0 end-0 mx-3">
<Link  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<div>
    
<BiSolidMessageEdit style={{ fontSize: '35px', color: '#3C4142' }} />
     </div>
</Link>
</div>
</div>
        </div>
  )
}


export default BookRec;