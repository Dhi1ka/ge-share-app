import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: new String(import.meta.env.REACT_APP_SANITY_PROJECT_ID),
  dataset: "production",
  apiVersion: "2022-02-12",
  useCdn: true,
  token: new String(import.meta.env.REACT_APP_SANITY_TOKEN),
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);