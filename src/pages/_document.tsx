import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <title>Jobs Score</title>
        <meta
          name="description"
          content="Jobs Score, 우리 회사의 잡스코어는? 우리회사와 내가 원하는 회사의 점수를 비교해보세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/JavaScript"
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="/og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
