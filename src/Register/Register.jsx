import { useContext, useState } from 'react';
import { FaGoogle,  FaUserPlus } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser,googleSignIn} = useContext(AuthContext)
    const [error,setError] = useState('')

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
            form.reset()
            updateUser(result.user,name,photo)
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
    <div className="hero mt-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h2 className='text-5xl mb-10 text-center text-orange-600 font-bold'>Register Here</h2>
          <img src="https://media.istockphoto.com/id/1133565424/photo/muscle-car-with-colored-pattern-of-flame-blue.jpg?s=612x612&w=0&k=20&c=0TEAUPsWe-d5I8h7ngwAQimJW9kls-yEZz4L7c2TrgQ=" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-orange-600 bg-orange-100">
          <div className="card-body">
            <div className='flex items-center'>
            <FaUserPlus size={25}></FaUserPlus> 
            <h2 className="text-2xl font-bold">Register</h2>
            </div>
            <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name='photo'
                placeholder="Photo URL"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                required
                className="input input-bordered"
              />
            </div>
            <p className='text-red-500 mt-2'>{error}</p>
            <div className="form-control mt-6">
              <input className="btn px-10 bg-orange-600 text-white font-bold
           border-none rounded hover:bg-orange-500" type="submit" value="Register"/>
            </div>
            <p className='text-center mt-3'>Already have an account? <Link to="/login" className='text-orange-500'>Login</Link> </p>
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
