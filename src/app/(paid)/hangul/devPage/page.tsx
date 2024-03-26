import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export default async function Page() {
    const cookieStore = cookies();
    const allCookies = cookieStore.getAll();
  
    // Get session data
    const session = await getSession();
  
    return (
      <div>
        {allCookies.map((cookie, index) => (
          <div key={index}>
            <p>Name: {cookie.name}</p>
            <p>Value: {cookie.value}</p>
          </div>
        ))}
        <div>
          <p>Session:</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
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