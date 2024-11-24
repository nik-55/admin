import { Input } from '@/components/ui/input';
import { Table } from '@tanstack/react-table';

const Search = <TData,>({ table }: { table: Table<TData> }) => {
  if (table.getColumn('name') === undefined) return null;
  return (
    <div>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Filter name...'
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
      </div>
    </div>
  );
};

export default Search;
