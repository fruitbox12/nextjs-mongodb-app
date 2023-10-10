import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <iframe
          src="https://218a-3-215-79-139.ngrok-free.app" // Replace with the URL you want to embed
          frameBorder="0"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </>
  );
};

export default FeedPage;
