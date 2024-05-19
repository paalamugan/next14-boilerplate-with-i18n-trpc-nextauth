import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/db';
import { GuestbookSchema } from '@/db/models/schema';
import { Logger } from '@/server/api/common/logger';
import {
  DeleteGuestbookValidation,
  EditGuestbookValidation,
  GuestbookValidation,
} from '@/validations/GuestbookValidation';

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = GuestbookValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const guestbook = await db.insert(GuestbookSchema).values(parse.data).returning();

    Logger.info('A new guestbook has been created');

    return NextResponse.json({
      id: guestbook[0]?.id,
    });
  } catch (error) {
    Logger.error('An error occurred while creating a guestbook', error);

    return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = EditGuestbookValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .update(GuestbookSchema)
      .set(parse.data)
      .where(eq(GuestbookSchema.id, parse.data.id))
      .run();

    Logger.info('A guestbook entry has been updated');

    return NextResponse.json({});
  } catch (error) {
    Logger.error('An error occurred while updating a guestbook', error);

    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const json = await request.json();
  const parse = DeleteGuestbookValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db.delete(GuestbookSchema).where(eq(GuestbookSchema.id, parse.data.id)).run();

    Logger.info('A guestbook entry has been deleted');

    return NextResponse.json({});
  } catch (error) {
    Logger.error('An error occurred while deleting a guestbook', error);

    return NextResponse.json({}, { status: 500 });
  }
};
