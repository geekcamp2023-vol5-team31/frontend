import { Html, Head, Main, NextScript } from 'next/document'
import {ZenMaruGothic} from "@/fonts/ZenMaruGothic";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={ZenMaruGothic.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
