import { _HOME_PAGE_DATA, _ORG_PAGE_DATA } from '@/types';

export const homePageData: _HOME_PAGE_DATA = {
  organizations: [
    {
      number_of_groups: 10,
      number_of_leads: 150,
      subscription_date: '2023-01-15',
      name: 'Tech Innovators Inc.',
      email: 'contact@techinnovators.com',
      id: 'org_001',
    },
    {
      number_of_groups: 17,
      number_of_leads: 90,
      subscription_date: '2023-05-10',
      name: 'Green Future Ltd.',
      email: 'info@greenfuture.com',
      id: 'org_002',
    },
    {
      number_of_groups: 7,
      number_of_leads: 190,
      subscription_date: '2024-05-10',
      name: 'AlphaLabs Ltd.',
      email: 'info@alphalabs.com',
      id: 'org_003',
    },
  ],
  total_org: 3,
  total_groups: 34,
  total_leads: 430,
};

export const orgPageData: _ORG_PAGE_DATA = {
  organization: {
    number_of_groups: 7,
    number_of_leads: 90,
    subscription_date: '2023-05-10',
    name: 'Green Future Ltd.',
    email: 'info@greenfuture.com',
    id: 'org_002',
  },
  leads: [
    {
      _id: 'lead_001',
      content: {
        created_at: '2023-11-01T10:30:00Z',
        message: 'Interested in our sustainability program.',
        source: 'whatsapp',
      },
      rating: 5,
      is_shortlisted: true,
      is_contacted: true,
      reason: 'Interested in partnership.',
      feedback: 'Positive response to follow-up.',
    },
    {
      _id: 'lead_002',
      content: {
        created_at: '2023-11-03T14:45:00Z',
        message: 'Looking for partnership opportunities.',
        source: 'slack',
      },
      rating: 4,
      is_shortlisted: true,
      is_contacted: false,
      reason: 'Pending internal approval.',
      feedback: 'Positive response to follow-up.',
    },
  ],
};
