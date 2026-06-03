export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
};

export const navItems: NavItem[] = [
  { label: "Mission", href: "#mission" },
  { label: "How We Help", href: "#how-we-help" },
  { label: "Families", href: "#families" },
  { label: "Businesses", href: "#businesses" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Trusted guidance for families and businesses",
  title: ["Transforming Businesses,", "Empowering Individuals."],
  accent: "Together Towards Success.",
  description:
    "Padres Con Poder supports individuals with disabilities and their families as they navigate the Self-Determination Program, while helping businesses create inclusive, neurodiverse-friendly workplaces across California.",
  trustChips: [
    "Trusted IRC Vendor",
    "Support for the Self-Determination Program",
    "Neurodiversity Consulting for Businesses",
  ],
  cards: [
    {
      title: "For Families",
      body: "Guidance through individualized service plans, regional center coordination, and ongoing support.",
    },
    {
      title: "For Businesses",
      body: "Coaching, training, and strategy for inclusive workplaces that help neurodiverse talent thrive.",
    },
    {
      title: "Training Focus",
      body: "Self-Determination law, the Lanterman Act, budgeting and spending plans, and inclusive practices.",
    },
  ],
};

export const missionContent = {
  intro:
    "Padres Con Poder bridges family support and inclusive business strategy with the same commitment to empowerment, structure, and person-centered guidance.",
  mission:
    "At Padres Con Poder, we are committed to empowering businesses across California to cultivate inclusive and neurodiverse-friendly workplaces. Through specialized coaching and training, we equip organizations to embrace diversity, equity, and inclusion, unlocking the potential of neurodiverse talent. Concurrently, we empower individuals with disabilities and their families to confidently navigate the Self-Determination Program (SDP).",
  vision:
    "Our vision is to be the leading resource for businesses and individuals across all regional centers in California. We aspire to create a society where every individual, regardless of ability, can lead an empowered and independent life, with person-centered planning at the forefront of service delivery.",
  vendorNote:
    "Padres Con Poder is a trusted vendor for the Inland Regional Center (IRC) specializing in the Self-Determination Program (SDP).",
};

export const processSteps = [
  {
    step: "01",
    title: "Guide",
    description:
      "We help families and individuals navigate the Self-Determination Program, build individualized service plans, and connect with the right resources.",
  },
  {
    step: "02",
    title: "Train",
    description:
      "We provide education on self-determination principles, the Lanterman Act, budgeting and spending plans, and inclusive workplace practices.",
  },
  {
    step: "03",
    title: "Support",
    description:
      "We stay alongside families with ongoing follow-up and advocacy, while coaching businesses as they implement inclusive strategies.",
  },
];

export const familyServices: ServiceItem[] = [
  {
    title: "Navigating the Self-Determination Program",
    description:
      "We guide clients through the complexities of the IRC Self-Determination Program and help shape individualized service plans.",
    bullets: [
      "Resource coordination and provider connections",
      "Regional center communication and paperwork support",
      "Service planning grounded in personal goals",
    ],
  },
  {
    title: "Empowerment Through Knowledge",
    description:
      "We equip families with the tools and training needed to take control of service plans and make informed decisions.",
    bullets: [
      "Training in self-determination principles",
      "Guidance on the Lanterman Act",
      "Budgeting and spending plan support",
    ],
  },
  {
    title: "Ongoing Support",
    description:
      "Our team works side-by-side with families as services are implemented and goals continue to evolve.",
    bullets: [
      "Follow-up support and self-advocacy guidance",
      "Appointments, submissions, and coordination help",
      "Continuous support as services move forward",
    ],
  },
];

export const businessServices: ServiceItem[] = [
  {
    title: "Customized Business Coaching",
    description:
      "We work with companies to build inclusive hiring, onboarding, and employee development programs that support neurodiverse employees.",
    bullets: [
      "Inclusive hiring and onboarding guidance",
      "Coaching tailored to each organization",
      "Support for employee development programs",
    ],
  },
  {
    title: "Inclusive Workplace Training",
    description:
      "We offer training for leadership and staff on creating environments where neurodiverse employees can thrive.",
    bullets: [
      "Leadership and staff education",
      "Workshops tailored to company needs",
      "Supportive environment and communication practices",
    ],
  },
  {
    title: "Diversity & Inclusion Strategy",
    description:
      "Our experts help businesses develop and implement strategies that promote equity and inclusion while enhancing employee well-being.",
    bullets: [
      "Diversity, equity, and inclusion planning",
      "Workplace accommodation guidance",
      "Strategy integration that supports business growth",
    ],
  },
];

export const differentiators = [
  {
    title: "Trusted Inland Regional Center Vendor",
    description:
      "Padres Con Poder is an approved and trusted vendor for the Inland Regional Center with a focus on the Self-Determination Program.",
  },
  {
    title: "Dual Expertise Across Two Audiences",
    description:
      "The organization supports individuals and families while also coaching businesses that want to create inclusive environments.",
  },
  {
    title: "Personalized Side-by-Side Guidance",
    description:
      "Support is grounded in one-on-one guidance, continuous follow-up, and practical help as plans turn into action.",
  },
  {
    title: "California-Focused Inclusive Vision",
    description:
      "The work is rooted in a statewide vision for inclusive workplaces, person-centered planning, and greater independence.",
  },
];

export const contactContent = {
  intro:
    "Padres Con Poder supports families seeking Self-Determination guidance and businesses building inclusive workplace practices.",
  contactItems: [
    { label: "Phone", value: "TODO: Add approved phone number" },
    { label: "Email", value: "TODO: Add approved email address" },
    { label: "Website", value: "TODO: Add final website URL" },
    { label: "Social", value: "TODO: Confirm URLs for @IvesTorresFoundation and @PadresConPoder" },
  ],
};
