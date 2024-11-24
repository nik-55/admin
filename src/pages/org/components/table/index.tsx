import { DataTable } from '@/components/table';
import { columns } from './column';
import { _LEAD } from '@/types';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export type _ORG_PAGE_FILTER = {
  is_contacted?: boolean;
  is_shortlisted?: boolean;
  source?: 'whatsapp' | 'slack';
};

const filterList = [
  {
    label: 'Contacted',
    value: 'is_contacted',
    choices: [
      { label: 'True', value: true },
      { label: 'False', value: false },
    ],
  },
  {
    label: 'Shortlisted',
    value: 'is_shortlisted',
    choices: [
      { label: 'True', value: true },
      { label: 'False', value: false },
    ],
  },
  {
    label: 'Source',
    value: 'source',
    choices: [
      { label: 'Whatsapp', value: 'whatsapp' },
      { label: 'Slack', value: 'slack' },
    ],
  },
];

const LeadTable = ({ leads }: { leads: _LEAD[] }) => {
  const [filters, setFilters] = useState<_ORG_PAGE_FILTER>({});

  const handleFilterChange = (type: string, value: string | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearFilters = () => setFilters({});

  const filteredData = leads.filter((item) => {
    const matchesIsContacted =
      filters?.is_contacted !== undefined ? item.is_contacted === filters.is_contacted : true;
    const matchesIsShortlisted =
      filters?.is_shortlisted !== undefined ? item.is_shortlisted === filters.is_shortlisted : true;
    const matchesSource = filters?.source !== undefined ? item.content.source === filters.source : true;
    return matchesIsContacted && matchesIsShortlisted && matchesSource;
  });

  return (
    <div>
      <div className='filters mb-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Filter Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {filterList.map((item) => {
              return (
                <DropdownMenuSub key={item.label}>
                  <DropdownMenuSubTrigger>
                    <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {item.choices.map((choice) => {
                        return (
                          <DropdownMenuItem
                            key={`${item.label}-${choice.label}`}
                            onClick={() => handleFilterChange(item.value, choice.value)}
                          >
                            {choice.label}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              );
            })}

            {/* Clear Filters */}
            <DropdownMenuItem onClick={clearFilters} className='text-red-500'>
              Clear Filters
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='flex items-center mt-4 gap-1'>
          {Object.entries(filters).map(([key, value]) => (
            <span key={key} className='px-2 py-1 bg-gray-200 rounded-full'>
              {key}: {value.toString()}
            </span>
          ))}
        </div>
      </div>

      <DataTable columns={columns} data={filteredData} />
    </div>
  );
};

export default LeadTable;
