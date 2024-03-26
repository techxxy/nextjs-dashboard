import { useSession, Session } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession<Session>()

  if (status === "authenticated" && session) {
    return <p>Signed in as {session.user.email}</p>
  }

  return <a href="/api/auth/signin">Sign in</a>
}