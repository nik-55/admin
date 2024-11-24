import { _LEAD } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<_LEAD>[] = [
  {
    accessorKey: 'content.message',
    header: 'Content',
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
  },
  {
    accessorKey: 'is_shortlisted',
    header: 'Shortlisted',
  },
  {
    accessorKey: 'is_contacted',
    header: 'Contacted',
  },
  {
    accessorKey: 'feedback',
    header: 'Feedback',
  },
  {
    accessorKey: 'reason',
    header: 'Reason',
  },
  {
    accessorKey: 'content.source',
    header: 'Source',
  },
];
