// eslint-disable-next-line
import * as fs from "fs";
import prettier from "prettier/standalone";
import prettierTypescript from "prettier/parser-typescript";
import ReactDOMServer from "react-dom/server";
import { useState } from "react";

render();

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(<HelloWorldPage />);
  let htmlWDoc = html;
  let prettyHtml = prettier.format(htmlWDoc, {
    parser: "typescript",
    plugins: [prettierTypescript],
  });
  let outputFile = "./output.html";
  // fs.writeFileSync(outputFile, prettyHtml);
  console.log(prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

function Input() {
  const [q, setQ] = useState<string>("");
  const [p, setP] = useState<boolean>(false);
  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={p ? "A" : "B"}
      />
      <button onClick={() => setP(!p)}>Change</button>
    </>
  );
}

export default function HelloWorldPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hello world</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
      <Input />
    </html>
  );
}
