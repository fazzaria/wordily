import DEV_URL from "./devUrl";

const devCorsPolicy = {
  cors: {
    origin: DEV_URL,
    methods: ["GET", "POST"],
  },
};

export default devCorsPolicy;
