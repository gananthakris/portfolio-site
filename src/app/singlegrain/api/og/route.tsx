export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { ImageResponse } = await import("next/og");
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Single Grain";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0b0f14",
            color: "#a5ff3d",
            fontFamily: "system-ui",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
              padding: "0 40px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#b8b8b3",
            }}
          >
            Single Grain
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response("OG image generation not available", { status: 500 });
  }
}

