import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client'
 
export const metadata: Metadata = {
  title: 'Customer',
};

export default function Page (){


  return <p>Customers Page</p>;
}
const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })