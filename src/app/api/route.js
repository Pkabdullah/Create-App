import { NextResponse } from "next/server";
import connectionstr from "@/libs/db";
import Create from "@/model/data";

export  async function GET(){
    await connectionstr()
    const product = await Create.find();
    console.log(product);
    return NextResponse.json({result:product},{status:201})
}

export async function POST(request) {
    await  connectionstr()
    const payload= await request.json();
    let product = new Create(payload)
    const result = await product.save()
    return NextResponse.json({ result,success: true })
}

