import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/config/prisma';
import { hash } from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

export async function POST(req: NextRequest) {
    try {
        const { firstname, lastname, email, password, studentNumber, institution, program, year } = await req.json();

        const isEmail = await prisma.user.findUnique({
            where: { email }
        });

        if (isEmail) {
            return NextResponse.json(
                { message: 'User exists' },
                { status: StatusCodes.BAD_REQUEST }
            );
        }

        const hashedPassword = await hash(password, 10);

        const user = await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email:email,
                password: hashedPassword,
                studentId: studentNumber,
                institution:institution,
                program:program,
                year:program
            }
        });

        return NextResponse.json(user, { status: StatusCodes.CREATED });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}
