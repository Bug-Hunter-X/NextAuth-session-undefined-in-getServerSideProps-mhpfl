```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Page({params}) {
  const session = await unstable_getServerSession(context, authOptions);
  console.log(session);

  if (!session) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>Please log in.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users. Welcome, {session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  
  if(!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session
    },
  };
}
```