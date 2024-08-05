import { type NextRequest } from 'next/server';
import { type Item, items } from '@/app/api/items/data';

// GET
// get all items
export async function GET(request: NextRequest) {
  return Response.json(items);
}

// GET
// get all items with get parameter
// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get('query');
//   const result = query ? items.filter((e) => e.name.includes(query)) : items;
//   return Response.json(result);
// }

// POST
// add new item
export async function POST(request: Request) {
  const item = await request.json();

  const newItem: Item = {
    id: items.length + 1,
    name: item.name,
    price: item.price,
  };
  items.push(newItem);

  return new Response(JSON.stringify(newItem), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
