import { type NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { type Item, items } from '@/app/api/items/data';

type Props = {
  params: {
    id: string;
  };
};

// GET
// get one item by id
export async function GET(request: Request, { params: { id } }: Props) {
  const item = items.find((e) => e.id === Number(id));

  if (item) {
    return Response.json(item);
  }
  redirect('/api/items');
}

// PATH
// update one item by id
export async function PATCH(request: Request, { params: { id } }: Props) {
  const { name, price } = await request.json();
  const index = items.findIndex((e) => e.id === Number(id));

  const res = {
    value: {},
    status: 404,
  };

  if (index > 0) {
    items[index].name = name;
    items[index].price = price;
    res.value = items[index];
    res.status = 201;
  }
  return new Response(JSON.stringify(res.value), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: res.status,
  });
}

// DELETE
// delete one item by id
export async function DELETE(request: Request, { params: { id } }: Props) {
  const index = items.findIndex((e) => e.id === Number(id));

  const res = {
    value: {},
    status: 404,
  };
  if (index > 0) {
    res.value = items[index];
    items.splice(index, 1);
    res.status = 201;
  }
  return new Response(JSON.stringify(res.value), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: res.status,
  });
}
