import { DataTable } from '@/components/table';
import { columns } from './column';
import { _ORGANIZATION } from '@/types';

const OrgTable = ({ orgs }: { orgs: _ORGANIZATION[] }) => {
  return (
    <div>
      <DataTable columns={columns} data={orgs} />
    </div>
  );
};

export default OrgTable;
