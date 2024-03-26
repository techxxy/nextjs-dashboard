import { cookies } from 'next/headers'
import { jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export default async function Profile() {

    const session = await getSession();
  
    return (
      <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    );
  }

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
  
    const decryptedSession = await decrypt(session);
    console.log('Decrypted session:', decryptedSession);
    return decryptedSession;
  }


  export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }