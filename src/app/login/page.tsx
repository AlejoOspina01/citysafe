'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Mail, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';

/**
 * Login Page (/login)
 * Authentication page for admin users
 * Supports password login, email link, and guest access
 */
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMethod, setLoginMethod] = useState<'password' | 'email-link' | 'guest' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to backend authentication API
    console.log('Password login:', { email, password });
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleEmailLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to backend API for email link
    console.log('Email link login:', { email });
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleGuestAccess = () => {
    setIsLoading(true);
    // TODO: Create guest session
    console.log('Guest access');
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <main className="flex flex-col">
        <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Welcome to CitySafe Admin
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50 flex-grow">
          <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <UserCheck className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Logged In Successfully!
                </h2>
                <p className="text-gray-600 mb-8">
                  Redirecting to admin dashboard...
                </p>
                <Link href="/admin">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Go to Dashboard
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admin Login
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access the CitySafe administration panel to manage incident reports.
          </motion.p>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 md:py-24 bg-gray-50 flex-grow">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          {loginMethod === null ? (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Login Method Selection */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Choose Login Method
                </h2>

                <Button
                  onClick={() => setLoginMethod('password')}
                  className="w-full mb-3 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  Log in with Password
                </Button>

                <Button
                  onClick={() => setLoginMethod('email-link')}
                  variant="outline"
                  className="w-full mb-3 border-gray-300 flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Continue with Email Link
                </Button>

                <Button
                  onClick={() => handleGuestAccess()}
                  variant="outline"
                  className="w-full border-gray-300 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  <UserCheck className="h-4 w-4" />
                  Continue as Guest
                </Button>
              </Card>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Contact administrator
                </a>
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLoginMethod(null)}
                  className="mb-6 border-gray-300 w-full"
                >
                  ← Back
                </Button>

                {/* Password Login */}
                {loginMethod === 'password' && (
                  <form onSubmit={handlePasswordLogin} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Log in with Password
                    </h2>

                    <div>
                      <Label htmlFor="email" className="font-medium text-gray-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="admin@citysafe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="password" className="font-medium text-gray-900">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Forgot password?
                    </a>

                    <Button
                      type="submit"
                      disabled={isLoading || !email || !password}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                  </form>
                )}

                {/* Email Link Login */}
                {loginMethod === 'email-link' && (
                  <form onSubmit={handleEmailLink} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Email Link Sign In
                    </h2>

                    <p className="text-gray-600 text-sm">
                      Enter your email and we'll send you a secure login link.
                    </p>

                    <div>
                      <Label htmlFor="email" className="font-medium text-gray-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="admin@citysafe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      {isLoading ? 'Sending link...' : 'Send Login Link'}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
