const fs = require('fs');

let content = fs.readFileSync('/Users/kylangillam/Downloads/guardian-insurance/constants.tsx', 'utf8');

const newContent = `export const ARTICLES: Article[] = [
  {
    id: 'blog-1',
    slug: 'avoid-parking-lot-accidents',
    title: 'Avoid Parking Lot Accidents',
    excerpt: 'Parking lots at the Lake – we love the convenience but hate the frustrations, especially when people are driving too fast or backing out blindly. Follow these 5 tips to stay safe.',
    category: 'Auto Insurance',
    date: 'Oct 15, 2023',
    readTime: '3 min read',
    image: '/Avoid Parking Lot Accidents.png',
    content: \`5 Ways to Avoid Parking Lot Fender Benders in the Lake of the Ozarks

Parking lots at the Lake – we love the convenience but hate the frustrations, especially when people are driving too fast, backing out of spots without looking and otherwise modeling bad parking lot behavior.

That behavior just so happens to be the cause of many a door ding and irritated driver. Even worse, careless behavior can cause a collision or injury. So, let’s all slow down and follow these five tips to make parking lots safer for everyone:

### 1. Don’t Speed
Speeding decreases the amount of time you have to react when a child runs out in front of you, another driver stops suddenly or a car begins backing out unexpectedly. Is a collision – or even a fatality – really worth the price of getting to your destination just a bit sooner?

### 2. Use Your Eyes – and Mirrors and Cameras
Keep a lookout for perils at all times, even if the lot seems empty. When you’re pulling into a spot, watch for doors being opened. When backing out, look all around, in your mirrors and in your rear-view camera and proceed slowly.

### 3. Give Yourself – and Others – Some Space
Parking in between the lines and in a spot sized for your vehicle may help to minimize dings and scratches. Better yet, park in a less-crowded area and enjoy the stroll into the store – just don’t park where you feel unsafe. And, always park away from stray carts.

### 4. Expect the Unexpected
Assume things will happen. That someone will dart out in front of you, that a cart will come rolling toward you, that someone backing out of his/her spot won’t see you backing out of yours. When you’re on guard, you’re better prepared for those who aren’t.

### 5. Be Respectful
A little kindness goes a long way in a parking lot or parking garage. So stop for pedestrians, don’t cause traffic jams waiting for a spot and, above all, don’t lose your cool.

Remember, when you’re watching for dangers, you have a better chance of avoiding them. If an incident does occur, we here at Guardian Insurance Group are ready to help.

At Guardian Insurance Group we are here in order to help you through life's troubles, from minor parking lot accidents like these to major life events. Call us at 573-410-1441 to have one of our licensed insurance agents show you how easy it is to Guard what you love.\`
  },
  {
    id: 'blog-2',
    slug: 'preventing-water-damage-in-your-home',
    title: 'Preventing Water Damage in Your Home',
    excerpt: 'One of the most disheartening experiences is to find flooding or extreme water damage to your treasured home. Use these tips to keep your house dry.',
    category: 'Home Insurance',
    date: 'Nov 02, 2023',
    readTime: '4 min read',
    image: '/Preventing Water Damage in Your Home.png',
    content: \`One of the most disheartening experiences is to find flooding or extreme water damage to your treasured home in Camdenton, MO.

At Guardian Insurance Group, we know you want to protect what’s important. That’s why we’re offering these tips to help you prevent many of the most common causes of water damage.

Just a little time and some effort can prevent a lot of heartache and hassle.

- Make sure your water pressure is not set too high. For just $6 or so, you can purchase a gauge that will help you test your pressure for the appropriate level, which should be set between 60 and 80 PSI.
- Standard hoses on new appliances are not as durable as they used to be. So check your appliances. If they’re rubber, either replace them with longer lasting stainless steel braided hoses or replace them every three years.
- Keep water from leaking into the walls or floor of your bathroom by replacing cracked tiles and re-grouting when it’s needed.
- Examine the shingles on your roof. Worn, curled or missing shingles allow water in, so replace them as soon as noticed.
- Consider buying a water alarm, which can help you find leaks, or automatic shut-off mechanisms, which can help avoid bursts.
- A lot of water damage occurs when you and your family are away from home. Make a practice to avoid running the washing machine or dishwasher while you’re out.
- When you leave for vacations, turn off the water supply to appliances.
- Keep up maintenance on all appliance hoses, because slow leaks from worn out hoses can cause major damage (and they are not covered under Homeowners insurance).

At Guardian Insurance Group, we hope these pointers will ensure your house stays nice and dry this year! 

### Contact Us!
At Guardian Insurance Group, we can work with you to make sure you've got the coverage you need, while at the same time using all possible credits and discounts to make that coverage affordable. Just give us a call at 573-410-1441. We want to help you meet your goals, and make sure what's important to you is protected!\`
  },
  {
    id: 'blog-3',
    slug: 'finding-the-perfect-boat-slip',
    title: 'Finding the Perfect Boat Slip',
    excerpt: 'Tired of hauling your boat to and from the Lake of the Ozarks? It might be time to rent a boat slip. Here are the benefits and how to find the best deal.',
    category: 'Boat Insurance',
    date: 'May 12, 2023',
    readTime: '4 min read',
    image: '/Finding the Perfect Boat Slip.jpg',
    content: \`If you’re an avid boating enthusiast and you’ve tired of the typically exhausting practice of hauling your boat to and from your favorite body of water like the Lake of the Ozarks, waiting in lines at launch ramps and winching it in and out every time you boat, it may be time to consider renting a boat slip.

Marina boat slips vary from one another, but all of them offer many advantages to boaters who spend a lot of time on the water. Some of their many benefits include:

- **Convenience.** It is much easier and more time-effective to dock your boat than to put it in and pull it out every time you go boating.
- **Security.** Marinas are generally very safe, protected by locked gates. Some marinas also offer 24/7 security via cameras or guards that patrol the marina grounds.
- **It’s ready when you are.** When your boat is docked, it’s always waiting for you when you’re ready to go.
- **Onsite amenities.** Most marinas have shops containing boating supplies and snacks, restrooms, shower facilities, restaurants and bars. They also tend to be surrounded by pleasant outdoor areas.
- **Community.** By having a slip in a marina, you reap the benefits of being a member of a social community.

While the advantages are numerous, boat slips are also notorious for being costly. Here are a few pointers for finding the best deal possible on a boat slip rental:

- **Shop, shop, shop.** There is no substitute for good, old fashioned bargain hunting, so invest time in shopping. Go talk to personnel at a variety of marinas in your area to start price comparing.
- **Use the Internet.** Websites like pickaslip.com allow you to do detailed searches for slips on a wide variety of popular bodies of water in the United States.
- **Advertise.** Put up a flyer on community boards at marinas, coffee shops, and anywhere else you have the opportunity; include what you’re seeking and how much you want to pay. You can also advertise in your local newspaper classifieds and on popular buy/sell websites like craigslist.org.
- **Talk it up.** Tell everyone you know what you’re looking for so they can help you spread the word.

If you think it’s time you start enjoying more time on the water and less hauling a boat to and from the water, we at Guardian Insurance Group wish you good luck in your search for the perfect slip!

Once you have that slip, give us a call at 573-410-1441 and talk to one of our licensed insurance agents about getting the best coverage possible for your possessions, including that fancy new boat slip.\`
  },
  {
    id: 'blog-4',
    slug: 'porch-lights-and-home-security',
    title: 'Porch Lights and Home Security',
    excerpt: 'Leaving your lights on — is it really a good way to keep burglars away, or does it attract them? Discover the light side of home security.',
    category: 'Home Security',
    date: 'Jul 28, 2023',
    readTime: '3 min read',
    image: '/Porch Lights and Home Security.png',
    content: \`The Light Side of Home Security

Leaving your lights on — is it really a good way to keep burglars away from your Camdenton home, or can it actually attract them? Or, is it just a “good” way to increase your electricity bill?

As with so many questions in life, there isn’t one “right” answer. Using lights to enhance your home security can be effective, especially as part of a larger overall strategy. With that in mind, here are five things to consider:

1. **Remember that variety is key.** If your exterior lights are always on, even during the day, that can be a signal to burglars that nobody is home. Otherwise, you’d probably turn off the lights after sunrise, right? Don’t leave your lights on constantly while you’re on vacation or at work. Use timers or lights that can be turned on and off remotely to create different looks.

2. **Try motion-detecting lights.** These allow you to leave your lights off while you’re away or asleep, but, if someone is lurking around your house, the lights will come on. This often will scare off a burglar.

3. **Consider your home’s surroundings.** If you have overgrown bushes or trees on your property, burglars might be able to take cover even in the light. And, if you live in a rural area, with nobody around to notice uninvited guests on your property, lights may not do much to thwart them.

4. **Connect with the neighbors.** Even if you do have neighbors nearby, would they know when something – or someone – was out of place? Build a relationship with them, so they’ll know when you’re at work or on vacation, and so they can tell when something doesn’t look right.

5. **Switch up your interior lights.** A house that’s dark inside for a few days looks unoccupied, no matter how many outside lights are on. So, remember to set timers or turn lights on in different rooms of your house occasionally as well. This can help create the illusion that someone is home.

Of course, there’s no one perfect way to keep your Camdenton home safe. The best strategies oftentimes involve a number of different deterrents. So, mix it up, with your lights and other things, to keep burglars guessing whether or not anyone’s home.

Proper use of your lights could keep your home secure, and our agents can help you protect your home from other perils. Call us today at 573-410-1441 and one of our licensed agents can show you how easy it is to have effective and affordable homeowner's insurance.\`
  },
  {
    id: 'blog-5',
    slug: 'cms-circle-of-champions',
    title: 'CMS Circle of Champions',
    excerpt: 'Nicolas Cofield achieves Marketplace Circle of Champions recognition for helping consumers gain qualified health coverage.',
    category: 'Company News',
    date: 'Nov 29, 2022',
    readTime: '2 min read',
    image: '/CMS Circle of Champions.png',
    content: \`Nicolas Cofield achieves Marketplace Circle of Champions recognition

November 29, 2022

Camdenton, MO — Nicolas Cofield has been recognized by the Health Insurance Marketplace® as a member of the 2023 Marketplace Circle of Champions for helping consumers gain qualified health coverage.  

This Centers for Medicare & Medicaid Services (CMS) award highlights Nick's success in actively enrolling 20 or more consumers during this Open Enrollment Period and demonstrates his expertise and experience in helping consumers find health coverage.

“Agents and brokers are key partners to CMS in our shared goals of helping expand access to coverage for Americans,” said Ellen Montz, Director of the Center for Consumer Information & Insurance Oversight within CMS, which oversees the Marketplace. “We thank Nicolas Cofield for his dedication to providing exceptional service and helping access coverage.”

This year’s Open Enrollment Period for applying for Marketplace coverage runs from Nov. 1, 2022, to Jan. 15, 2023. Consumers with questions about their coverage or who would like help enrolling can contact Nicolas Cofield at 573-410-1441.

### What is the Marketplace Circle of Champions?
CMS created the Marketplace Circle of Champions program to commemorate the hard work and commitment of Marketplace-registered agents and brokers throughout America. This award recognizes agents and brokers who have actively enrolled 20 or more consumers. Each year, thousands of agents and brokers reach the Marketplace Circle of Champions, highlighting their hard work, expertise, and service.\`
  }
];

export const COMMUNITY_POSTS = [
  {
    id: 'comm-1',
    slug: '3rd-annual-diaper-drive-golf-tournament',
    title: '3rd Annual Diaper Drive Golf Tournament',
    excerpt: 'Guardian Insurance Group participated in the Changing Table\\'s 3rd Annual Diaper Drive golf tournament in Osage Beach, MO.',
    category: 'Community Event',
    date: 'Aug 15, 2023',
    readTime: '1 min read',
    image: '/placeholder.jpg',
    content: \`Hosted By The Changing Table

Guardian Insurance Group recently participated in the Changing Table's 3rd Annual Diaper Drive golf tournament in Osage Beach, MO. Mark and his team placed 2nd place in the tournament's B flight!  

We are proud to have a great tie with organizations who are so dedicated to supporting our local community, and we are already looking forward to the next one!\`
  },
  {
    id: 'comm-2',
    slug: 'american-red-cross-blood-drive',
    title: 'American Red Cross Blood Drive @ Old Kinderhook Resort',
    excerpt: 'Partnering with The American Red Cross and Old Kinderhook Resort to support a life-saving blood drive.',
    category: 'Community Event',
    date: 'Jul 07, 2023',
    readTime: '2 min read',
    image: '/placeholder.jpg',
    content: \`We have decided to partner with The American Red Cross and Old Kinderhook Resort by taking part in supporting a blood drive that can and will save the lives of those in need. Currently, The American Red Cross is facing a nation-wide blood shortage, and we want to do our part to save as many lives as possible by donating. 

This blood drive runs from July 7th to the 31st, so please consider donating to this cause. You can contact The American Red Cross to schedule an appointment to give at the time that is best for you. 

Also, all who donate within this time frame will receive an Amazon.com Gift Card by email, and 3 lucky winners will receive free gasoline for a year! With the way those prices have gone up, now's a great time to take the chance of winning!\`
  },
  {
    id: 'comm-3',
    slug: 'the-changing-table-and-share-the-harvest',
    title: 'The Changing Table and Share the Harvest Feminine Products Drive',
    excerpt: 'We joined forces with Jessica Rozier to collect over 17,500 diapers and feminine supplies for low-income women in the area.',
    category: 'Community Event',
    date: 'Jun 30, 2023',
    readTime: '2 min read',
    image: '/placeholder.jpg',
    content: \`In a partnership with The Changing Table and Share the Harvest Food Pantry, we at Guardian Insurance Group took part in a drive to collect feminine products to support low-income women in the area. 

It was our pleasure to join forces with Jessica Rozier, the head of The Changing Table in an effort that collected over 17,500 diapers and feminine supplies during the month of June. 

This drive was the beginning of what we hope to be a fruitful partnership that will truly impact the lives of so many women who are impacted by the often overlooked issue of finding enough supplies for their infants and periods.\`
  }
];
`;

const startIndex = content.indexOf('export const ARTICLES: Article[] = [');
if (startIndex !== -1) {
  content = content.substring(0, startIndex) + newContent;
  fs.writeFileSync('/Users/kylangillam/Downloads/guardian-insurance/constants.tsx', content, 'utf8');
}
