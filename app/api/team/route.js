import { NextResponse } from "next/server";
import teamData from "../../../data/team.json";

function getTeamMembers() {
  return Array.isArray(teamData) ? teamData : [];
}

export async function GET() {
  const teamMembers = getTeamMembers();

  return NextResponse.json(
    {
      success: true,
      message: "Team members retrieved successfully",
      metadata: {
        total: teamMembers.length,
        endpoint: "/api/team",
        timestamp: new Date().toISOString(),
      },
      data: teamMembers,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
