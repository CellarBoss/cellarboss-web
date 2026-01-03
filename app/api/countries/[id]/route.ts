import { makeBackendRequest } from "@/lib/api/backend";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  return makeBackendRequest(
    `${process.env.CELLARBOSS_SERVER}/v1/country/${id}`,
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  return makeBackendRequest(
    `${process.env.CELLARBOSS_SERVER}/v1/country/${id}`,
    {
      method: "DELETE",
    }
  );

}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const body = await request.json();

  return makeBackendRequest(
    `${process.env.CELLARBOSS_SERVER}/v1/country/${id}`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );

}