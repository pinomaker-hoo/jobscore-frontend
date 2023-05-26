import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <title>Jobs Score</title>
        <meta name="description" content="Jobs Score" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/JavaScript"
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
