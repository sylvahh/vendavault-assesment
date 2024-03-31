import { facebookAlt, instagramFilled, linkedInIcon, twitterFilled } from '@/constants/assets';

type Links = {
  name: string;
  path: string;
  icon?: string;
};

export const socialLinks: Links[] = [
  {
    name: 'facebook',
    path: '',
    icon: facebookAlt,
  },
  {
    name: 'twitter',
    path: '',
    icon: twitterFilled,
  },
  {
    name: 'linkedin',
    path: '',
    icon: linkedInIcon,
  },
  {
    name: 'instagram',
    path: '',
    icon: instagramFilled,
  },
];

export const companyLinks: Links[] = [
  {
    name: 'about us',
    path: '/about',
  },
  {
    name: 'contact us',
    path: '/contact',
  },
  {
    name: 'department',
    path: '/department',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'blogs',
    path: '/blogs',
  },
  {
    name: 'terms & conditions',
    path: '/terms',
  },
  {
    name: 'security',
    path: '/security',
  },
];
