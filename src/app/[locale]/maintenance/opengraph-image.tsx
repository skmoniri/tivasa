import { ImageResponse } from "next/og";

import { isLocale } from "@/i18n/config";

export const alt = "Tivasa — VRF Maintenance and Service";

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
        background: "#0b1f3a",
        color: "#f5f5f2",
        padding: 64,
        position: "relative",
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
        {/* Red accent */}
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
            lineHeight: 1.08,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          <span>VRF MAINTENANCE</span>
          <span>&amp; SERVICE.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            width: "100%",
            fontSize: 24,
            opacity: 0.75,
            letterSpacing: 2,
            fontFamily: "sans-serif",
            textAlign: "left",
          }}
        >
          PREVENTIVE / PREDICTIVE / CORRECTIVE
        </div>
      </div>

      {/* Bottom information */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #ffffff30",
          paddingTop: 24,
          fontSize: 18,
          letterSpacing: 2,
        }}
      >
        <span>TIVASACO.COM</span>
        <span>03 / MAINTENANCE</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
