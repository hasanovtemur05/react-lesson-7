import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Index = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const handleChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if (form.username == "admin" && form.password == 123) {
            navigate('/about')
        }
        else{
            alert ("xato")
        }
    }

  return (
    <div className='container'>
        <div className="row mt-3">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h1 className='text-center'>Login</h1>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit}>
                            <input type="text" placeholder='username' onChange={handleChange} className='form-control my-2'/>
                            <input type="password" placeholder='password' onChange={handleChange} className='form-control my-2'/>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success' type='submit' form='form'>save</button>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index