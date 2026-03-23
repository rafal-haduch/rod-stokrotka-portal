import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(req: NextRequest) {
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
    }

    try {
        await revalidateTag('users');
        return NextResponse.json({ revalidated: true });
    } catch (err) {
        console.error('Failed to revalidate users tag:', err);
        return NextResponse.json({ revalidated: false, error: String(err) }, { status: 500 });
    }
}
