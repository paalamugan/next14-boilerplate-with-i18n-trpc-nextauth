import { api } from '@/trpc/server';

export const ServerFetch = async () => {
  const data = await api.user.userById();
  return (
    <div className="[&_p]:my-6">
      <h1 className="font-bold">Data fetched in Server</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};
