import { type NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { type Item, items } from '@/app/api/items/data';

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const i = items.find((e) => e.id === Number(id));

  if (i) {
    return Response.json(i);
  }
  redirect('/api/items');
}

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
