import {
  BarChart, // Example for DataAnalytics
  Layers,   // Example for Scalability
  TrendingUp, // Example for PredictiveAnalytics
  Leaf, // Example for Sustainability
  Users, // Example for Collaboration
  PieChart, // Example for AnalyticsDashboard
} from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Urbanizer has transformed our approach to urban planning. The real-time data integration has allowed us to optimize our water usage significantly, leading to a 20% reduction in waste.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "The predictive analytics feature of Urbanizer has been a game-changer for us. It helps us anticipate infrastructure needs and allocate resources more efficiently",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "We appreciate how Urbanizer adapts to various urban environments. Its modular design makes it easy to implement in cities of different sizes and capacities.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Thanks to Urbanizer, we have successfully integrated green spaces into our projects. The platform’s insights on land use have been invaluable!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "As educators, we find Urbanizer to be an excellent tool for teaching students about sustainable urban planning. Its real-world applications make learning engaging and relevant.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Urbanizer's commitment to sustainability aligns perfectly with our mission. The ability to monitor environmental impacts in real-time is crucial for our advocacy efforts.",
  },
];

export const features = [
  {
    icon: <BarChart />,
    text: "Real-Time Data Integration",
    description:
      "Seamlessly integrate IoT sensor data in real-time to optimize urban resource management and enhance decision-making.",
  },
  {
    icon: <Layers />,
    text: "Modular Architecture",
    description:
      "Adapt Urbanizer to cities of all sizes with a flexible, modular design that meets varying urban planning needs.",
  },
  {
    icon: <TrendingUp />,
    text: "Predictive Maintenance",
    description:
      "Utilize AI-driven predictive analytics to anticipate infrastructure needs and reduce maintenance costs.",
  },
  {
    icon: <Leaf />,
    text: "Sustainability Insights",
    description:
      "Gain insights into resource usage and environmental impact, helping cities implement sustainable practices.",
  },
  {
    icon: <Users />,
    text: "Stakeholder Collaboration Tools",
    description:
      "Facilitate collaboration among city planners, government officials, and community members for effective urban planning.",
  },
  {
    icon: <PieChart />,
    text: "Comprehensive Analytics Dashboard",
    description:
      "Access an integrated dashboard for monitoring user interactions and resource management metrics in real-time.",
  },
];

export const checklistItems = [
  {
    title: "Streamlined Resource Management",
    description:
      "Optimize water and energy usage with real-time data insights and analytics.",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Leverage predictive analytics to make informed decisions about urban infrastructure and resource allocation.",
  },
  {
    title: "Community Engagement Tools",
    description:
      "Engage with local communities through feedback mechanisms to ensure their needs are met in urban planning.",
  },
  {
    title: "Pilot Project Support",
    description:
      "Receive guidance on implementing pilot projects to demonstrate Urbanizer's effectiveness in real-world scenarios.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Access to core features",
      "Limited data integration",
      "Basic analytics dashboard",
      "Community feedback tools",
    ],
  },
  {
    title: "Professional",
    price: "$50",
    features: [
      "Full data integration capabilities",
      "Advanced analytics dashboard",
      "Predictive maintenance tools",
      "Stakeholder collaboration features",
    ],
  },
  {
    title: "Enterprise",
    price: "$500",
    features: [
      "Unlimited data integration",
      "Customizable analytics solutions",
      "Dedicated support for pilot projects",
      "Comprehensive stakeholder engagement tools",
    ],
  },
];
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
