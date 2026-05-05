const fs = require('fs');

let content = fs.readFileSync('/Users/kylangillam/Downloads/guardian-insurance/constants.tsx', 'utf8');
const newData = fs.readFileSync('/Users/kylangillam/Downloads/guardian-insurance/scratch-data.js', 'utf8');

const newArticlesContent = newData.split('export const NEW_ARTICLES = [')[1].split('export const COMMUNITY_POSTS = [')[0].trim().replace(/\];$/, '');
const communityPostsContent = 'export const COMMUNITY_POSTS = [' + newData.split('export const COMMUNITY_POSTS = [')[1];

// Update NAV_LINKS
content = content.replace(
  "  { label: 'ABOUT US', href: '/about' },",
  `  { 
    label: 'ABOUT US', 
    href: '/about',
    sublinks: [
      { label: 'OUR TEAM', href: '/about' },
      { label: 'BLOG', href: '/blog' },
      { label: 'COMMUNITY INVOLVEMENT', href: '/community-involvement' }
    ]
  },`
);

// Append NEW_ARTICLES to existing ARTICLES
content = content.replace(/  \},\n\];/g, "  }," + (newArticlesContent ? "," + newArticlesContent : "") + "];");

// Append COMMUNITY_POSTS to EOF
content += '\n\n' + communityPostsContent;

fs.writeFileSync('/Users/kylangillam/Downloads/guardian-insurance/constants.tsx', content, 'utf8');
