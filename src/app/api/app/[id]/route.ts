import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../config/prisma";

// Export named function for GET method
export async function GET(req: NextRequest, context: any) {
    const { params } = context;

    try {
        const userId = parseInt(params.id); // Assuming 'id' is the parameter name

        // Query applications based on userId
        const applications = await prisma.applications.findMany({
            where: {
                userId: userId,
            },
        });

        // Check if applications were found
        if (!applications.length) {
            return NextResponse.json({
                message: 'No applications found for this user',
            }, {
                status: 404,
            });
        }

        // Return applications
        return NextResponse.json({
            applications,
        });
    } catch (error:any) {
        console.error('Error fetching applications:', error);

        // Return error response
        return NextResponse.json({
            error: error.message || 'Internal Server Error',
        }, {
            status: 500,
        });
    }
}
