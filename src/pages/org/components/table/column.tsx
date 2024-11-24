import { Button } from '@/components/ui/button';
import { _LEAD } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import LeadSheet from '../sheet';

export const columns: ColumnDef<_LEAD>[] = [
  {
   header: 'View',
    cell: ({ row }) => {
      return (
       <LeadSheet lead={row.original} />
      );
    },
  },
  {
    accessorKey: 'content.message',
    header: 'Content',
    cell: ({ row }) => {
      const message = row.original.content.message;
      return <p>{message.length > 30 ? `${message.slice(0, 30)}...` : message}</p>
    },
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Score
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
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
    cell: ({ row }) => {
      const feedback = row.original.feedback || 'NA';
      return <p>{feedback.length > 30 ? `${feedback.slice(0, 30)}...` : feedback}</p>
    }
  },
  {
    accessorKey: 'reason',
    header: 'Reason',
    cell: ({ row }) => {
      const reason = row.original.reason || 'NA';
      return <p>{reason.length > 30 ? `${reason.slice(0, 30)}...` : reason}</p>
    }
  },
  {
    accessorKey: 'content.source',
    header: 'Source',
  },
];
