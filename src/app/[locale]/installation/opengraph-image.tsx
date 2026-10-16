import { ImageResponse } from "next/og";

import { isLocale } from "@/i18n/config";

export const alt = "Tivasa — VRF Installation and Commissioning";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    throw new Error("Invalid locale");
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5f5f2",
        color: "#080a0d",
        padding: 64,
        overflow: "hidden",
      }}
    >
      {/* Top branding */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            background: "#8f2028",
          }}
        />

        <span
          style={{
            fontSize: 24,
            letterSpacing: 5,
            fontWeight: 700,
          }}
        >
          TIVASA
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 24,
          width: "100%",
        }}
      >
        <div
          style={{
            width: 80,
            height: 4,
            background: "#8f2028",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -3,
          }}
        >
          <span>VRF INSTALLATION</span>
          <span>&amp; COMMISSIONING</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            width: "100%",
            fontSize: 23,
            opacity: 0.65,
            letterSpacing: 2,
            fontFamily: "sans-serif",
            textAlign: "left",
          }}
        >
          ENGINEERING BEFORE EXECUTION
        </div>
      </div>

      {/* Bottom information */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #080a0d30",
          paddingTop: 24,
          fontSize: 18,
          letterSpacing: 2,
        }}
      >
        <span>TIVASA.COM</span>
        <span>02 / INSTALLATION</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
