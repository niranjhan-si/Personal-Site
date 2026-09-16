import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 600 }}>Niranjhan Sivakumar</div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#a1a1a1" }}>
          Product, systems, and agentic AI
        </div>
      </div>
    ),
    { ...size }
  );
}
