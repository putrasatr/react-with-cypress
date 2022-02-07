// src/mocks.js
import { setupWorker, rest } from "msw";
const worker = setupWorker(
  rest.get("/rewards", (req, res, ctx) => {
    return res(ctx.json({ title: "Lord of the Rings" }));
  })
);

window.msw = {
  worker,
  rest,
};
