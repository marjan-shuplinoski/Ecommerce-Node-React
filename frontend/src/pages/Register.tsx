import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import { useAuth } from '../hooks/useAuth';

const roles = ['user', 'merchant', 'admin'] as const;

type Role = typeof roles[number];

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('user');
  const [error, setError] = useState('');
  const [errorDetails, setErrorDetails] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setErrorDetails([]);
    try {
      const user = await register({ name, email, password, role });
      login(user);
      navigate('/');
    } catch (err: any) {
      console.log('Register error (full object):', err);
      setError(err.response?.data?.message || 'Registration failed');
      if (Array.isArray(err.response?.data?.details)) {
        setErrorDetails(err.response.data.details);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Register</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
        className="w-full mb-3 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white placeholder-blue-300"
      />
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
        className="w-full mb-3 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white placeholder-blue-300"
      />
      <select
        value={role}
        onChange={e => setRole(e.target.value as Role)}
        className="w-full mb-4 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white"
      >
        {roles.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 rounded !bg-white !text-blue-700 font-semibold !border !border-blue-600 hover:!bg-blue-600 hover:!text-white hover:!border-blue-700 transition disabled:opacity-60"
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <div className="text-red-600 mt-3 text-center">{error}</div>}
      {errorDetails.length > 0 && (
        <ul className="text-red-600 mt-2 text-sm">
          {errorDetails.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Register;
