import { db } from '@/db';
import { GuestbookSchema } from '@/db/models/schema';
import { Logger } from '@/server/api/common/logger';

import { DeleteGuestbookEntry } from './DeleteGuestbookEntry';
import { EditableGuestbookEntry } from './EditableGuestbookEntry';

const GuestbookList = async () => {
  const guestbook = await db.select().from(GuestbookSchema);

  Logger.info('Get all guestbook entries');

  return (
    <div className="mt-5" data-testid="guestbook-list">
      {guestbook.map(elt => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          <DeleteGuestbookEntry id={elt.id.toString()} />

          <EditableGuestbookEntry id={elt.id.toString()} name={elt.name} body={elt.body} />
        </div>
      ))}
    </div>
  );
};

export { GuestbookList };
