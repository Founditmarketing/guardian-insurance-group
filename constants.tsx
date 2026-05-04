import { Home, Car, Building2, User, Umbrella, HeartHandshake, Briefcase, Truck, Anchor, Heart, Shield, Key } from 'lucide-react';
import { Service, TeamMember, Testimonial, TrustLogo, ClaimContact, Article, NavLink } from './types';

export const PHONE_NUMBER = "(573) 410-1441";
export const FAX_NUMBER = "(573) 410-3339";
export const ADDRESS = "257 N Business Rte 5, Camdenton, MO 65020";
export const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=257%20N%20Business%20Route%205,%20Camdenton,%20MO%2065020&t=&z=13&ie=UTF8&iwloc=&output=embed";

export const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
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
  { label: 'CONTACT US', href: '/contact' },
  { label: 'POLICY QUESTIONS', href: '/policy-questions' },
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/1st.insurance/"
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
    category: 'personal'
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
    image: '/commercial auto.png'
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
    id: '1',
    slug: 'what-is-flood-insurance',
    title: 'What Is Flood Insurance? Should I Buy It?',
    excerpt: 'Flood insurance. Lots of insurance companies mention it on their sites, and you might have heard about it, but what is it? And why do I need it?',
    category: 'Flood Insurance',
    date: 'Mar 25, 2023',
    readTime: '5 min read',
    image: '/iStock_155384211_-scaled.jpg.optimal.jpg',
    content: `Flood insurance. Lots of insurance companies mention it on their sites, and you might have heard about it, from a TV ad or a casual remark from a friend, but what is it? And why do I need it? I’m glad you asked. In this article, we’ll talk about the basics of flood insurance, what it is, how it works, and what it can do for you.

### An Unexpected Crisis
On their website, the Federal Emergency Management Agency states that floods can “happen anywhere” and that just one inch of floodwater can end up costing anywhere from $25,000 to $60,000 and possibly more in repairs depending on your situation. Like it or not, a “small” flood can cause a massive amount of damage. Once water enters your home, it can completely ruin furniture and personal belongings. A few inches of water can make it so your home is uninhabitable. Even if it can be cleaned and repaired, the drywall of your home can become infested with mold, the foundation can be ruined, and a small flood can do just as much damage to your yard, causing plants to rot and water to become stagnant and infected with mosquitos. Additionally, depending on circumstance, your electrical systems may no longer function and your water supply could become contaminated. These are just a few possible outcomes of a flood, and none of them are particularly pleasant, especially if you’re unprepared. You can see what I’ve been leading you to: Floods be bad. But they don’t have to be, because there’s a way to get you out of this situation. And that brings us to our first point.

### Flood Insurance Keeps You Out of Tough Situations
Flood Insurance, depending on your source, is a term that can mean a variety of specific insurance coverages ranging from short-term “padding” coverages to longer-lasting extensive frameworks that can help provide needed relief to individuals in increasingly dire situations. The National Flood Insurance Program defines a standard policy as “a single-peril (flood) policy that pays for direct physical damage to your insured property up to the replacement cost or Actual Cash Value (ACV) (See “How Flood Damages Are Valued”) of the actual damages or the policy limit of liability, whichever is less.” In this kind of policy, contents coverage must be purchased separately. They are also usually not valued policies (they don’t pay the limit of liability for a total loss), and are not always guaranteed replacement cost policies. That being said, flood insurance can still be just as expansive and beneficial as standard home insurance. Acquiring flood insurance can provide you with lasting and incredible impactful benefits. Surveying agency and flood methodologist agency Risk Factor has this advice on the subject: “Flood insurance is one of the best ways to protect against financial losses caused by flood events as it enables people to recover more quickly and completely. It goes on to state that “everyone should consider buying a flood insurance policy even if it is not required, as most homeowners and renters insurance policies do not cover flood damages.” If you acquire lasting flood insurance, you will be ensured that you will be protected against any flood damages that could come from Missouri or surrounding states’ often harsh weather climates. A claim can be filed during any period of loss, and we’ll make good on our promise. You won’t need to rely on your personal savings, or run the risk of taking out a massive loan and going into debt, because we’ll handle it for you.`
  },
  {
    id: '2',
    slug: 'how-guardian-insurance-group-helps-you',
    title: 'How Guardian Insurance Group Helps You Make the Right Decision for You and Your Family',
    excerpt: 'Finding insurance isn’t as easy as commercials tell you. We’re local people here to help you navigate the process with trust and transparency.',
    category: 'Company News',
    date: 'Mar 10, 2023',
    readTime: '4 min read',
    image: '/How Guardian Insurance Group Helps You Make the Right Decision for You and Your Family .png',
    content: `Let’s be honest – finding insurance isn’t as easy as a lot of commercials and ads tell you it is. The entire process can often be convoluted. For some people, it can even feel like walking into a trap. Not only that, but as they try to work out the legal odds and ends, they often end up racking their brains, wondering why they did this in the first place. Sometimes, they think “Is it even worth it?”. It’s hard, but we’re here to help. We’re not just some big corporation that’s all over the United States.  Our staff – the owner Blake Knowles, and the wonderful office managers, agents, receptionists, and executives at this company are local, hardworking, patriotic, Americans with families. We’re ordinary people, just like you. We may be small, but we have service as good as the best of them. Today, we hope to show you how important it is to have an insurance provider you truly trust, who will provide you with easy, affordable, and rewarding help as you decide what is best for you and your family.

### Comparing Competitive Prices
A lot of insurance agencies, even the majority, don’t advertise or even consider any services other than their own. Obviously, this initially makes sense from a business perspective. But collaborating with other companies doesn’t have to mean losing out on profit, lessening customer service, or even being at a disadvantage. On the contrary, by working with other companies not only have we been able to enhance our business model by building a good reputation with local and competing businesses, but we’ve also been able to offer our customers the best options for their families from a variety of products. When acquiring insurance, as with any social interaction, it’s important to feel connected. You want to be in a place of comfort. You don’t want to be pressured into buying something you don’t need or spending more when there are more affordable options. As an insurance provider, it’s an important part of our business strategy to work for you. We act as your ambassador to the world of insurance. We represent, analyze, and compare pricing of other insurance providers to make sure you make an informed decision, and don’t do anything you’ll regret later on.

### The Whole Package
An important step in attracting customers is convenience. To make purchasing insurance as simple as possible, we have worked hard to put together packages that are affordable, readily available and presented in a comprehensive, easy to understand fashion. It’s also important that you don’t have to go through the hassle of switching between multiple companies. If your current company is “the best”, or “the most trustworthy,” then why should you have to leave them just because they may be missing one piece in your insurance puzzle. Let us be the middle-man who will piece together the best companies to get the package that works to cover your needs. A lot of insurance companies, on their own, are unequipped to deal with multiple purposes or coverages. We make it easy, we don’t just cover the traditional home and auto insurance. We also cover commercial liabilities. We’re here for you and plan on sticking with you throughout the entire process.

We understand that it’s hard to make these decisions. But as long as we’re here, you don’t have to make them alone.`
  },
  {
    id: '3',
    slug: 'beneficiaries-under-life-insurance',
    title: 'Beneficiaries under Life Insurance',
    excerpt: 'There are two key distinctions when selecting life insurance beneficiaries: per capita and per stirpes. Understanding them is crucial for your estate planning.',
    category: 'Life Insurance',
    date: 'Sep 8, 2022',
    readTime: '3 min read',
    image: '/Untitled-design-59.png',
    content: `There are two key distinctions to be aware of when selecting one or more life insurance beneficiaries: per capita and per stirpes.
The estate of the deceased is known as intestate when a person passes away without leaving a will. In this scenario, the state will assume management of the estate and make the decision on the beneficiaries. The assets of the estate will be distributed to the deceased’s legal heirs in accordance with the laws of intestacy. Although life insurance preparation is not the topic of this blog, having a will is always advised. The will should be written and executed by a competent individual.

### Per Capita
The grantor (you) specifies that only the named beneficiary will receive that portion of the estate by using the term “per capita.” For illustration, suppose your will names your three siblings Susan, David, and Ronald as the beneficiaries. You want the estate to be divided equally among the three. Each sibling will receive a third of the estate if they are all still living. But suppose David, your brother, passes away before you do. Then 50% of your estate will then go to Ronald and Susan.

### Per Stirpes
According to Stirpes – In the same example as earlier, you continue to list your three siblings David, Ronald, and Susan as beneficiaries in your will. You want the estate to be divided equally among the three. Each sibling will receive a third of the estate if they are all still living. Let’s imagine once more that David, your brother, passes away before you do. His successors will automatically receive a third of his share (such as his children).

When organizing your will, understanding the distinction between Per Capita and Per Stirpes inheritance is crucial. Make sure to select the method that best meets your and your family’s needs.

*Disclaimer regarding law and technology: The advice offered here is not legal advice. When given, statements or suggestions are deemed to be effective and valid because they are based on our experience in risk control, mitigation, and transfer. A trained attorney should analyze all legal or contractual terms, including any comments made in a legal setting.*`
  },
  {
    id: '4',
    slug: 'tips-for-first-time-home-buyers',
    title: 'Tips for First-Time Home Buyers on Insurance',
    excerpt: 'Buying your first home is exciting but can be overwhelming. Here are 4 essential insurance tips every first-time buyer should know.',
    category: 'Home Insurance',
    date: 'Sep 1, 2022',
    readTime: '6 min read',
    image: '/Untitled-design-57.png',
    content: `For first-time home buyers, this is a fun moment. The time is right to buy a house!
Buying a new house is an essential milestone, and beginning your life in a place you can call home can be thrilling. Because there are so many different tasks to complete during the house buying process, it may also be highly overwhelming. A few examples include contract negotiations, mortgage approvals, and home inspections. First-time home purchasers should be aware that they need to take care of getting home insurance.

One of your largest purchases will be a house. To ensure your protection, follow these 4 insurance suggestions for first-time home buyers:

### 1. Collaborate with a dependable independent agent.
First-time home purchasers should engage with independent insurance agents they can rely on. Home insurance is typically new to first-time home buyers because they have never needed to buy it before. By operating as your own agent online, you run the risk of losing your most valuable asset if you choose poorly. Numerous insurance providers with different underwriting criteria are available to independent insurance agents. Based on their own underwriting standards, each insurer sets a different price for their insurance. You can acquire the best coverage at the most affordable price by working with an agent.

### 2. Don’t confuse replacement cost with market value.
Without taking into account depreciation, replacement cost coverage is the price to replace damaged property with materials of comparable sort and quality. The market value—otherwise known as your buying price—is substantially different from this. Replacement expenses are frequently more expensive than market prices. In the event that your house is damaged by fire, the replacement cost will be the cost of the materials plus the labor to reconstruct it. A homeowners insurance policy that covers replacement costs will be required by your lender.

### 3. Increase your personal liability insurance to its maximum.
If you cause bodily harm or property damage to a third party, personal liability insurance will defend you and your loved ones in court. The coverage is offered both inside the home and outside, such as at a ballpark or golf course. Increasing this coverage only costs a few dollars but is frequently ignored.

### 4. Include appropriate and required endorsements, such as water backup and extended replacement costs.
These two insurance additions or endorsements may just cost a few bucks. Many first-time home buyers strive to save money, so they might be tempted to forego certain coverages if they appear unnecessary. But trust us, you’ll be glad you paid the money for all of that extra coverage if you suffer a fire or water backup loss. Over and above the specified replacement cost, extended replacement cost offers additional coverage. It might be an additional 25%. The extended replacement cost brings your replacement cost, which was $300,000, up to $375,000 instead.

Last but not least, if at all feasible, purchase your home and auto insurance from the same company. This is important advice for everyone with home insurance. The savings you receive from having all of your insurance with one provider will be maximized. This may result in considerable savings.`
  },
  {
    id: '6',
    slug: 'reasons-why-umbrella-coverage-is-essential',
    title: 'Reasons Why Umbrella Coverage is Essential',
    excerpt: 'In a landscape more litigious than ever, umbrella insurance provides the extra protection you need beyond standard policies.',
    category: 'Umbrella Insurance',
    date: 'Aug 5, 2022',
    readTime: '5 min read',
    image: '/Untitled-design-55.png',
    content: `In life, anything can happen. Obviously, you are well aware of this. But have you given all the dangers you currently confront any thought? distracted motorists people who reveal others’ dirty laundry on social media. Daily dangers include those associated with teen drivers, carpools, pets, gatherings, and occasionally even your maid.
Additionally, our society is more litigious than ever, and lawsuits are frequent. Therefore, the true question is not whether an unexpected event will occur but rather when and how bad it will be.

Many individuals only have $100,000 in liability insurance. It is as much money as it sounds to be. However, when dealing with significant harm, particularly when numerous parties are involved, $100,000 doesn’t go very far when you take into account medical expenses, pain and suffering, lost wages, emotional distress, lingering pain and scarring, and other factors.

What happens if someone is wounded and you don’t have enough insurance? That’s a terrible thought. Umbrella insurance is crucial because of this.

Like many others, you probably haven’t heard of umbrella insurance. Simply, it extends your existing insurance coverage by an additional $1 million or more. It increases your sense of well-being and shields you from the unforeseen surprises of life. Being sued like that doesn’t require you to be rich.

### Everyone should use it, especially if you:
- Own a property and earn a steady living
- Protecting retirement funds and other assets
- In your home, host guests
- You have a teen driver
- Allow your teen to babysit or host sleepovers, kids’ parties, or a carpool of kids
- Join your HOA or serve on a volunteer board
- Social media usage
- Possess rental homes
- Traveling abroad
- Possess a golf cart, snowmobile, ATV, or other type of “toy”
- Have animals
- Possess firearms or other leisurely weapons

### What happens if a loss isn’t covered by your home or car insurance?
Were you aware that your home and car insurance doesn’t cover all potential liabilities? personal umbrella policy might have offered protection for you despite the absence of coverage from the primary homeowner’s or auto insurance (subject to policy limitations and conditions, of course). Additionally, it can assist with the legal fees.

**The bottom line:** If the unexpected occurs, a personal umbrella policy may be able to shield you from a range of dangers. You might be surprised at how inexpensive peace of mind is.`
  },
  {
    id: '7',
    slug: 'standard-homeowners-policy-sufficiency',
    title: 'Why a Standard Homeowners Policy isn’t Always Sufficient',
    excerpt: 'As your life and assets grow, your insurance should too. Learn why basic coverage might leave you exposed and what options offer better protection.',
    category: 'Home Insurance',
    date: 'Jul 27, 2022',
    readTime: '4 min read',
    image: '/Untitled-design-22.png',
    content: `A simple homeowners policy can be inadequate occasionally. It is crucial to keep your insurance coverage current as your profession develops and your income rises. This saves you money by preventing costly coverage gaps and limits the amount of money you would have to pay out of pocket in the event of a claim. You need a homeowners policy that develops together with you if you want to be fully covered.

### You might benefit from additional coverage if:
- Your home will cost between $500,000 and $3 million to entirely rebuild.
- Your house was specially built for you.
- Your house features high-end appliances, custom cabinets, collections, or high-end technology.
- You need to safeguard big financial assets.
- You are exposed to additional or special risks.

### Worthwhile choices consist of:
- **Extended dwelling coverage**: Aids in rebuilding if costs exceed your current policy limitations.
- **Building ordinance or law**: Covers higher rebuilding expenditures due to updated building codes.
- **Replacement costs upfront**: Allows you to elect not to rebuild at the original site after a total loss.
- **Replacement costs of personal items**: Covers costs of replacing personal property without depreciation deduction.
- **Personal offenses**: Protection against actions like libel, slander, or invasion of privacy.

Is your homeowner’s insurance policy current? Contact your independent agent to examine your circumstances and receive the protection you actually require.`
  },
  {
    id: '8',
    slug: 'inflation-and-life-insurance',
    title: 'The Relationship Between Inflation and Life Insurance',
    excerpt: 'Inflation is a reality in 2022. Discover how it affects your life insurance rates and why keeping your coverage is more important than ever.',
    category: 'Life Insurance',
    date: 'Jun 13, 2022',
    readTime: '7 min read',
    image: '/Screenshot-2024-11-29-at-2.16.15 PM.png',
    content: `2022’s economy is bleak. We can place blame in many places, but only sound economic solutions will reduce inflation. Gas costs $5 per gallon and diesel doubled in 18 months. Increasing fuel costs will increase the cost of shipping by truck, train, plane, or ship.

### Inflation and life insurance rates?
Good news first! Today’s or tomorrow’s inflation won’t cause your insurance prices to rise. Your life insurance premiums are locked in for the duration of the policy, whether it’s term or permanent like whole life.

- **Term Life Insurance**: Rates only increase when the policy expires or is renewed. This is why you should obtain the longest term allowed by your budget.
- **Whole Life**: Cannot increase rates for the rest of your life. Premiums are diverted to a tax-deferred cash-value account.

### Why you Bought Life Insurance
Most people buy life insurance to help their loved ones financially after they die. Most wish to replace their income for essentials like:
- Survivors’ expenditures
- Paying off your mortgage
- Paying a child’s college expenses
- Funding a survivor’s retirement plan

### Reduce your budget to keep your life insurance
Before you hit “cancel,” remember that life happens. You can lower your monthly budget with a few adjustments: forgo family vacations, keep cars in good shape, reduce utility bills, or shop automobile insurance. One thing you should never contemplate is canceling your life insurance.

### In sum
All Americans are worried about inflation. Our priorities are food, job, and family. If you consider life insurance non-essential, you’re wrong.`
  },
  {
    id: '5',
    slug: 'how-long-do-i-need-life-insurance',
    title: 'How long do I need life insurance for?',
    excerpt: 'Term vs. Permanent life insurance—how do you choose? Learn how to determine the right coverage length for your family’s needs.',
    category: 'Life Insurance',
    date: 'Aug 19, 2022',
    readTime: '5 min read',
    image: '/lifeinsurance.png',
    content: `When getting life insurance, choose the policy’s duration. Life insurance: how long do I need it for?
Term life insurance is cheap and short-term. Permanent life insurance costs more but protects you for life.

### What’s the best term life insurance length?
Unlike permanent life insurance, term life won’t cover your entire life. You choose the term length of your life insurance policy. Your coverage needs will determine the term.

### Term Length
Term life insurance has multiple term lengths. 10-year, 20-year, and 30-year periods are frequent. There’s more. 15, 25, 35…and even 40-year periods are possible.

- **10-year-term**: 10-years is short-term. It can cover unanticipated occurrences. For example, You may have refinanced your home or have other short-term debts. Maybe you have a 10-year company loan that may require life insurance. Perhaps your health makes long-term coverage costly. Until your health improves, you can buy a 10-year term.
- **20-year-term**: Young parents often choose a 20-year term to protect their children through college. It’s helpful for people with mortgages under 20 years.
- **30-year-term**: 30 years is the longest term most life insurance companies offer. Newlyweds and young professionals love it. It’s fantastic for the family breadwinner.

### Coverage length
You must know why you’re buying term to determine how long your coverage should last. Need short-term coverage near retirement? Do you need 30-year income replacement? Your coverage goals determine its length.

Here are 3 options to determine how long your term life insurance coverage should last:
1. **Cost**: Some coverage beats none. Buy affordable term life insurance. Don’t buy an expensive policy. Don’t pay for an insurance that will lapse in a few years.
2. **Age**: How old are you now? Your term life policy expires when? After your term, will you need another policy? Age affects your rate. These things should be figured out now to avoid surprises later.
3. **Goals**: What’s your coverage goal? Short-term or long-term? Do you need a simple funeral policy? Millionaires may require a policy to avoid estate taxes or leave an inheritance. Life insurance goals decide how long your coverage should last.
- **Mortgage**: Do you have a mortgage? What’s the remaining balance? Make sure your coverage covers your mortgage, your biggest asset and responsibility.
- **Retirement**: If so, when? Will you need life insurance in retirement? Your life insurance needs will alter if you’ve saved for retirement.

### Permanent life insurance?
Do you need whole-life insurance? Term life insurance won’t help. Permanent life insurance offers lifetime coverage and several possibilities.
- **Universal Life Insurance**: Guaranteed Universal Life insurance offers policies to a particular age (GUL). You choose your GUL age. You can buy GUL through age 90, 95, 100, 105, 110, and 121. GUL is good for senior shoppers.
- **Whole-life insurance?** Whole life insurance has a place, but it’s pricey. Whole life has a level premium and lifetime coverage. It’s beneficial for cash growth, estate planning, and high-net-worth individuals.

### Begin
How long to receive life insurance is complicated. Be careful when picking term life’s length. This information can help you and your family decide.`
  },
  {
    id: '9',
    slug: 'employer-life-insurance-vs-individual',
    title: 'Is it Necessary for Me to Purchase Another Life Insurance Policy if I Already Have One Through my Employer?',
    excerpt: 'Group life insurance is a great benefit, but it might not be enough. Explore the pros and cons of employer-provided vs. individual policies.',
    category: 'Life Insurance',
    date: 'Jun 6, 2022',
    readTime: '6 min read',
    image: '/Untitled-design-53.png',
    content: `If you work full-time, your employer may have provided you with life insurance. However, if you don’t evaluate all of your options, you may be jeopardizing the financial future of your loved ones. 

### The Benefits of Purchasing Life Insurance Through Your Employer
A practical option often offered for free or at a reduced rate. It’s also easier to obtain even if you have medical issues that might make outside providers more challenging.

### Why You Might Need More Than Your Employer’s Life Insurance
- **Job changes**: If you lose or quit your employment, your coverage may be lost. The average worker changes jobs at least 12 times.
- **Coverage gaps**: There will be a gap if there is time between jobs.
- **Limited coverage**: Employer policies might not fully cover all financial demands like mortgages or significant family expenses.

### Other Things to Think About
- Do you have kids?
- Do you and your spouse have bills that must be paid with both salaries?
- Is your partner and/or family financially dependent on you?

### How to Calculate the Amount of Life Insurance Coverage You Require
Many people utilize their employer-provided life insurance as a backup. A policy that covers 10 times your yearly income can ensure your loved ones are protected. Make sure you are insured now, before it is too late and you are no longer eligible or costs rise.`
  },
  {
    id: '10',
    slug: 'financial-security-life-insurance',
    title: 'In search of Financial Security? Get a life insurance policy.',
    excerpt: 'Financial security is a top concern for all generations. Learn how life insurance can bridge the gap and provide long-term stability.',
    category: 'Financial Planning',
    date: 'May 9, 2022',
    readTime: '5 min read',
    image: '/Untitled-design-28.png',
    content: `An annual survey performed by Life Happens and LIMRA shows that financial security is a concern for all generations, but one that can be addressed with a better awareness of the importance of life insurance.

### Life insurance helps alleviate the financial worries of future generations.
Life insurance ownership considerably minimizes financial instability. 68 percent of respondents with life insurance report financial stability, compared to just 47 percent for those who do not have it.

### There is a deficiency of understanding about the cost of life insurance.
Nearly half of people admit they know very little about life insurance. People overestimate the cost by an average of 80 percent, assuming it's three times more expensive than it actually is.

### Way to get things done
COVID served as a powerful reminder to be prepared for the things you can control. More than half of people have become more health-conscious. Arrangements for your death are an important part of long-term well-being for your family.

### Discomfort must be overcome.
Conversations about death can be uncomfortable, but they’re necessary. The time has come to take charge and ensure the financial security of your family. One phone call could greatly improve your family’s long-term financial well-being.`
  },
];