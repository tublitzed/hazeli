import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <a href="/h">Hazel</a>
          <a href="/e">Eli</a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
        }

        main {
          padding: 1em 0;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        main a {
          padding: 40vh 2em;
          border: 1px solid #ccc;
          text-align: center;
          width: 50%;
          margin: 1em 0 1em 1em;
          font-size: 3rem;
          font-weight: bold;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: #d4e7ff;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
