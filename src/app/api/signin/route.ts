import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/config/prisma';
import { compare } from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return NextResponse.json(
                { message: 'User does not exist' },
                { status: StatusCodes.BAD_REQUEST }
            );
        }

        const match = await compare(password, user.password);

        if (!match) {
            return NextResponse.json(
                { message: 'Incorrect password' },
                { status: StatusCodes.BAD_REQUEST }
            );
        }

        const payload = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            studentId: user.studentId,
            institution: user.institution,
            year: user.year,
            program: user.program,
            type: user.type
        };

        const token = jwt.sign(payload, `${process.env.SECRET}`, {
            expiresIn: '1h'
        });

        return NextResponse.json({
            token: token,
            user: payload
        });

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}
