import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const FeedPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Replace this with your actual authentication logic.
    const userIsLoggedIn = true; // Change this based on your authentication state

    if (!userIsLoggedIn) {
      // If the user is not logged in, redirect to the login page
      router.push('/login'); // Replace '/login' with your actual login page route
    }
  }, []);

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <iframe
          src="" // Replace with the URL you want to embed
          frameBorder="0"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </>
  );
};

export default FeedPage;
