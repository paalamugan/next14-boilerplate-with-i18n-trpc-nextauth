'use client';

import { signIn } from 'next-auth/react';
import { type FormEventHandler, useState } from 'react';

export const SignInForm = (props: { callbackUrl: string | undefined }) => {
  const { callbackUrl = '/dashboard' } = props;

  const [isLoading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    if (isLoading) return;
    const body = new FormData(event.currentTarget);
    const username = body.get('username')?.toString();
    const password = body.get('password')?.toString();

    try {
      setLoading(true);
      await signIn('credentials', {
        username,
        password,
        callbackUrl,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to sign in', error);
      setLoading(false);
    }
  };
  return (
    <form className="space-y-4" method="POST" onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">
          <div className="block text-sm font-medium leading-6 text-gray-900">Username</div>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Enter below username in here"
              defaultValue="admin"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <small>
              Username: <b>admin</b>
            </small>
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="password">
          <div className="block text-sm font-medium leading-6 text-gray-900">Password</div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter below password in here"
              defaultValue="admin"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <small>
              Password: <b>admin</b>
            </small>
          </div>
        </label>
      </div>

      <div className={isLoading ? 'cursor-not-allowed' : ''}>
        <button
          type="submit"
          disabled={isLoading}
          className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isLoading ? 'pointer-events-none disabled:opacity-50' : ''}`}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
