import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success('login success');
            form.reset();
        })
        .catch( error => {
            setError(error.message);
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8">Login</h2>
        {/* {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username:
            </label>
            <input
              type="email"
              id="username"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <input type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600" value="Login" />
        </form>
        <p className='mt-5'><small>New to our website? Please <Link className='text-primary' to='/register'> register </Link></small></p>
        <p className='text-error'>{error}</p>
      </div>
    </div>

    );
};

export default Login;