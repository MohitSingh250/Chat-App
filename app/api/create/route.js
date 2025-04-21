// app/api/token/route.ts
import { NextResponse } from 'next/server';
import { StreamChat } from 'stream-chat';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
const userId = 'user_2vtWfdE08ZgHONSqtAYEhYGPadR';

export async function GET() {
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);

  const token = serverClient.createToken(userId);

  return NextResponse.json({ token });
}
