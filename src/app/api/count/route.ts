import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db'; // Import the PrismaClient instance from db/index.ts

export async function POST(req: NextRequest, res: NextResponse) {
  console.log('req.body:', req.body);

  const { userId, character } = await req.json();
  console.log('Received request:', { userId, character });

  try {
    // Check if a record exists for the given userId and character
    const existingPressCount = await db.pressCount.findFirst({
        where: {
            userId: userId,
            character: character,
          },
    });

    if (existingPressCount) {
      // If a record exists, update the count by incrementing it
      await db.pressCount.update({
        where: {
          id: existingPressCount.id,
        },
        data: {
          count: {
            increment: 1,
          },
        },
      });

      console.log('Press count updated:', existingPressCount);
    } else {
      // If no record exists, create a new record with the initial count
      const newPressCount = await db.pressCount.create({
        data: {
          userId,
          character,
          count: 1, // Initial count
        },
      });

      console.log('New press count created:', newPressCount);
    }
    
    return new Response('Success!', {
        status: 200,
      }) // Return a response here
  } catch (error) {
    console.error('Error updating or creating press count:', error);
    return new Response('Failed to update or create press count', {status: 500}); // Return an error response
  }
}
