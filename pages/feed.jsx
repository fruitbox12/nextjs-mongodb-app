import Head from 'next/head';

const FeedPage = () => {
  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'unsafe-inline';">
        <!-- Add your custom headers here -->
        <meta name="ngrok-skip-browser-warning" content="69420">
      </head>
      <body>
        <iframe
          src="https://7e28-3-215-79-139.ngrok-free.app/" // Replace with the URL you want to embed
          frameborder="0"
          style="width: 100%; height: 100%;"
        ></iframe>
      </body>
    </html>
  `;

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <iframe
          srcDoc={iframeSrcDoc}
          frameborder="0"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </>
  );
};

export default FeedPage;
