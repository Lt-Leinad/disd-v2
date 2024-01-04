import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "kzzlqcij",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

export default client;
