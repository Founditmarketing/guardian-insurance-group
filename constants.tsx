import { Home, Car, Building2, User, Umbrella, HeartHandshake, Briefcase, Truck, Anchor, Heart, Shield, Key } from 'lucide-react';
import { Service, TeamMember, Testimonial, TrustLogo, ClaimContact, Article, NavLink } from './types';

export const PHONE_NUMBER = "(573) 410-1441";
export const FAX_NUMBER = "(573) 410-3339";
export const ADDRESS = "257 N Business Rte 5, Camdenton, MO 65020";
export const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=257%20N%20Business%20Route%205,%20Camdenton,%20MO%2065020&t=&z=13&ie=UTF8&iwloc=&output=embed";

export const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '/' },
  { 
    label: 'ABOUT US', 
    href: '/about',
    sublinks: [
      { label: 'OUR TEAM', href: '/about' },
      { label: 'BLOG', href: '/blog' },
      { label: 'COMMUNITY INVOLVEMENT', href: '/community-involvement' }
    ]
  },
  {
    label: 'PRODUCTS',
    href: '/services',
    sublinks: [
      { label: 'BOAT INSURANCE', href: '/products/boat-insurance' },
      { label: 'CAR INSURANCE', href: '/products/car-insurance' },
      { label: 'CONDO INSURANCE', href: '/products/condo-insurance' },
      { label: 'HEALTH INSURANCE', href: '/products/health-insurance' },
      { label: 'HOME INSURANCE', href: '/products/home-insurance' },
      { label: 'LIFE INSURANCE', href: '/products/life-insurance' },
      { label: 'MOTORCYCLE INSURANCE', href: '/products/motorcycle-insurance' },
      { label: 'RENTERS INSURANCE', href: '/products/renters-insurance' },
      { label: 'UMBRELLA INSURANCE', href: '/products/umbrella-insurance' },
      { label: 'BUSINESS INSURANCE', href: '/products/business-insurance' },
      { label: 'COMMERCIAL AUTO INSURANCE', href: '/products/commercial-auto-insurance' },
    ]
  },
  { label: 'REVIEWS', href: '/reviews' },
  { label: 'CONTACT US', href: '/contact' },
  { label: 'POLICY QUESTIONS', href: '/policy-questions' },
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/NienhueserAgency/"
};

export const SERVICES: Service[] = [
  {
    id: 'boat',
    title: 'Boat Insurance',
    description: 'Protect your watercraft and enjoy peace of mind on the water.',
    icon: Anchor,
    category: 'personal',
    image: '/boat insurance.png'
  },
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'Drive with confidence knowing you have the right liability and collision protection.',
    icon: Car,
    category: 'personal',
    image: '/car insurance.png'
  },
  {
    id: 'condo',
    title: 'Condo Insurance',
    description: 'Protect your condo and belongings with tailored coverage.',
    icon: Building2,
    category: 'personal',
    image: '/condo insurance.png'
  },
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Secure the best health coverage for you and your family.',
    icon: Heart,
    category: 'personal',
    image: '/health insurance.png'
  },
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Protect your biggest investment with comprehensive coverage tailored to your needs.',
    icon: Home,
    category: 'personal',
    image: '/home insurance.png'
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Secure your family’s financial future tailored to your specific life stage.',
    icon: User,
    category: 'personal',
    image: '/GIGlifeinsurance.jpg'
  },
  {
    id: 'motorcycle',
    title: 'Motorcycle Insurance',
    description: 'Ride safely knowing you have the right protection.',
    icon: Shield,
    category: 'personal',
    image: '/GIGmotorcycleinsurance.jpg'
  },
  {
    id: 'renters',
    title: 'Renters Insurance',
    description: 'Protect your personal property and liability as a renter.',
    icon: Key,
    category: 'personal',
    image: '/renters insurance.png'
  },
  {
    id: 'umbrella',
    title: 'Umbrella Insurance',
    description: 'Extra liability coverage that goes beyond the limits of your homeowners or auto insurance.',
    icon: Umbrella,
    category: 'personal',
    image: '/umbrella insurance.png'
  },
  {
    id: 'business',
    title: 'Business Insurance',
    description: 'Comprehensive protection for your business operations.',
    icon: Briefcase,
    category: 'commercial',
    image: '/commercial insurance.png'
  },
  {
    id: 'commercial-auto',
    title: 'Commercial Auto',
    description: 'Coverage for your work trucks, delivery vans, and fleet vehicles.',
    icon: Truck,
    category: 'commercial',
    image: '/commercial auto insurance.png'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'mark',
    name: 'Mark Nienhueser',
    role: 'Golfer, Reader, Owner',
    image: '/Mark Nienhueser.jpg',
    description: 'Mark is co-owner of Guardian Insurance Group and is constantly working to provide clients with best-in-class care in the Medicare and life insurance fields. He has a real drive for helping others, and even does house calls on a regular basis to better serve his clients. When he is not busy serving his clients, Mark enjoys golfing and spending time at home with his 4 children and 3 grand children. Also, Mark reads constantly and is always looking for another way to improve himself as a business owner, leader, and person.',
  },
  {
    id: 'paula',
    name: 'Paula Nienhueser',
    role: 'Philanthropist, Grandmother, Owner',
    image: '/Paula Nienhueser.png',
    description: 'Paula is co-owner of Guardian Insurance Group and is the driving force behind our latest expansion in the areas of property insurance. Whatever you need to protect, from your car, your home, to even your pets, Paula is the one who knows how to get it done! While not in the office, Paula puts her heart into community service. She is constantly looking for ways to benefit the Camdenton area by taking part in different drives to support local non-profits, such as Share the Harvest Food Pantry, Suits For Soldiers and The Changing Table. At home Paula loves spending time with her grandchildren, who she loves to show off pictures of at the office.',
  },
  {
    id: 'tammi',
    name: 'Tammi Martin',
    role: 'Wanderer, Rodeo Fan, Agent',
    image: '/Tammi Martin.jpg',
    description: 'Tammi is the rock of Guardian Insurance Group. As our longest-retained agent, Tammi has a great relationship with our clients and is always there to provide them with the best service possible. When visiting our office, Tammi will be the one waiting by the door to greet you. Outside of work, Tammi loves to travel. She goes on long road trips and goes camping with her family as often as she can. She has 3 children who all have children of their own, so that makes her a very busy grandma! When her family and the open road aren\'t taking her attention, Tammi enjoys going to the rodeo, which her family has an extensive background with.',
  },
  {
    id: 'dustin',
    name: 'Dustin Carver',
    role: 'Proud Dad, Sports Enthusiast, Agent',
    image: '/Dustin Carver.png',
    description: 'Dustin was brought into the agency to expand our growth into the field of property insurance. While new to the industry, Dustin has shown a passion for helping others and uses it to ensure that every client gets the best rates and coverage possible. Outside of work, Dustin loves to spend time with his two boys ages 5 and 2, and of course with his wife Amber! In his free time he likes to deer hunt, watch football, read and play Xbox with his friends. Dustin likes to meet new people and have a nice chat about his Packers and MIZZOU team.',
  },
  {
    id: 'dianne',
    name: 'Dianne Tucker',
    role: 'Volunteer, Customer Representative',
    image: '/Dianne Tucker.jpg',
    description: 'Dianne works tirelessly at Guardian Insurance Group to make each and every one of our clients knows that they aren\'t forgotten. If you\'ve ever had a happy birthday call from us, you can thank Dianne for that. Her optimistic attitude reminds us all that if you love what you do, then you never have to call it work. When not in the office, Dianne loves life at the lake! Every summer she always has company coming to visit and she enjoys taking them out on the water for some fun. She also volunteered at a local hospital, providing help wherever she can.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "The agents are all very helpful. Explain our options, so we understand & can make the best decision for our needs. They call & check w us before policies renew. My husband & I are both very happy with Guardian Ins Group, Paula, Mark & their agents are the best!",
    author: "Holly James",
    location: "Verified Client",
    avatar: "https://i.pravatar.cc/150?u=holly"
  },
  {
    id: '2',
    text: "I wanted to express my sincere appreciation for the excellent service Dustin Carver has provided my husband and me over the past year. He has consistently secured competitive rates for us and offered friendly, personalized support. I especially value his proactive communication, always keeping me informed about policy updates and checking in to see if I have any questions. The entire team is trustworthy and professional, and I would highly recommend their services to anyone.",
    author: "Tina Ives",
    location: "Verified Client",
    avatar: "https://i.pravatar.cc/150?u=tina"
  },
  {
    id: '3',
    text: "I switched to Guardian a year ago. They always go above and beyond for their customers. When my policy is due to renew, they shop around to see if there is a better option. Paula is very knowledgeable about Medicare options.",
    author: "Marilyn Allen",
    location: "Verified Client",
    avatar: "https://i.pravatar.cc/150?u=marilyn"
  },
  {
    id: '4',
    text: "I have been a client of Mark & Paula’s for 4 years and they have done a wonderful job of not only putting us on great coverage but have been proactive to inform me if my coverage isn’t going to perform as well in the market for the upcoming year. This type of customer service is really hard to find! If you want a real Guardian, contact the Guardian Group, they live up to their business name.",
    author: "Jason Avery",
    location: "Verified Client",
    avatar: "https://i.pravatar.cc/150?u=jason"
  },
  {
    id: '5',
    text: "I would like to take a moment and say thank you to Paula and her staff. Paula was able to provide a tailored policy to fit my needs and assisted me throughout the process and kept me up to date as things changed. This was extremely valuable as I resided out of state. Thank you to Paula and her staff for the customer service.",
    author: "Thomas Kitson",
    location: "Verified Client",
    avatar: "https://i.pravatar.cc/150?u=thomas"
  },
  {
    id: '6',
    text: "Paula and Mark Nienhueser are the best agents I have ever worked with. They found my husband I and I the best policy for us for the best price. They are so easy to work with and truly care for their customers. They are a hardworking duo and truly seek out what is best for their customers. I will continue to recommend their insurance group to our family and friends.",
    author: "Clarissa Taylor",
    location: "Verified Client",
    avatar: "https://i.pravatar.cc/150?u=clarissa"
  },
  {
    id: '7',
    text: "Paula was absolutely amazing. She fielded every one of our questions and we never felt rushed or that our questions were a bother. And her prices were better than any other carriers for home and auto insurance. I would highly recommend her to anyone looking for home and auto insurance.",
    author: "Meredith “Kit” Bromfield",
    location: "Verified Client"
  },
  {
    id: '8',
    text: "Paula was a pleasure to work with. Not only did she answer all of the questions we had in regards to our personal lines, but she was also able to save us a ton of money compared to our previous carrier. Thanks, Paula!",
    author: "Michael Snyder",
    location: "Verified Client"
  },
  {
    id: '9',
    text: "I have used the Guardian Group in Camdenton for over 3 years. I trust their ability to help me make good decisions on investments, home insurance, car insurance and Medicare. They are a one stop shop, always having time to discuss your policies or to make changes. I recently made my 1st home claim and they helped me through the process. I highly recommend them !",
    author: "Vicky Starke",
    location: "Verified Client"
  },
  {
    id: '10',
    text: "Paula and Mark have done and excellent job! We can't thank them enough for all the hard work. They continue to provide all the answers to our questions and always have a moment to listen. I'd highly recommend and thank you once again.",
    author: "Drake Cheek",
    location: "Verified Client"
  },
  {
    id: '11',
    text: "Great experience! Very knowledgeable agents that listened to what I wanted and got me some great quotes quickly!",
    author: "Tawni Konwinski",
    location: "Verified Client"
  },
  {
    id: '12',
    text: "This couple is amazing. Very kind and helpful. And check on me after I had a small incident with a deer. Highly suggest them.",
    author: "Judy Zickefoose",
    location: "Verified Client"
  },
  {
    id: '13',
    text: "From my experience with Guardian Insurance Group - Nienhueser Agency, they have your best interest at heart. Auto and home insurance may not be the most exciting thing to deal with, but the agents worked hard to find the right solution for my needs. They are like family!",
    author: "Chase Dempsey",
    location: "Verified Client"
  }
];

export const CARRIERS: TrustLogo[] = [
  { id: '1', name: 'Progressive', url: 'https://logo.clearbit.com/progressive.com' },
  { id: '2', name: 'Travelers', url: 'https://logo.clearbit.com/travelers.com' },
  { id: '3', name: 'Liberty Mutual', url: 'https://logo.clearbit.com/libertymutual.com' },
  { id: '4', name: 'Safeco', url: 'https://logo.clearbit.com/safeco.com' },
  { id: '5', name: 'Allstate', url: 'https://logo.clearbit.com/allstate.com' },
  { id: '6', name: 'Foremost', url: 'https://logo.clearbit.com/foremost.com' },
];

export const STATS = [
  { label: "Years of Experience", value: 39, suffix: "+" },
  { label: "Families Protected", value: 4500, suffix: "+" },
  { label: "Carriers Available", value: 100, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
];

export const FAQS = [
  {
    question: "Do I need flood insurance if I'm not in a flood zone?",
    answer: "Yes, more than 20% of flood claims come from properties outside high-risk zones. Standard homeowners policies do not cover flood damage, which is crucial in Missouri."
  },
  {
    question: "How can I lower my auto insurance premiums?",
    answer: "Bundling your home and auto is the easiest way. We can also look at raising deductibles, telematics safe-driving programs, or applying good student discounts."
  },
  {
    question: "What does 'Independent Agency' actually mean?",
    answer: "It means we don't work for one specific insurance company (like State Farm or Geico). We work for you, shopping across 100+ carriers to find the best fit for your specific needs."
  },
  {
    question: "How long does it take to get a quote?",
    answer: "For most auto and home policies, we can get you a preliminary quote within the same business day. Commercial quotes may take slightly longer depending on complexity."
  }
];

// --- NEW DATA ---

export const CLAIM_CONTACTS: ClaimContact[] = [
  {
    id: 'progressive',
    name: 'Progressive',
    logo: 'https://logo.clearbit.com/progressive.com',
    phone: '1-800-776-4737',
    onlineLink: 'https://www.progressive.com/claims/'
  },
  {
    id: 'travelers',
    name: 'Travelers',
    logo: 'https://logo.clearbit.com/travelers.com',
    phone: '1-800-252-4633',
    onlineLink: 'https://www.travelers.com/claims'
  },
  {
    id: 'safeco',
    name: 'Safeco',
    logo: 'https://logo.clearbit.com/safeco.com',
    phone: '1-800-332-3226',
    onlineLink: 'https://www.safeco.com/claims'
  },
  {
    id: 'liberty',
    name: 'Liberty Mutual',
    logo: 'https://logo.clearbit.com/libertymutual.com',
    phone: '1-800-225-2467',
    onlineLink: 'https://www.libertymutual.com/claims'
  },
  {
    id: 'foremost',
    name: 'Foremost',
    logo: 'https://logo.clearbit.com/foremost.com',
    phone: '1-800-527-3907',
    onlineLink: 'https://www.foremost.com/claims/'
  },
  {
    id: 'statefarm',
    name: 'State Farm',
    logo: 'https://logo.clearbit.com/statefarm.com',
    phone: '1-800-782-8332',
    onlineLink: 'https://www.statefarm.com/claims'
  },
  {
    id: 'geico',
    name: 'GEICO',
    logo: 'https://logo.clearbit.com/geico.com',
    phone: '1-800-841-3000',
    onlineLink: 'https://www.geico.com/claims/'
  },
  {
    id: 'allstate',
    name: 'Allstate',
    logo: 'https://logo.clearbit.com/allstate.com',
    phone: '1-800-255-7828',
    onlineLink: 'https://www.allstate.com/claims'
  },
  {
    id: 'usaa',
    name: 'USAA',
    logo: 'https://logo.clearbit.com/usaa.com',
    phone: '1-800-531-8722',
    onlineLink: 'https://www.usaa.com/inet/wc/claims-center'
  },
  {
    id: 'national-general',
    name: 'National General',
    logo: 'https://logo.clearbit.com/nationalgeneral.com',
    phone: '1-800-468-3466',
    onlineLink: 'https://www.nationalgeneral.com/claims/'
  },
  {
    id: 'farm-bureau',
    name: 'Missouri Farm Bureau',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Farm_Bureau_logo.svg/1200px-Farm_Bureau_logo.svg.png',
    phone: '1-855-325-6697',
    onlineLink: 'https://www.lafarmbureau.com/claims'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'blog-1',
    slug: 'avoid-parking-lot-accidents',
    title: 'Avoid Parking Lot Accidents',
    excerpt: 'Parking lots at the Lake – we love the convenience but hate the frustrations, especially when people are driving too fast or backing out blindly. Follow these 5 tips to stay safe.',
    category: 'Auto Insurance',
    readTime: '3 min read',
    image: '/Avoid Parking Lot Accidents.png',
    content: `5 Ways to Avoid Parking Lot Fender Benders in the Lake of the Ozarks

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

At Guardian Insurance Group we are here in order to help you through life's troubles, from minor parking lot accidents like these to major life events. Call us at 573-410-1441 to have one of our licensed insurance agents show you how easy it is to Guard what you love.`
  },
  {
    id: 'blog-2',
    slug: 'preventing-water-damage-in-your-home',
    title: 'Preventing Water Damage in Your Home',
    excerpt: 'One of the most disheartening experiences is to find flooding or extreme water damage to your treasured home. Use these tips to keep your house dry.',
    category: 'Home Insurance',
    readTime: '4 min read',
    image: '/Preventing Water Damage in Your Home.png',
    content: `One of the most disheartening experiences is to find flooding or extreme water damage to your treasured home in Camdenton, MO.

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
At Guardian Insurance Group, we can work with you to make sure you've got the coverage you need, while at the same time using all possible credits and discounts to make that coverage affordable. Just give us a call at 573-410-1441. We want to help you meet your goals, and make sure what's important to you is protected!`
  },
  {
    id: 'blog-3',
    slug: 'finding-the-perfect-boat-slip',
    title: 'Finding the Perfect Boat Slip',
    excerpt: 'Tired of hauling your boat to and from the Lake of the Ozarks? It might be time to rent a boat slip. Here are the benefits and how to find the best deal.',
    category: 'Boat Insurance',
    readTime: '4 min read',
    image: '/Finding the Perfect Boat Slip.jpg',
    content: `If you’re an avid boating enthusiast and you’ve tired of the typically exhausting practice of hauling your boat to and from your favorite body of water like the Lake of the Ozarks, waiting in lines at launch ramps and winching it in and out every time you boat, it may be time to consider renting a boat slip.

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

Once you have that slip, give us a call at 573-410-1441 and talk to one of our licensed insurance agents about getting the best coverage possible for your possessions, including that fancy new boat slip.`
  },
  {
    id: 'blog-4',
    slug: 'porch-lights-and-home-security',
    title: 'Porch Lights and Home Security',
    excerpt: 'Leaving your lights on — is it really a good way to keep burglars away, or does it attract them? Discover the light side of home security.',
    category: 'Home Security',
    readTime: '3 min read',
    image: '/Porch Lights and Home Security.png',
    content: `The Light Side of Home Security

Leaving your lights on — is it really a good way to keep burglars away from your Camdenton home, or can it actually attract them? Or, is it just a “good” way to increase your electricity bill?

As with so many questions in life, there isn’t one “right” answer. Using lights to enhance your home security can be effective, especially as part of a larger overall strategy. With that in mind, here are five things to consider:

1. **Remember that variety is key.** If your exterior lights are always on, even during the day, that can be a signal to burglars that nobody is home. Otherwise, you’d probably turn off the lights after sunrise, right? Don’t leave your lights on constantly while you’re on vacation or at work. Use timers or lights that can be turned on and off remotely to create different looks.

2. **Try motion-detecting lights.** These allow you to leave your lights off while you’re away or asleep, but, if someone is lurking around your house, the lights will come on. This often will scare off a burglar.

3. **Consider your home’s surroundings.** If you have overgrown bushes or trees on your property, burglars might be able to take cover even in the light. And, if you live in a rural area, with nobody around to notice uninvited guests on your property, lights may not do much to thwart them.

4. **Connect with the neighbors.** Even if you do have neighbors nearby, would they know when something – or someone – was out of place? Build a relationship with them, so they’ll know when you’re at work or on vacation, and so they can tell when something doesn’t look right.

5. **Switch up your interior lights.** A house that’s dark inside for a few days looks unoccupied, no matter how many outside lights are on. So, remember to set timers or turn lights on in different rooms of your house occasionally as well. This can help create the illusion that someone is home.

Of course, there’s no one perfect way to keep your Camdenton home safe. The best strategies oftentimes involve a number of different deterrents. So, mix it up, with your lights and other things, to keep burglars guessing whether or not anyone’s home.

Proper use of your lights could keep your home secure, and our agents can help you protect your home from other perils. Call us today at 573-410-1441 and one of our licensed agents can show you how easy it is to have effective and affordable homeowner's insurance.`
  },
  {
    id: 'blog-5',
    slug: 'cms-circle-of-champions',
    title: 'CMS Circle of Champions',
    excerpt: 'Nicolas Cofield achieves Marketplace Circle of Champions recognition for helping consumers gain qualified health coverage.',
    category: 'Company News',
    date: 'Nov 29, 2022',
    readTime: '2 min read',
    image: '/CMS Circle of Champions! (thumbnail).png',
    content: `Nicolas Cofield achieves Marketplace Circle of Champions recognition

November 29, 2022

Camdenton, MO — Nicolas Cofield has been recognized by the Health Insurance Marketplace® as a member of the 2023 Marketplace Circle of Champions for helping consumers gain qualified health coverage.  

This Centers for Medicare & Medicaid Services (CMS) award highlights Nick's success in actively enrolling 20 or more consumers during this Open Enrollment Period and demonstrates his expertise and experience in helping consumers find health coverage.

“Agents and brokers are key partners to CMS in our shared goals of helping expand access to coverage for Americans,” said Ellen Montz, Director of the Center for Consumer Information & Insurance Oversight within CMS, which oversees the Marketplace. “We thank Nicolas Cofield for his dedication to providing exceptional service and helping access coverage.”

This year’s Open Enrollment Period for applying for Marketplace coverage runs from Nov. 1, 2022, to Jan. 15, 2023. Consumers with questions about their coverage or who would like help enrolling can contact Nicolas Cofield at 573-410-1441.

### What is the Marketplace Circle of Champions?
CMS created the Marketplace Circle of Champions program to commemorate the hard work and commitment of Marketplace-registered agents and brokers throughout America. This award recognizes agents and brokers who have actively enrolled 20 or more consumers. Each year, thousands of agents and brokers reach the Marketplace Circle of Champions, highlighting their hard work, expertise, and service.`
  }
];

export const COMMUNITY_POSTS = [
  {
    id: 'comm-1',
    slug: '3rd-annual-diaper-drive-golf-tournament',
    title: '3rd Annual Diaper Drive Golf Tournament',
    excerpt: 'Guardian Insurance Group participated in the Changing Table\'s 3rd Annual Diaper Drive golf tournament in Osage Beach, MO.',
    category: 'Community Event',
    readTime: '1 min read',
    image: '/3rd Annual Diaper Drive Tournament.jpg',
    images: ['/3rd Annual Diaper Drive Tournament.jpg'],
    content: `Hosted By The Changing Table

Guardian Insurance Group recently participated in the Changing Table's 3rd Annual Diaper Drive golf tournament in Osage Beach, MO. Mark and his team placed 2nd place in the tournament's B flight!  

We are proud to have a great tie with organizations who are so dedicated to supporting our local community, and we are already looking forward to the next one!`
  },
  {
    id: 'comm-2',
    slug: 'american-red-cross-blood-drive',
    title: 'American Red Cross Blood Drive @ Old Kinderhook Resort',
    excerpt: 'Partnering with The American Red Cross and Old Kinderhook Resort to support a life-saving blood drive.',
    category: 'Community Event',
    readTime: '2 min read',
    image: '/American Red Cross Blood Drive.jpg',
    images: ['/American Red Cross Blood Drive.jpg', '/American Red Cross Blood Drive2.jpg', '/American Red Cross Blood Drive Flyer.jpg'],
    content: `We have decided to partner with The American Red Cross and Old Kinderhook Resort by taking part in supporting a blood drive that can and will save the lives of those in need. Currently, The American Red Cross is facing a nation-wide blood shortage, and we want to do our part to save as many lives as possible by donating. 

This blood drive runs from July 7th to the 31st, so please consider donating to this cause. You can contact The American Red Cross to schedule an appointment to give at the time that is best for you. 

Also, all who donate within this time frame will receive an Amazon.com Gift Card by email, and 3 lucky winners will receive free gasoline for a year! With the way those prices have gone up, now's a great time to take the chance of winning!`
  },
  {
    id: 'comm-3',
    slug: 'the-changing-table-and-share-the-harvest',
    title: 'The Changing Table and Share the Harvest Feminine Products Drive',
    excerpt: 'We joined forces with Jessica Rozier to collect over 17,500 diapers and feminine supplies for low-income women in the area.',
    category: 'Community Event',
    readTime: '2 min read',
    image: '/The Changing Table1.jpg',
    images: ['/The Changing Table1.jpg', '/The Changing Table2.jpg', '/The Changing Table3.jpg', '/The Changing Table Diagram.jpg'],
    content: `In a partnership with The Changing Table and Share the Harvest Food Pantry, we at Guardian Insurance Group took part in a drive to collect feminine products to support low-income women in the area. 

It was our pleasure to join forces with Jessica Rozier, the head of The Changing Table in an effort that collected over 17,500 diapers and feminine supplies during the month of June. 

This drive was the beginning of what we hope to be a fruitful partnership that will truly impact the lives of so many women who are impacted by the often overlooked issue of finding enough supplies for their infants and periods.`
  }
];
