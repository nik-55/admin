export type _ORGANIZATION = {
  number_of_groups: number;
  number_of_leads: number;
  subscription_date: string;
  name: string;
  email: string;
  id: string;
};

type _LEAD_CONTENT = {
  created_at: string;
  message: string;
  source: 'whatsapp' | 'slack';
};

export type _LEAD = {
  _id: string;
  content: _LEAD_CONTENT;
  rating: number;
  is_shortlisted: boolean;
  is_contacted: boolean;
  feedback?: string;
  reason?: string;
};

export type _HOME_PAGE_DATA = {
  organizations: _ORGANIZATION[];
  total_org: number;
  total_groups: number;
  total_leads: number;
};

export type _ORG_PAGE_DATA = {
  organization: _ORGANIZATION;
  leads: _LEAD[];
};
