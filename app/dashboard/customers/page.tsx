import { Metadata } from 'next';
import { db } from '@/db'
 
export const metadata: Metadata = {
  title: 'Customer',
};

export default function Page (){

  return <p>AllUser</p>;
}

async function main() {
  const allUsers = await db.user.findMany()
  console.log(allUsers)
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })