import React, { useState } from 'react';
import { Eye, EyeOff, Mail, UserPlus, LogIn, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type AuthMode = 'login' | 'signup' | 'forgot-password';

interface FormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
          throw new Error('All fields are required');
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await axios.post('http://localhost:5000/api/auth/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else if (mode === 'login') {
        if (!formData.email || !formData.password) {
          throw new Error('Email and password are required');
        }
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem('token', res.data.token);
        login(); // Call login function to update authentication state
        navigate('/account');
      } else if (mode === 'forgot-password') {
        // Handle forgot password logic
        setResetEmailSent(true);
      }
      console.log('Auth successful', formData);
    } catch (error) {
      console.error('Auth failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = (newMode: AuthMode) => {
    setMode(newMode);
    setFormData({
      email: '',
      password: '',
    });
    setResetEmailSent(false);
  };

  const renderForgotPassword = () => (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <p className="text-gray-600 mt-2">
          {resetEmailSent 
            ? 'Check your email for reset instructions' 
            : 'Enter your email to receive password reset instructions'
          }
        </p>
      </div>

      {!resetEmailSent ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
              <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold
              ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
              transition duration-300`}
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
            Password reset instructions have been sent to your email.
          </div>
          <button
            onClick={() => toggleMode('login')}
            className="text-blue-600 hover:text-blue-500 font-semibold flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </button>
        </div>
      )}
    </>
  );

  const renderAuthForm = () => (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-600 mt-2">
          {mode === 'login' 
            ? 'Sign in to access your account' 
            : 'Join us to get started with VisionAI'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                required={mode === 'signup'}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
              <UserPlus className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
            <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {mode === 'signup' && (
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword || ''}
                onChange={handleChange}
                required={mode === 'signup'}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        )}

        {mode === 'login' && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button 
              type="button"
              onClick={() => toggleMode('forgot-password')}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold
            ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
            transition duration-300`}
        >
          {isSubmitting ? (
            'Processing...'
          ) : (
            <>
              {mode === 'login' ? (
                <>
                  Sign In
                  <LogIn className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Create Account
                  <UserPlus className="w-5 h-5 ml-2" />
                </>
              )}
            </>
          )}
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => toggleMode('signup')}
                className="text-blue-600 hover:text-blue-500 font-semibold"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => toggleMode('login')}
                className="text-blue-600 hover:text-blue-500 font-semibold"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </>
  );

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
        <div className="container relative mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-lg shadow-xl p-8">
                {mode === 'forgot-password' ? renderForgotPassword() : renderAuthForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}