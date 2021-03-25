import {Link} from '@reach/router';
import {useState, useEffect} from 'react';
import Axios from 'axios';
// import AuthorForm from '../components/AuthorForm';

const Main = props => {
    const [authors, setAuthors] = useState(false);

    const [toggle,setToggle] = useState(false);

useEffect (() => {
  Axios.get("http://localhost:8000/api/authors")
      .then(res => setAuthors(res.data.results))
      .catch(err => console.log(err))

}, [toggle])

const handleDelete = id => {
  Axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(res => setToggle(!toggle))
      .catch(err => console.log(err))
}

  return(
    authors ?
    <div className='container col-7'>
      <Link to='/new'>Add an author</Link>
      <h6 className="text-left">We have quotes by:</h6>
      <table className='table col-12 mx-auto table-bordered text-center'>
        <thead>
          <tr>
            <td>Author </td>
            <td colSpan='2'>Actions Available</td>
          </tr>
        </thead>
        <tbody>
          {
            authors.map((a,i) => {
              return(
                <tr key={i}>
                  <td>{a.name}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/edit/${a._id}`}>Edit</Link>
                  </td>
                  <td><button onClick={() => handleDelete(a._id)}>
                    Delete</button>
                  </td>
                </tr>
              ) 
            })
          }
        </tbody>
      </table>
    </div> :
    <h3>Loading...</h3>
  )
}

export default Main;