import io from "./const/io";
import { server } from "./server";
import registerEvents from "./socketHandlers/registerEvents";

registerEvents(io);

const port = process.env.port || 8080;

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
