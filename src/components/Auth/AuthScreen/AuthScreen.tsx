'use client';

import type { FormEventHandler } from 'react';

import { useSession } from '@/stores/session-store';
import { api } from '@/trpc/react';

export const AuthScreen: React.FC = () => {
  const session = useSession();
  const signInMutation = api.auth.signIn.useMutation({
    onSuccess(data) {
      session.update(data);
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const username = formData.get('username')?.toString() || '';
      const password = formData.get('password')?.toString() || '';

      signInMutation.mutateAsync({
        credentials: { username, password },
      });
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const isLoading = signInMutation.isPending || session.status === 'loading';

  return (
    <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
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
