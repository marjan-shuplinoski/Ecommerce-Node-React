import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login: loginContext } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const user = await login({ email, password });
      loginContext(user);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Login</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full mb-3 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white placeholder-blue-300"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full mb-4 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white placeholder-blue-300"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 rounded bg-blue-600 text-white font-semibold border border-blue-600 hover:bg-white hover:text-blue-700 hover:border-blue-700 transition disabled:opacity-60"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div className="text-red-600 mt-3 text-center">{error}</div>}
    </form>
  );
};

export default Login;
