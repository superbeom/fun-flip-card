import { PRISMA_URI } from "./env";

const apolloClientOptions = {
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : PRISMA_URI,
};

export default apolloClientOptions;
