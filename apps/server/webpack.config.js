import NodemonPlugin from "nodemon-webpack-plugin";
import path from "path";
import nodeExternals from "webpack-node-externals";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: "node",
  plugins: [new NodemonPlugin()],
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../../node_modules"),
      allowlist: [/^@pi\//],
    }),
  ],
};
