import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Ноутбук", price: 2500 },
    { id: 2, name: "Мышь", price: 80 },
    { id: 3, name: "Клавиатура", price: 150 }
  ];
  
  return NextResponse.json(products);
}