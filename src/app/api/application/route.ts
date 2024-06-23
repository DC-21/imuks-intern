
import prisma from '@/config/prisma';
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
        try {
            const {
                firstname,
                lastname,
                studentId,
                institution,
                program,
                education,
                jobtitle,
                skills,
                experience,
            } = await req.json();

            const newApplication = await prisma.applications.create({
                data: {
                    firstname,
                    lastname,
                    studentId,
                    institution,
                    program,
                    education,
                    jobtitle,
                    skills,
                    experience,
                },
            });

            return NextResponse.json(newApplication, { status: StatusCodes.CREATED });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}