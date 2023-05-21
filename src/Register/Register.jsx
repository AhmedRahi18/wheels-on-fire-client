import { useContext, useState } from 'react';
import { FaGoogle,  FaUserPlus } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useTitle from '../hooks/useTitle';

const Register = () => {
    const {createUser,googleSignIn} = useContext(AuthContext)
    const [error,setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    useTitle('Register')

    const from = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,name,photo)
        
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUser(result.user,name,photo)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registered Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from,{replace: true})
            form.reset()
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })

    }

    const handleGoogle = ()=>{
        googleSignIn()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registered Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from,{replace: true})
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }

    const updateUser = (user,name,photo) => {
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log('user Update')
        })
        .catch(error => {
            setError(error.message)
        })
    }


  return (
    <div className="hero bg-zinc-300 py-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h2 className='text-5xl mb-10 text-center text-orange-600 font-bold'>Register Here</h2>
          <img src="https://media.istockphoto.com/id/1133565424/photo/muscle-car-with-colored-pattern-of-flame-blue.jpg?s=612x612&w=0&k=20&c=0TEAUPsWe-d5I8h7ngwAQimJW9kls-yEZz4L7c2TrgQ=" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-orange-600 bg-orange-100">
          <div className="card-body">
            <div className='flex items-center'>
            <FaUserPlus size={25}></FaUserPlus> 
            <h2 className="text-2xl font-semibold font-serif ms-2 ">Register</h2>
            </div>
            <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl 
                 font-serif">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Name"
                required
                className="input input-bordered bg-slate-200 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl 
                 font-serif">Photo URL</span>
              </label>
              <input
                type="text"
                name='photo'
                placeholder="Photo URL"
                required
                className="input input-bordered bg-slate-200 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl 
                 font-serif">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Email"
                required
                className="input input-bordered bg-slate-200 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl 
                 font-serif">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                required
                className="input input-bordered bg-slate-200 font-semibold"
              />
            </div>
            <p className='text-red-500 mt-2'>{error}</p>
            <div className="form-control mt-6">
              <input className="btn px-10 bg-orange-600 text-white font-bold
           border-none rounded hover:bg-orange-500" type="submit" value="Register"/>
            </div>
            <p className='text-center mt-3 font-serif'>Already have an account? <Link to="/login" className='text-orange-500'>Login</Link> </p>
            <div className="divider">OR</div>
            <div onClick={handleGoogle} className='flex items-center rounded-xl  bg-white'>
            <FaGoogle className='text-blue-500 ms-16'></FaGoogle>
            <p className=" py-2 pe-2
            text-center font-semibold"> Continue with Google</p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
