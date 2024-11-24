import { homePageData } from '@/utils/dummy';
import OrgTable from './components/table';

const Home = () => {
  return (
    <div className='m-6'>
      <div>
        <ul>
          <li>Organizations: {homePageData.total_org}</li>
          <li>Groups: {homePageData.total_leads}</li>
          <li>Leads: {homePageData.total_groups}</li>
        </ul>
      </div>
      <div className='mt-4'>
        <OrgTable orgs={homePageData.organizations} />
      </div>
    </div>
  );
};

export default Home;
