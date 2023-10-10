import Head from 'next/head';

const FeedPage = () => {
  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'unsafe-inline';">
        <meta name="ngrok-skip-browser-warning" content="69420">
      </head>
      <body style="margin: 0; overflow: hidden;">
        <iframe
          src="https://7e28-3-215-79-139.ngrok-free.app/" // Replace with the URL you want to embed
          frameborder="0"
          style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
          allow="ngrok-skip-browser-warning 69420"
        ></iframe>
      </body>
    </html>
  `;

  return (
    <>
      <Head>
        <title>Automations</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'unsafe-inline'; meta-src 'self' http://example.com; frame-src http://example.com;"
        />
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <iframe
          srcDoc={iframeSrcDoc}
          style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 }}
          allow="ngrok-skip-browser-warning 69420"
        ></iframe>
      </div>
    </>
  );
};

export default FeedPage;
