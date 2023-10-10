import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Feed</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self' https://7e28-3-215-79-139.ngrok-free.app; style-src 'self' 'unsafe-inline'; script-src 'nonce-123213'; script-src 'unsafe-inline';"
        />
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <iframe
          src="https://7e28-3-215-79-139.ngrok-free.app/"
          frameborder="0"
          style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 }}
          allow="ngrok-skip-browser-warning 69420"
        ></iframe>
      </div>
    </>
  );
};

export default FeedPage;
