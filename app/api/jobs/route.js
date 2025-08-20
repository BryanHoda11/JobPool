export async function GET() {
  try {
    const response = await fetch("https://remotive.com/api/remote-jobs");
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch jobs" }),
      { status: 500 }
    );
  }
}