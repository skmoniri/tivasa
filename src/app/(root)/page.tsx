
import type { Metadata } from "next";

import {
  getPageMetadata,
  SITE_URL,
} from "@/lib/seo";

import HomeRedirect from "./HomeRedirect";

const homepageMetadata = getPageMetadata("en", "home");

export const metadata: Metadata = {
  ...homepageMetadata,

  openGraph: {
    ...homepageMetadata.openGraph,
    url: SITE_URL,
  },
};

export default function Home() {
  return <HomeRedirect />;
}
