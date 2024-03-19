// api > hello > route.ts
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    const greeting = "Hello World!!"
    const json = {
        greeting
    };
    
    return NextResponse.json(json);
}
/* import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db'; // Import the PrismaClient instance from db/index.ts


export default async function POST() {
    const res = await fetch 
}

handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId, character } = req.body;

    try {
        // Log received request data
        console.log('Received request:', { userId, character });

        // Access the PrismaClient instance from db/index.ts and perform database operations
        await db.pressCount.update({
            where: { id: userId },
            data: {
                [`${character.toLowerCase()}_count`]: {
                    increment: 1,
                },
            },
        });

        // Log successful update
        console.log('Incremented count successfully.');

        // Send response
        res.status(200).json({ success: true });
    } catch (error) {
        // Log error
        console.error('Error while incrementing count:', error);

        // Send error response
        res.status(500).json({ error: 'Failed to increment count' });
    }
} */