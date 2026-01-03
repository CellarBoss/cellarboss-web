import { makeBackendRequest } from "@/lib/api/backend";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  return makeBackendRequest(
    `${process.env.CELLARBOSS_SERVER}/v1/grape/${id}`
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  return makeBackendRequest(
    `${process.env.CELLARBOSS_SERVER}/v1/grape/${id}`,
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
    `${process.env.CELLARBOSS_SERVER}/v1/grape/${id}`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );

}