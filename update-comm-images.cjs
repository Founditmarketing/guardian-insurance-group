const fs = require('fs');

let content = fs.readFileSync('/Users/kylangillam/Downloads/guardian-insurance/constants.tsx', 'utf8');

content = content.replace(
  `export const COMMUNITY_POSTS = [
  {
    id: 'comm-1',
    slug: '3rd-annual-diaper-drive-golf-tournament',
    title: '3rd Annual Diaper Drive Golf Tournament',
    excerpt: 'Guardian Insurance Group participated in the Changing Table\\'s 3rd Annual Diaper Drive golf tournament in Osage Beach, MO.',
    category: 'Community Event',
    date: 'Aug 15, 2023',
    readTime: '1 min read',
    image: '/placeholder.jpg',`,
  `export const COMMUNITY_POSTS = [
  {
    id: 'comm-1',
    slug: '3rd-annual-diaper-drive-golf-tournament',
    title: '3rd Annual Diaper Drive Golf Tournament',
    excerpt: 'Guardian Insurance Group participated in the Changing Table\\'s 3rd Annual Diaper Drive golf tournament in Osage Beach, MO.',
    category: 'Community Event',
    date: 'Aug 15, 2023',
    readTime: '1 min read',
    image: '/3rd Annual Diaper Drive Tournament.jpg',
    images: ['/3rd Annual Diaper Drive Tournament.jpg'],`
);

content = content.replace(
  `  {
    id: 'comm-2',
    slug: 'american-red-cross-blood-drive',
    title: 'American Red Cross Blood Drive @ Old Kinderhook Resort',
    excerpt: 'Partnering with The American Red Cross and Old Kinderhook Resort to support a life-saving blood drive.',
    category: 'Community Event',
    date: 'Jul 07, 2023',
    readTime: '2 min read',
    image: '/placeholder.jpg',`,
  `  {
    id: 'comm-2',
    slug: 'american-red-cross-blood-drive',
    title: 'American Red Cross Blood Drive @ Old Kinderhook Resort',
    excerpt: 'Partnering with The American Red Cross and Old Kinderhook Resort to support a life-saving blood drive.',
    category: 'Community Event',
    date: 'Jul 07, 2023',
    readTime: '2 min read',
    image: '/American Red Cross Blood Drive.jpg',
    images: ['/American Red Cross Blood Drive.jpg', '/American Red Cross Blood Drive2.jpg', '/American Red Cross Blood Drive Flyer.jpg'],`
);

content = content.replace(
  `  {
    id: 'comm-3',
    slug: 'the-changing-table-and-share-the-harvest',
    title: 'The Changing Table and Share the Harvest Feminine Products Drive',
    excerpt: 'We joined forces with Jessica Rozier to collect over 17,500 diapers and feminine supplies for low-income women in the area.',
    category: 'Community Event',
    date: 'Jun 30, 2023',
    readTime: '2 min read',
    image: '/placeholder.jpg',`,
  `  {
    id: 'comm-3',
    slug: 'the-changing-table-and-share-the-harvest',
    title: 'The Changing Table and Share the Harvest Feminine Products Drive',
    excerpt: 'We joined forces with Jessica Rozier to collect over 17,500 diapers and feminine supplies for low-income women in the area.',
    category: 'Community Event',
    date: 'Jun 30, 2023',
    readTime: '2 min read',
    image: '/The Changing Table1.jpg',
    images: ['/The Changing Table1.jpg', '/The Changing Table2.jpg', '/The Changing Table3.jpg', '/The Changing Table Diagram.jpg'],`
);

fs.writeFileSync('/Users/kylangillam/Downloads/guardian-insurance/constants.tsx', content, 'utf8');
