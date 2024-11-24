import { orgPageData } from '@/utils/dummy';
import LeadTable from './components/table';

const Org = () => {
  return (
    <div className='m-6'>
      <div>
        <li>Id: {orgPageData.organization.id}</li>
        <li>Name: {orgPageData.organization.name}</li>
        <li>Email: {orgPageData.organization.email}</li>
        <li>Leads: {orgPageData.organization.number_of_leads}</li>
        <li>Groups: {orgPageData.organization.number_of_groups}</li>
        <li>Subscription Date: {orgPageData.organization.subscription_date}</li>
      </div>
      <div className='mt-4'>
        <LeadTable leads={orgPageData.leads} />
      </div>
    </div>
  );
};

export default Org;
