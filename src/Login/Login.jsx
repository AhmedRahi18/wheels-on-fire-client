import { useContext, useState } from 'react';
import { FaGoogle, FaUserCheck } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signIn,googleSignIn} = useContext(AuthContext)
    const [error,setError] = useState('')

    const handleLogin = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
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
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }


  return (
    <div className="hero mt-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h2 className='text-5xl mb-10 text-center text-orange-600 font-bold'>
          Login Here</h2>
          <img src="https://www.shutterstock.com/image-vector/vector-muscle-car-flames-crazy-600w-1672030162.jpg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-orange-600 bg-orange-100">
          <div className="card-body">
            <div className='flex items-center'>
            <FaUserCheck size={25}></FaUserCheck> 
            <h2 className="text-2xl font-bold">Login</h2>
            </div>
            <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
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
                placeholder="password"
                required
                className="input input-bordered"
              />
            </div>
            <p className='text-red-500 mt-2'>{error}</p>
            <div className="form-control mt-6">
              <input className="btn px-10 bg-orange-600 text-white font-bold
           border-none rounded hover:bg-orange-500" type="submit" value="Login"/>
            </div>
            <p className='text-center mt-3'>New to Wheels On Fire? <Link to="/register" className='text-orange-500'>Register</Link> </p>
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

export default Login;
