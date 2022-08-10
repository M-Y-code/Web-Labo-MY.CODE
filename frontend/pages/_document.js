import Document, { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/Meta";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <Meta
            title={"Web-Labo-M.Y.CODE"}
            discription={"サイトの説明が入ります"}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
