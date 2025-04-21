import { StreamChat } from "stream-chat"
const api_key = "xjxsvqyuj8c9";
const api_secret = "7wtpnufmdaakped8pumb85pf4p4randaa62qzpnn3xqxnt38x55xj68dm6bc7tfj";
const user_id = "user_2vtWfdE08ZgHONSqtAYEhYGPadR";

export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    console.log(token)
    return Response.json({ message: 'Hello World' })
  }