"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function makeBackendRequest(
  url: string,
  init?: RequestInit
): Promise<Response> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const headers = new Headers(init?.headers);

  headers.set("Authorization", `Bearer ${session.accessToken}`);
  if (!(init?.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  try {
    return fetch(url, {
      ...init,
      headers,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}