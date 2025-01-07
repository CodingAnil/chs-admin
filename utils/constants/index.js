import { Briefcase, ListTask, People, Bullseye } from "react-bootstrap-icons";
import ModelProfile from "@/images/modalico.svg";
import Instagram from "@/icons/Instagram.svg";
import Facebook from "@/icons/facebook.svg";
import Youtube from "@/icons/youtube.svg";
import twitter from "@/icons/twitter.svg";
import Tiktok from "@/icons/tiktok 1.svg";
import Bluesky from "@/icons/bluesky.svg";
import ModalProfile1 from "@/images/modal1.png";
import ModalProfile2 from "@/images/modal2.png";
import ModalProfile3 from "@/images/modal3.png";
import ModalProfile4 from "@/images/modal4.png";
export const UserStats = [
  {
    id: 1,
    title: "All Users",
    value: 583,
    icon: <People size={18} />,
    statInfo:
      '<span className="text-dark me-2">123</span> Models , <span className="text-dark me-2">256</span> Clients',
  },
  {
    id: 2,
    title: "Active Users",
    value: 242,
    icon: <Bullseye size={18} />,
    statInfo:
      '<span className="text-dark me-2">123</span> Models , <span className="text-dark me-2">256</span> Clients',
  },
];

export const TeamsData = [
  {
    id: 1,
    name: "Anita Parmar",
    email: "anita@example.com",
    role: "Model",
    lastActivity: "3 May, 2023",
    image: "/images/avatar/avatar-2.jpg",
  },
  {
    id: 2,
    name: "Jitu Chauhan",
    email: "jituchauhan@example.com",
    role: "Model",
    lastActivity: "Today",
    image: "/images/avatar/avatar-1.jpg",
  },
  {
    id: 3,
    name: "Sandeep Chauhan",
    email: "sandeepchauhan@example.com",
    role: "Client",
    lastActivity: "Yesterday",
    image: "/images/avatar/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Amanda Darnell",
    email: "amandadarnell@example.com",
    role: "Model",
    lastActivity: "3 May, 2023",
    image: "/images/avatar/avatar-4.jpg",
  },
  {
    id: 3,
    name: "Patricia Murrill",
    email: "patriciamurrill@example.com",
    role: "Model",
    lastActivity: "3 May, 2023",
    image: "/images/avatar/avatar-5.jpg",
  },
  {
    id: 4,
    name: "Darshini Nair",
    email: "darshininair@example.com",
    role: "Client",
    lastActivity: "3 May, 2023",
    image: "/images/avatar/avatar-6.jpg",
  },
];

export const ProjectsContributionsData = [
  {
    id: 1,
    projectName: "Slack Figma Design UI",
    description: "Project description and details about...",
    brandLogo: "/images/brand/slack-logo.svg",
    brandLogoBg: "bg-white",
    members: [
      { image: "/images/avatar/avatar-4.jpg" },
      { image: "/images/avatar/avatar-5.jpg" },
      { image: "/images/avatar/avatar-6.jpg" },
    ],
  },
  {
    id: 2,
    projectName: "Design 3d Character",
    description: "Project description and details about...",
    brandLogo: "/images/brand/3dsmax-logo.svg",
    brandLogoBg: "bg-white",
    members: [
      { image: "/images/avatar/avatar-10.jpg" },
      { image: "/images/avatar/avatar-11.jpg" },
      { image: "/images/avatar/avatar-12.jpg" },
    ],
  },
  {
    id: 3,
    projectName: "Github Development",
    description: "Project description and details about...",
    brandLogo: "/images/brand/github-logo.svg",
    brandLogoBg: "bg-white",
    members: [
      { image: "/images/avatar/avatar-7.jpg" },
      { image: "/images/avatar/avatar-8.jpg" },
      { image: "/images/avatar/avatar-9.jpg" },
    ],
  },
  {
    id: 4,
    projectName: "Dropbox Design System",
    description: "Project description and details about...",
    brandLogo: "/images/brand/dropbox-logo.svg",
    brandLogoBg: "bg-white",
    members: [
      { image: "/images/avatar/avatar-1.jpg" },
      { image: "/images/avatar/avatar-2.jpg" },
      { image: "/images/avatar/avatar-3.jpg" },
    ],
  },
  {
    id: 5,
    projectName: "Project Management",
    description: "Project description and details about...",
    brandLogo: "/images/brand/layers-logo.svg",
    brandLogoBg: "bg-primary",
    members: [
      { image: "/images/avatar/avatar-13.jpg" },
      { image: "/images/avatar/avatar-14.jpg" },
      { image: "/images/avatar/avatar-15.jpg" },
    ],
  },
];

export const ProjectsStats = [
  {
    id: 1,
    title: "Projects",
    value: 18,
    icon: <Briefcase size={18} />,
    statInfo: '<span className="text-dark me-2">2</span> Completed',
  },
  {
    id: 2,
    title: "Active Task",
    value: 132,
    icon: <ListTask size={18} />,
    statInfo: '<span className="text-dark me-2">28</span> Completed',
  },
  {
    id: 3,
    title: "Teams",
    value: 12,
    icon: <People size={18} />,
    statInfo: '<span className="text-dark me-2">1</span> Completed',
  },
  {
    id: 4,
    title: "Productivity",
    value: "76%",
    icon: <Bullseye size={18} />,
    statInfo: '<span className="text-dark me-2">5%</span> Completed',
  },
];

export const ProductStatusData = [
  {
    title: "Doctors Appointments",
    items: [
      { label: "Pending", value: 10 },
      { label: "Completed", value: 5 },
      { label: "Cancelled", value: 6 },
    ],
    url: "#",
  },
  {
    title: "Patients",
    items: [
      { label: "Total Appointments", value: 10 },
      { label: "Total Reports", value: 30 },
    ],
    url: "#",
  },
  {
    title: "Pharmacy's",
    items: [
      { label: "Total Products", value: 50 },
      { label: "Offers", value: 2 },
    ],
    url: "#",
  },
  {
    title: "Revenue Summary",
    items: [
      { label: "Monthly", value: 1800 },
      { label: "Quarterly", value: 4300 },
      { label: "Yearly", value: 9600 },
    ],
    url: "#",
  },
  {
    title: "Recent Complaints or Reports",
    items: [{ label: "Complaints", value: 2 }],
    url: "#",
  },
];

export const AllModelsdata = [
  {
    name: "Model A",
    membershipType: "Elite",
    accountStatus: "Active",
    verificationStatus: "Verified",
  },
  {
    name: "Model B",
    membershipType: "Regular",
    accountStatus: "Pending",
    verificationStatus: "Not Verified",
  },
  {
    name: "Model C",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model D",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model E",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model F",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model G",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model H",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model H",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model H",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model H",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
  {
    name: "Model H",
    membershipType: "Elite",
    accountStatus: "Suspended",
    verificationStatus: "Verified",
  },
];

export const AllClientsdata = [
  {
    id: "1",
    name: "Model A",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Active",
  },
  {
    id: "2",
    name: "Model B",
    email: "test123@gmail.com",
    membershipType: "Regular",
    accountStatus: "Pending",
  },
  {
    id: "3",
    name: "Model C",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "4",
    name: "Model D",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "5",
    name: "Model E",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "6",
    name: "Model F",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "7",
    name: "Model G",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "8",
    name: "Model H",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "9",
    name: "Model H",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "10",
    name: "Model H",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "11",
    name: "Model H",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
  {
    id: "12",
    name: "Model H",
    email: "test123@gmail.com",
    membershipType: "Elite",
    accountStatus: "Suspended",
  },
];
export const ClientProfileArray = [
  {
    id: "1",
    heading: "Foreskin",
    type: "single",
    subArray: [{ name: "Cut" }, { name: "Uncut" }],
  },
  {
    id: "2",
    heading: "Sexual Role",
    type: "single",
    subArray: [
      { name: "Top" },
      { name: "Top/Vers" },
      { name: "Vers" },
      { name: "Vers/Bottom" },
      { name: "Bottom" },
      { name: "Side" },
      { name: "None" },
    ],
  },
  {
    id: "3",
    heading: "Tribe",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "Twink" },
      { name: "Jock" },
      { name: "Bodybuilder" },
      { name: "Punk" },
      { name: "Nerd" },
      { name: "Daddy" },
      { name: "S&M" },
      { name: "Bear" },
      { name: "Otter" },
      { name: "Trans" },
    ],
  },
  {
    id: "4",
    heading: "Body Type",
    type: "single",
    subArray: [
      { name: "Slim" },
      { name: "Toned" },
      { name: "Muscular" },
      { name: "Average" },
      { name: "Chubby" },
    ],
  },
  {
    id: "45",
    heading: "Orientation",
    type: "single",
    subArray: [
      { name: "Gay" },
      { name: "Straight" },
      { name: "Bisexual" },
      { name: "Pansexual" },
    ],
  },
  {
    id: "5",
    heading: "Eye Color",
    type: "single",
    subArray: [
      { name: "Black" },
      { name: "Dark Brown" },
      { name: "Hazal" },
      { name: "Green" },
      { name: "Blue" },
      { name: "Other" },
    ],
  },
  {
    id: "6",
    heading: "Hair Color",
    type: "single",
    subArray: [
      { name: "Black" },
      { name: "Dark Brown" },
      { name: "Light Brown" },
      { name: "Ginger" },
      { name: "Dark Blonde" },
      { name: "Light Blonde" },
      { name: "White/Gray" },
      { name: "Other" },
    ],
  },
  {
    id: "7",
    heading: "Body Hair",
    type: "single",
    subArray: [
      { name: "Smooth" },
      { name: "Light Hair" },
      { name: "Hairy" },
      { name: "Very Hairy" },
    ],
  },
  {
    id: "8",
    heading: "Smoking",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }, { name: "Ask Me" }],
  },
  {
    id: "9",
    heading: "Drinking",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }],
  },
  {
    id: "10",
    heading: "Piercings",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "None" },
      { name: "Ear" },
      { name: "Nose" },
      { name: "Nipples" },
      { name: "Cock" },
      { name: "Balls" },
      { name: "Taint" },
      { name: "Navel" },
      { name: "Tongue" },
      { name: "Lips" },
      { name: "Eyebrow" },
      { name: "Other" },
    ],
  },
  {
    id: "11",
    heading: "Tattoos",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }],
  },
  {
    id: "12",
    heading: "Condoms only",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }],
  },
  {
    id: "13",
    heading: "HIV status",
    type: "single",
    subArray: [
      { name: "Negative on PrEP" },
      { name: "Negative" },
      { name: "Positive undetectable" },
      { name: "Positive" },
    ],
  },
  {
    id: "14",
    heading: "Hobbies",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "Reading" },
      { name: "Painting" },
      { name: "Running" },
      { name: "Cycling" },
      { name: "Movies" },
      { name: "Camping" },
      { name: "Hiking" },
      { name: "Weightlifting" },
      { name: "Traveling" },
      { name: "Shopping" },
      { name: "Spa Days" },
      { name: "Fine Dining" },
      { name: "Concerts" },
      { name: "Theatre" },
      { name: "Clubbing" },
      { name: "Bars" },
      { name: "Music Festivals/Circuit Parties/Events" },
    ],
  },
  {
    id: "15",
    heading: "I’m Into",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "Muscle Worship" },
      { name: "Stripping" },
      { name: "Massage" },
      { name: "Mutual Touching" },
      { name: "Receiving Oral" },
      { name: "Giving Oral" },
      { name: "Kissing" },
      { name: "Body Contact" },
      { name: "Cuddling" },
      { name: "Rimming" },
      { name: "Anal" },
      { name: "Verbal" },
      { name: "Groups" },
      { name: "Cum" },
      { name: "WS" },
      { name: "S&M" },
      { name: "Spanking" },
      { name: "Nipples" },
      { name: "Feet" },
      { name: "Armpits" },
      { name: "PNP" },
      { name: "Socks" },
      { name: "Tattoos" },
      { name: "Piercings" },
      { name: "Foreskin" },
      { name: "Tickling" },
      { name: "Wrestling" },
      { name: "Role Play" },
      { name: "Toys" },
      { name: "Making Content/Recording" },
    ],
  },
];

// export const ModalProfileArray = [
//   {
//     id: "1",
//     heading: "Foreskin",
//     subHeading: "(Only visible to registered members)",
//     type: "single",
//     subArray: [{ name: "Cut" }, { name: "Uncut" }],
//   },
//   {
//     id: "2",
//     heading: "Sexual Role",
//     subHeading: "(Only visible to registered members)",
//     type: "single",
//     subArray: [
//       { name: "Top" },
//       { name: "Top/Vers" },
//       { name: "Vers" },
//       { name: "Vers/Bottom" },
//       { name: "Bottom" },
//       { name: "Side" },
//       { name: "None" },
//     ],
//   },
//   {
//     id: "3",
//     heading: "Tribe",
//     subHeading: "(Multiple Select)",
//     type: "multiple",
//     subArray: [
//       { name: "Twink" },
//       { name: "Jock" },
//       { name: "Bodybuilder" },
//       { name: "Punk" },
//       { name: "Nerd" },
//       { name: "Daddy" },
//       { name: "S&M" },
//       { name: "Bear" },
//       { name: "Otter" },
//       { name: "Trans" },
//     ],
//   },
//   {
//     id: "4",
//     heading: "Body Type",
//     type: "single",
//     subArray: [
//       { name: "Slim" },
//       { name: "Toned" },
//       { name: "Muscular" },
//       { name: "Average" },
//       { name: "Chubby" },
//     ],
//   },
//   {
//     id: "45",
//     heading: "Orientation",
//     subHeading: "(Only visible to registered members)",
//     type: "single",
//     subArray: [
//       { name: "Gay" },
//       { name: "Straight" },
//       { name: "Bisexual" },
//       { name: "Pansexual" },
//     ],
//   },
//   {
//     id: "5",
//     heading: "Eye Color",
//     type: "single",
//     subArray: [
//       { name: "Black" },
//       { name: "Dark Brown" },
//       { name: "Hazal" },
//       { name: "Green" },
//       { name: "Blue" },
//       { name: "Other" },
//     ],
//   },
//   {
//     id: "6",
//     heading: "Hair Color",
//     type: "single",
//     subArray: [
//       { name: "Black" },
//       { name: "Dark Brown" },
//       { name: "Light Brown" },
//       { name: "Ginger" },
//       { name: "Dark Blonde" },
//       { name: "Light Blonde" },
//       { name: "White/Gray" },
//       { name: "Other" },
//     ],
//   },
//   {
//     id: "7",
//     heading: "Body Hair",
//     type: "single",
//     subArray: [
//       { name: "Smooth" },
//       { name: "Light Hair" },
//       { name: "Hairy" },
//       { name: "Very Hairy" },
//     ],
//   },
//   {
//     id: "8",
//     heading: "Smoking",
//     type: "single",
//     subArray: [{ name: "Yes" }, { name: "No" }, { name: "Ask Me" }],
//   },
//   {
//     id: "9",
//     heading: "Drinking",
//     type: "single",
//     subArray: [{ name: "Yes" }, { name: "No" }],
//   },
//   {
//     id: "10",
//     heading: "Piercings",
//     subHeading: "(Multiple Select)",
//     type: "multiple",
//     subArray: [
//       { name: "None" },
//       { name: "Ear" },
//       { name: "Nose" },
//       { name: "Nipples" },
//       { name: "Cock" },
//       { name: "Balls" },
//       { name: "Taint" },
//       { name: "Navel" },
//       { name: "Tongue" },
//       { name: "Lips" },
//       { name: "Eyebrow" },
//       { name: "Other" },
//     ],
//   },
//   {
//     id: "11",
//     heading: "Tattoos",
//     type: "single",
//     subArray: [{ name: "Yes" }, { name: "No" }],
//   },
//   {
//     id: "12",
//     heading: "Condoms only",
//     subHeading: "(Only visible to registered members)",
//     type: "single",
//     subArray: [{ name: "Yes" }, { name: "No" }],
//   },
//   {
//     id: "13",
//     heading: "HIV status",
//     subHeading: "(Only visible to registered members)",
//     type: "single",
//     subArray: [
//       { name: "Negative on PrEP" },
//       { name: "Negative" },
//       { name: "Positive undetectable" },
//       { name: "Positive" },
//     ],
//   },
//   {
//     id: "14",
//     heading: "Hobbies",
//     subHeading: "(Multiple Select)",
//     type: "multiple",
//     subArray: [
//       { name: "Reading" },
//       { name: "Painting" },
//       { name: "Running" },
//       { name: "Cycling" },
//       { name: "Movies" },
//       { name: "Camping" },
//       { name: "Hiking" },
//       { name: "Weightlifting" },
//       { name: "Traveling" },
//       { name: "Shopping" },
//       { name: "Spa Days" },
//       { name: "Fine Dining" },
//       { name: "Concerts" },
//       { name: "Theatre" },
//       { name: "Clubbing" },
//       { name: "Bars" },
//       { name: "Music Festivals/Circuit Parties/Events" },
//     ],
//   },
//   {
//     id: "15",
//     heading: "I’m Into",
//     subHeading: "(Only visible to registered members)",
//     type: "multiple",
//     subArray: [
//       { name: "Muscle Worship" },
//       { name: "Stripping" },
//       { name: "Massage" },
//       { name: "Mutual Touching" },
//       { name: "Receiving Oral" },
//       { name: "Giving Oral" },
//       { name: "Kissing" },
//       { name: "Body Contact" },
//       { name: "Cuddling" },
//       { name: "Rimming" },
//       { name: "Anal" },
//       { name: "Verbal" },
//       { name: "Groups" },
//       { name: "Cum" },
//       { name: "WS" },
//       { name: "S&M" },
//       { name: "Spanking" },
//       { name: "Nipples" },
//       { name: "Feet" },
//       { name: "Armpits" },
//       { name: "PNP" },
//       { name: "Socks" },
//       { name: "Tattoos" },
//       { name: "Piercings" },
//       { name: "Foreskin" },
//       { name: "Tickling" },
//       { name: "Wrestling" },
//       { name: "Role Play" },
//       { name: "Toys" },
//       { name: "Making Content/Recording" },
//     ],
//   },
// ];
export const ModalProfileArray = [
  {
    id: "1",
    heading: "Foreskin",
    name: "foreskin",
    subHeading: "(Only visible to registered members)",
    type: "single",
    subArray: [{ name: "Cut" }, { name: "Uncut" }],
  },
  {
    id: "2",
    heading: "Sexual Role",
    name: "sexualRole",
    subHeading: "(Only visible to registered members)",
    type: "single",
    subArray: [
      { name: "Top" },
      { name: "Top/Vers" },
      { name: "Vers" },
      { name: "Vers/Bottom" },
      { name: "Bottom" },
      { name: "Side" },
      { name: "None" },
    ],
  },
  {
    id: "3",
    heading: "Tribe",
    name: "tribe",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "Twink" },
      { name: "Jock" },
      { name: "Bodybuilder" },
      { name: "Punk" },
      { name: "Nerd" },
      { name: "Daddy" },
      { name: "S&M" },
      { name: "Bear" },
      { name: "Otter" },
      { name: "Trans" },
    ],
  },
  {
    id: "4",
    heading: "Body Type",
    name: "bodyType",
    type: "single",
    subArray: [
      { name: "Slim" },
      { name: "Toned" },
      { name: "Muscular" },
      { name: "Average" },
      { name: "Chubby" },
    ],
  },
  {
    id: "45",
    heading: "Orientation",
    name: "orientation",
    subHeading: "(Only visible to registered members)",
    type: "single",
    subArray: [
      { name: "Gay" },
      { name: "Straight" },
      { name: "Bisexual" },
      { name: "Pansexual" },
    ],
  },
  {
    id: "5",
    heading: "Eye Color",
    name: "eyeColor",
    type: "single",
    subArray: [
      { name: "Black" },
      { name: "Dark Brown" },
      { name: "Hazel" },
      { name: "Green" },
      { name: "Blue" },
      { name: "Other" },
    ],
  },
  {
    id: "6",
    heading: "Hair Color",
    name: "hairColor",
    type: "single",
    subArray: [
      { name: "Black" },
      { name: "Dark Brown" },
      { name: "Light Brown" },
      { name: "Ginger" },
      { name: "Dark Blonde" },
      { name: "Light Blonde" },
      { name: "White/Gray" },
      { name: "Other" },
    ],
  },
  {
    id: "7",
    heading: "Body Hair",
    name: "bodyHair",
    type: "single",
    subArray: [
      { name: "Smooth" },
      { name: "Light Hair" },
      { name: "Hairy" },
      { name: "Very Hairy" },
    ],
  },
  {
    id: "8",
    name: "smoking",
    heading: "Smoking",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }, { name: "Ask Me" }],
  },
  {
    id: "9",
    name: "drinking",
    heading: "Drinking",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }],
  },
  {
    id: "10",
    name: "piercings",
    heading: "Piercings",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "None" },
      { name: "Ear" },
      { name: "Nose" },
      { name: "Nipples" },
      { name: "Cock" },
      { name: "Balls" },
      { name: "Taint" },
      { name: "Navel" },
      { name: "Tongue" },
      { name: "Lips" },
      { name: "Eyebrow" },
      { name: "Other" },
    ],
  },
  {
    id: "11",
    heading: "Tattoos",
    name: "tattoos",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }],
  },
  {
    id: "12",
    heading: "Condoms only",
    name: "condomsOnly",
    subHeading: "(Only visible to registered members)",
    type: "single",
    subArray: [{ name: "Yes" }, { name: "No" }],
  },
  {
    id: "13",
    heading: "HIV status",
    name: "hivStatus",
    subHeading: "(Only visible to registered members)",
    type: "single",
    subArray: [
      { name: "Negative On PrEP" },
      { name: "Negative" },
      { name: "Positive Undetectable" },
      { name: "Positive" },
    ],
  },
  {
    id: "14",
    heading: "Hobbies",
    name: "hobbies",
    subHeading: "(Multiple Select)",
    type: "multiple",
    subArray: [
      { name: "Reading" },
      { name: "Painting" },
      { name: "Running" },
      { name: "Cycling" },
      { name: "Movies" },
      { name: "Camping" },
      { name: "Hiking" },
      { name: "Weightlifting" },
      { name: "Traveling" },
      { name: "Shopping" },
      { name: "Spa Days" },
      { name: "Fine Dining" },
      { name: "Concerts" },
      { name: "Theatre" },
      { name: "Clubbing" },
      { name: "Bars" },
      { name: "Music Festivals/Circuits Parties/Events" },
    ],
  },
  {
    id: "15",
    heading: "I’m Into",
    name: "amInto",
    subHeading: "(Choose all that apply so clients can find you easier)",
    type: "multiple",
    subArray: [
      { name: "Muscle Worship" },
      { name: "Stripping" },
      { name: "Massage" },
      { name: "Mutual Touching" },
      { name: "Receiving Oral" },
      { name: "Giving Oral" },
      { name: "Kissing" },
      { name: "Body Contact" },
      { name: "Cuddling" },
      { name: "Rimming" },
      { name: "Anal" },
      { name: "Verbal" },
      { name: "Groups" },
      { name: "Cum" },
      { name: "WS" },
      { name: "S&M" },
      { name: "Spanking" },
      { name: "Nipples" },
      { name: "Feet" },
      { name: "Armpits" },
      { name: "PNP" },
      { name: "Socks" },
      { name: "Tattoos" },
      { name: "Piercings" },
      { name: "Foreskin" },
      { name: "Ticking" },
      { name: "Wrestling" },
      { name: "Role Play" },
      { name: "Toys" },
      { name: "Making Content/Recording" },
    ],
  },
];

export const LanguageListArray = [
  { name: "All" },
  { name: "English" },
  { name: "Mandarin Chinese" },
  { name: "Hindi" },
  { name: "Spanish" },
  { name: "French" },
  { name: "Arabic" },
  { name: "Mandarin Chinese" },
  { name: "Hindi" },
  { name: "Spanish" },
  { name: "French" },
  { name: "Arabic" },
  { name: "Mandarin Chinese" },
  { name: "Hindi" },
  { name: "Spanish" },
  { name: "French" },
  { name: "Arabic" },
];

export const AllTransactionData = [
  {
    id: 1,
    userType: "Model",
    amount: 200,
    date: "2023-10-01",
    status: "Success",
  },
  {
    id: 2,
    userType: "Client",
    amount: 150,
    date: "2023-10-02",
    status: "Failed",
  },
  {
    id: 3,
    userType: "Model",
    amount: 200,
    date: "2023-10-01",
    status: "Success",
  },
  {
    id: 4,
    userType: "Client",
    amount: 150,
    date: "2023-10-02",
    status: "Failed",
  },
  {
    id: 5,
    userType: "Model",
    amount: 200,
    date: "2023-10-01",
    status: "Success",
  },
  {
    id: 6,
    userType: "Client",
    amount: 150,
    date: "2023-10-02",
    status: "Failed",
  },
  {
    id: 7,
    userType: "Model",
    amount: 200,
    date: "2023-10-01",
    status: "Success",
  },
  {
    id: 8,
    userType: "Client",
    amount: 150,
    date: "2023-10-02",
    status: "Failed",
  },
  {
    id: 9,
    userType: "Model",
    amount: 200,
    date: "2023-10-01",
    status: "Success",
  },
  {
    id: 10,
    userType: "Client",
    amount: 150,
    date: "2023-10-02",
    status: "Failed",
  },
  {
    id: 11,
    userType: "Model",
    amount: 200,
    date: "2023-10-01",
    status: "Success",
  },
  {
    id: 12,
    userType: "Client",
    amount: 150,
    date: "2023-10-02",
    status: "Failed",
  },
];
export const chats = [
  {
    id: 1,
    name: "Alice",
    messages: 5,
    hasUnread: true,
    time: "16:45",
    chatMessages: ["How are you?"],
  },
  {
    id: 2,
    name: "Bob",
    messages: 2,
    hasUnread: false,
    time: "16:45",
    chatMessages: ["See you later!"],
  },
  {
    id: 3,
    name: "Charlie",
    messages: 0,
    hasUnread: false,
    time: "16:45",
    chatMessages: [],
  },
  {
    id: 4,
    name: "Dana",
    messages: 1,
    hasUnread: true,
    time: "16:45",
    chatMessages: ["What's up?"],
  },
  {
    id: 5,
    name: "Robert Parker",
    messages: 1,
    hasUnread: true,
    time: "16:45",
    chatMessages: ["What's up?"],
  },
  {
    id: 6,
    name: "Rick Owens",
    messages: 1,
    hasUnread: true,
    time: "16:45",
    chatMessages: ["What's up?"],
  },
  {
    id: 7,
    name: "George Orwell",
    messages: 1,
    hasUnread: true,
    time: "16:45",
    chatMessages: ["What's up?"],
  },
  {
    id: 8,
    name: "Tom Hardy",
    messages: 1,
    hasUnread: true,
    time: "16:45",
    chatMessages: ["What's up?"],
  },
];
export const medicineArray = [
  {
    name: "Pharmeasy Fish Oil",
    rating: "4.5/5",
    date: "22 Sep, 2024",
    price: "$343",
    offer: "12%",
    file: "https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100",
  },
  {
    name: "Soft Gelatin 60 Capsules",
    rating: "4.5/5",
    date: "22 Sep, 2024",
    price: "$343",
    offer: "12%",
    file: "https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100",
  },
  {
    name: "Capsules",
    rating: "4.5/5",
    date: "22 Sep, 2024",
    price: "$343",
    offer: "12%",
    file: "https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100",
  },
  {
    name: "Fish Oil",
    rating: "4.5/5",
    date: "22 Sep, 2024",
    price: "$343",
    offer: "12%",
    file: "https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100",
  },
];
export const SocialLinksArray = [
  { id: "1", name: "Instagram", MediaFile: Instagram, connectedStatus: false },
  { id: "2", name: "Youtube", MediaFile: Youtube, connectedStatus: true },
  { id: "3", name: "Facebook", MediaFile: Facebook, connectedStatus: false },
  { id: "4", name: "Twitter", MediaFile: twitter, connectedStatus: true },
  { id: "5", name: "Tiktok", MediaFile: Tiktok, connectedStatus: false },
  { id: "6", name: "Bluesky", MediaFile: Bluesky, connectedStatus: false },
];
export const personalPreferences = [
  { label: "Orientation", value: "Gay" },
  { label: "Smoking", value: "Yes" },
  { label: "Drinking", value: "No" },
  { label: "Piercings", value: "No" },
  { label: "Tattoos", value: "No" },
  { label: "HIV Status", value: "Negative" },
  { label: "Hobbies", value: "Reading, Hiking" },
];

export const physicalCharacteristics = [
  { label: "Body Type", value: "Slim" },
  { label: "Hair Color", value: "Black" },
  { label: "Eye Color", value: "Black" },
  { label: "Body Hair", value: "Smooth" },
];

export const sexualHealthPreferences = [
  {
    label: "Cock Size",
    value: "7 Inch (17cm)",
    statusText: "Verify Cock Size",
    statusColor: "bg-primary",
  },
  { label: "Foreskin", value: "Yes" },
  { label: "Sexual Role", value: "Top" },
  { label: "Condoms Only", value: "Yes" },
  { label: "I'm Into", value: "Kissing, Anal" },
];
export const bioContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s. Lorem Ipsum has been the industry's standard dummy text since the 1500s.";
export const ProfileGalleryArray = [
  {
    id: "1",
    modalProfile: ModalProfile1,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "2",
    modalProfile: ModalProfile2,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "3",
    modalProfile: ModalProfile3,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "4",
    modalProfile: ModalProfile4,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "5",
    modalProfile: ModalProfile2,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "6",
    modalProfile: ModalProfile3,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "7",
    modalProfile: ModalProfile4,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "8",
    modalProfile: ModalProfile1,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "9",
    modalProfile: ModalProfile4,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "10",
    modalProfile: ModalProfile1,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
];
export const ProfileVideos = [
  {
    id: 1,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];
export const MultiProfileArray = [
  {
    modalProfile: ModalProfile1,
    desc: "Make cover image for Non Client",
    statusText: "Verify",
    statusColor: "bg-primary",
  },
  {
    modalProfile: ModalProfile1,
    desc: "Make cover image for Regular Client",
    statusText: "Verified",
    statusColor: "bg-verified",
  },
  {
    modalProfile: ModalProfile1,
    statusText: "Requested",
    statusColor: "bg-requested",
  },
  {
    modalProfile: ModalProfile1,
    desc: "Make cover image for Regular Client",
    statusText: "Rejected",
    statusColor: "bg-rejected",
  },
  {
    modalProfile: ModalProfile1,
    statusText: "Verify",
    statusColor: "bg-primary",
  },
  {
    modalProfile: ModalProfile1,
    desc: "Make cover image for Regular Client",
    statusText: "Verified",
    statusColor: "bg-verified",
  },
  {
    modalProfile: ModalProfile1,
    statusText: "Requested",
    statusColor: "bg-requested",
  },
  {
    modalProfile: ModalProfile1,
    statusText: "Rejected",
    statusColor: "bg-rejected",
  },
];
export const reviews = [
  {
    name: "John Smith",
    rating: "4.5/5",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    profileImage: ModelProfile,
  },
  {
    name: "Jane Doe",
    rating: "4.0/5",
    review: "Another review example goes here...",
    profileImage: ModelProfile,
  },
  {
    name: "John Smith",
    rating: "4.5/5",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    profileImage: ModelProfile,
  },
  {
    name: "Jane Doe",
    rating: "4.0/5",
    review: "Another review example goes here...",
    profileImage: ModelProfile,
  },
  {
    name: "John Smith",
    rating: "4.5/5",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    profileImage: ModelProfile,
  },
  {
    name: "Jane Doe",
    rating: "4.0/5",
    review: "Another review example goes here...",
    profileImage: ModelProfile,
  },
  {
    name: "John Smith",
    rating: "4.5/5",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    profileImage: ModelProfile,
  },
  {
    name: "Jane Doe",
    rating: "4.0/5",
    review: "Another review example goes here...",
    profileImage: ModelProfile,
  },
  {
    name: "John Smith",
    rating: "4.5/5",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    profileImage: ModelProfile,
  },
  {
    name: "Jane Doe",
    rating: "4.0/5",
    review: "Another review example goes here...",
    profileImage: ModelProfile,
  },
];
export const modelReviewData = [
  {
    id: 1,
    modelname: "Modi",
    clientname: "Amit shah",
    rating: "4.0/5",
    review:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-02",
  },
  {
    id: 2,
    modelname: "Modi",
    clientname: "Amit shah",
    rating: "4.2/5",
    review:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. !",
    date: "2023-11-02",
  },
  {
    id: 3,
    modelname: "Modi",
    clientname: "Amit shah",
    rating: "3.0/5",
    review:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-05",
  },
  {
    id: 4,
    modelname: "Modi",
    clientname: "Amit shah",
    rating: "4.5/5",
    review:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-05",
  },
  {
    id: 5,
    modelname: "Modi",
    clientname: "Amit shah",
    rating: "4.2/5",
    review:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-04",
  },
  {
    id: 6,
    modelname: "Modi",
    clientname: "Amit shah",
    rating: "4.0/5",
    review:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
  },
];
export const AllClientFeedbackdata = [
  {
    id: "1",
    name: "Model A",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
  {
    id: "2",
    name: "Model B",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out.",
    date: "2023-10-06",
    status: "Pending",
  },
  {
    id: "3",
    name: "Model C",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
  {
    id: "4",
    name: "Model D",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
  {
    id: "5",
    name: "Model E",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Pending",
  },
  {
    id: "6",
    name: "Model F",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Pending",
  },
  {
    id: "7",
    name: "Model G",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Pending",
  },
  {
    id: "8",
    name: "Model H",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Pending",
  },
  {
    id: "9",
    name: "Model H",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
  {
    id: "10",
    name: "Model H",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
  {
    id: "11",
    name: "Model H",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
  {
    id: "12",
    name: "Model H",
    feedback:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    date: "2023-10-06",
    status: "Resolved",
  },
];
export const AllNotificationTabledata = [
  {
    id: 1,
    title: "Welcome",
    message: "Welcome to the platform!",
    recipient: "User1",
    date: "2024-10-01",
    status: "Sent",
  },
  {
    id: 2,
    title: "Update",
    message: "Your profile has been updated.",
    recipient: "User2",
    date: "2024-10-02",
    status: "Sent",
  },
  {
    id: 3,
    title: "Update",
    message: "Your profile has been updated.",
    recipient: "User2",
    date: "2024-10-02",
    status: "Sent",
  },
  {
    id: 4,
    title: "Update",
    message: "Your profile has been updated.",
    recipient: "User2",
    date: "2024-10-02",
    status: "Sent",
  },
  {
    id: 5,
    title: "Update",
    message: "Your profile has been updated.",
    recipient: "User2",
    date: "2024-10-02",
    status: "Sent",
  },
  {
    id: 6,
    title: "Update",
    message: "Your profile has been updated.",
    recipient: "User2",
    date: "2024-10-02",
    status: "Sent",
  },
];
export const NotificationData = [
  {
    id: 1,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!.",
    time: "1 week ago",
    read: false,
  },
  {
    id: 3,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 4,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 Day ago",
    read: false,
  },
  {
    id: 5,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 6,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 7,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "12 hours ago",
    read: false,
  },
  {
    id: 8,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "4 hours ago",
    read: false,
  },
  {
    id: 9,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "8 hours ago",
    read: false,
  },
  {
    id: 10,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 11,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "1 hours ago",
    read: false,
  },
  {
    id: 12,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 13,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "4 hours ago",
    read: false,
  },
  {
    id: 14,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "6 hours ago",
    read: false,
  },
  {
    id: 15,
    message:
      "I recently dined at Bella Cucina and was thoroughly impressed. The ambiance is warm and inviting, perfect for a cozy evening out. The menu offers a delightful variety of Italian dishes, and the truffle risotto was simply divine—creamy and full of flavor. The service was attentive without being intrusive, making the experience even more enjoyable. I can't wait to return!",
    time: "8 hours ago",
    read: false,
  },
];
export const revenueData = [
  {
    userType: "Free",
    membershipPlan: "Basic",
    revenue: "$0",
    period: "October 2024",
  },
  {
    userType: "Premium",
    membershipPlan: "Gold",
    revenue: "$300",
    period: "October 2026",
  },
  {
    userType: "Advanced",
    membershipPlan: "Silver",
    revenue: "$500",
    period: "October 2028",
  },
];
export const wordManagementData = [
  {
    id: 1,
    word: "i like you",
    date: "2024-10-02",
  },
  {
    id: 2,
    word: "i like you",
    date: "2024-10-02",
  },
  {
    id: 3,
    word: "i like you",
    date: "2024-10-02",
  },
  {
    id: 4,
    word: "i like you",
    date: "2024-10-02",
  },
];
export const initialFeatureModalArray = [
  {
    id: "1",
    modalProfile: ModalProfile1,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "2",
    modalProfile: ModalProfile2,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "3",
    modalProfile: ModalProfile3,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "4",
    modalProfile: ModalProfile4,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "1",
    modalProfile: ModalProfile2,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "2",
    modalProfile: ModalProfile3,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
  {
    id: "3",
    modalProfile: ModalProfile4,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: false,
  },
  {
    id: "4",
    modalProfile: ModalProfile1,
    name: "Reza E. Prasetyo",
    age: "26",
    location: "Mohali, Chandigarh (India)",
    rating: "4.5",
    plan: true,
  },
];

export const ProfileAgeList = [
  { id: "1", value: "18" },
  { id: "2", value: "19" },
  { id: "3", value: "20" },
  { id: "4", value: "21" },
  { id: "5", value: "22" },
  { id: "6", value: "23" },
  { id: "7", value: "24" },
  { id: "8", value: "25" },
  { id: "9", value: "26" },
  { id: "10", value: "27" },
  { id: "11", value: "28" },
  { id: "12", value: "29" },
  { id: "13", value: "30" },
  { id: "14", value: "31" },
  { id: "15", value: "32" },
  { id: "16", value: "33" },
  { id: "17", value: "34" },
  { id: "18", value: "35" },
  { id: "19", value: "36" },
  { id: "20", value: "37" },
  { id: "21", value: "38" },
  { id: "22", value: "39" },
  { id: "23", value: "40" },
  { id: "24", value: "41" },
  { id: "25", value: "42" },
  { id: "26", value: "43" },
  { id: "27", value: "44" },
  { id: "28", value: "45" },
  { id: "29", value: "46" },
  { id: "30", value: "47" },
  { id: "31", value: "48" },
  { id: "32", value: "49" },
  { id: "33", value: "50" },
  { id: "34", value: "51" },
  { id: "35", value: "52" },
  { id: "36", value: "53" },
  { id: "37", value: "54" },
  { id: "38", value: "55" },
  { id: "39", value: "56" },
  { id: "40", value: "57" },
  { id: "41", value: "58" },
  { id: "42", value: "59" },
  { id: "43", value: "60" },
  { id: "44", value: "61" },
  { id: "45", value: "62" },
  { id: "46", value: "63" },
  { id: "47", value: "64" },
  { id: "48", value: "65" },
  { id: "49", value: "66" },
  { id: "50", value: "67" },
  { id: "51", value: "68" },
  { id: "52", value: "69" },
  { id: "53", value: "70" },
  { id: "54", value: "71" },
  { id: "55", value: "72" },
  { id: "56", value: "73" },
  { id: "57", value: "74" },
  { id: "58", value: "75" },
  { id: "59", value: "76" },
  { id: "60", value: "77" },
  { id: "61", value: "78" },
  { id: "62", value: "79" },
  { id: "63", value: "80" },
  { id: "64", value: "81" },
  { id: "65", value: "82" },
  { id: "66", value: "83" },
  { id: "67", value: "84" },
  { id: "68", value: "85" },
  { id: "69", value: "86" },
  { id: "70", value: "87" },
  { id: "71", value: "88" },
  { id: "72", value: "89" },
  { id: "73", value: "90" },
  { id: "74", value: "91" },
  { id: "75", value: "92" },
  { id: "76", value: "93" },
  { id: "77", value: "94" },
  { id: "78", value: "95" },
  { id: "79", value: "96" },
  { id: "80", value: "97" },
  { id: "81", value: "98" },
  { id: "82", value: "99" },
  { id: "83", value: "100" },
];
export const profileHeightListFoot = [
  { id: "1", value: "4'" },
  { id: "2", value: "4'1\"" },
  { id: "3", value: "4'2\"" },
  { id: "4", value: "4'3\"" },
  { id: "5", value: "4'4\"" },
  { id: "6", value: "4'5\"" },
  { id: "7", value: "4'6\"" },
  { id: "8", value: "4'7\"" },
  { id: "9", value: "4'8\"" },
  { id: "10", value: "4'9\"" },
  { id: "11", value: "4'10\"" },
  { id: "12", value: "4'11\"" },
  { id: "13", value: "5'" },
  { id: "14", value: "5'1\"" },
  { id: "15", value: "5'2\"" },
  { id: "16", value: "5'3\"" },
  { id: "17", value: "5'4\"" },
  { id: "18", value: "5'5\"" },
  { id: "19", value: "5'6\"" },
  { id: "20", value: "5'7\"" },
  { id: "21", value: "5'8\"" },
  { id: "22", value: "5'9\"" },
  { id: "23", value: "5'10\"" },
  { id: "24", value: "5'11\"" },
  { id: "25", value: "6'" },
  { id: "26", value: "6'1\"" },
  { id: "27", value: "6'2\"" },
  { id: "28", value: "6'3\"" },
  { id: "29", value: "6'4\"" },
  { id: "30", value: "6'5\"" },
  { id: "31", value: "6'6\"" },
  { id: "32", value: "6'7\"" },
  { id: "33", value: "6'8\"" },
  { id: "34", value: "6'9\"" },
  { id: "35", value: "6'10\"" },
  { id: "36", value: "6'11\"" },
  { id: "37", value: "7'" },
];

export const profileHeightListCM = [
  { id: "1", value: "122" }, // 4'0"
  { id: "2", value: "123" }, // 4'1"
  { id: "3", value: "124" }, // 4'2"
  { id: "4", value: "125" }, // 4'3"
  { id: "5", value: "126" }, // 4'4"
  { id: "6", value: "127" }, // 4'5"
  { id: "7", value: "128" }, // 4'6"
  { id: "8", value: "129" }, // 4'7"
  { id: "9", value: "130" }, // 4'8"
  { id: "10", value: "131" }, // 4'9"
  { id: "11", value: "132" }, // 4'10"
  { id: "12", value: "133" }, // 4'11"
  { id: "13", value: "134" }, // 5'0"
  { id: "14", value: "135" }, // 5'1"
  { id: "15", value: "136" }, // 5'2"
  { id: "16", value: "137" }, // 5'3"
  { id: "17", value: "138" }, // 5'4"
  { id: "18", value: "139" }, // 5'5"
  { id: "19", value: "140" }, // 5'6"
  { id: "20", value: "141" }, // 5'7"
  { id: "21", value: "142" }, // 5'8"
  { id: "22", value: "143" }, // 5'9"
  { id: "23", value: "144" }, // 5'10"
  { id: "24", value: "145" }, // 5'11"
  { id: "25", value: "146" }, // 6'0"
  { id: "26", value: "147" }, // 6'1"
  { id: "27", value: "148" }, // 6'2"
  { id: "28", value: "149" }, // 6'3"
  { id: "29", value: "150" }, // 6'4"
  { id: "30", value: "151" }, // 6'5"
  { id: "31", value: "152" }, // 6'6"
  { id: "32", value: "153" }, // 6'7"
  { id: "33", value: "154" }, // 6'8"
  { id: "34", value: "155" }, // 6'9"
  { id: "35", value: "156" }, // 6'10"
  { id: "36", value: "157" }, // 6'11"
  { id: "37", value: "158" }, // 7'0"
  { id: "38", value: "159" }, // 7'1"
  { id: "39", value: "160" }, // 7'2"
  { id: "40", value: "161" }, // 7'3"
  { id: "41", value: "162" }, // 7'4"
  { id: "42", value: "163" }, // 7'5"
  { id: "43", value: "164" }, // 7'6"
  { id: "44", value: "165" }, // 7'7"
  { id: "45", value: "166" }, // 7'8"
  { id: "46", value: "167" }, // 7'9"
  { id: "47", value: "168" }, // 7'10"
  { id: "48", value: "169" }, // 7'11"
  { id: "49", value: "170" }, // 8'0"
  { id: "50", value: "171" }, // 8'1"
  { id: "51", value: "172" }, // 8'2"
  { id: "52", value: "173" }, // 8'3"
  { id: "53", value: "174" }, // 8'4"
  { id: "54", value: "175" }, // 8'5"
  { id: "55", value: "176" }, // 8'6"
  { id: "56", value: "177" }, // 8'7"
  { id: "57", value: "178" }, // 8'8"
  { id: "58", value: "179" }, // 8'9"
  { id: "59", value: "180" }, // 8'10"
  { id: "60", value: "181" }, // 8'11"
  { id: "61", value: "182" }, // 9'0"
  { id: "62", value: "183" }, // 9'1"
  { id: "63", value: "184" }, // 9'2"
  { id: "64", value: "185" }, // 9'3"
  { id: "65", value: "186" }, // 9'4"
  { id: "66", value: "187" }, // 9'5"
  { id: "67", value: "188" }, // 9'6"
  { id: "68", value: "189" }, // 9'7"
  { id: "69", value: "190" }, // 9'8"
  { id: "70", value: "191" }, // 9'9"
  { id: "71", value: "192" }, // 9'10"
  { id: "72", value: "193" }, // 9'11"
  { id: "73", value: "194" }, // 10'0"
  { id: "74", value: "195" }, // 10'1"
  { id: "75", value: "196" }, // 10'2"
  { id: "76", value: "197" }, // 10'3"
  { id: "77", value: "198" }, // 10'4"
  { id: "78", value: "199" }, // 10'5"
  { id: "79", value: "200" }, // 10'6"
  { id: "80", value: "201" }, // 10'7"
  { id: "81", value: "202" }, // 10'8"
  { id: "82", value: "203" }, // 10'9"
  { id: "83", value: "204" }, // 10'10"
  { id: "84", value: "205" }, // 10'11"
  { id: "85", value: "206" }, // 11'0"
  { id: "86", value: "207" }, // 11'1"
  { id: "87", value: "208" }, // 11'2"
  { id: "88", value: "209" }, // 11'3"
  { id: "89", value: "210" }, // 11'4"
  { id: "90", value: "211" }, // 11'5"
  { id: "91", value: "212" }, // 11'6"
  { id: "92", value: "213" }, // 11'7"
  { id: "93", value: "214" }, // 11'8"
  { id: "94", value: "215" }, // 11'9"
  { id: "95", value: "216" }, // 11'10"
  { id: "96", value: "217" }, // 11'11"
  { id: "97", value: "218" }, // 12'0"
  { id: "98", value: "219" }, // 12'1"
  { id: "99", value: "220" }, // 12'2"
  { id: "100", value: "221" }, // 12'3"
  { id: "101", value: "222" }, // 12'4"
  { id: "102", value: "223" }, // 12'5"
  { id: "103", value: "224" }, // 12'6"
  { id: "104", value: "225" }, // 12'7"
  { id: "105", value: "226" }, // 12'8"
  { id: "106", value: "227" }, // 12'9"
  { id: "107", value: "228" }, // 12'10"
  { id: "108", value: "229" }, // 12'11"
  { id: "109", value: "230" }, // 13'0"
  { id: "110", value: "231" }, // 13'1"
  { id: "111", value: "232" }, // 13'2"
  { id: "112", value: "233" }, // 13'3"
  { id: "113", value: "234" }, // 13'4"
  { id: "114", value: "235" }, // 13'5"
  { id: "115", value: "236" }, // 13'6"
  { id: "116", value: "237" }, // 13'7"
  { id: "117", value: "238" }, // 13'8"
  { id: "118", value: "239" }, // 13'9"
  { id: "119", value: "240" }, // 13'10"
  { id: "120", value: "241" }, // 13'11"
  { id: "121", value: "242" }, // 14'0"
  { id: "122", value: "243" }, // 14'1"
  { id: "123", value: "244" }, // 14'2"
];

export const weightListLBS = [
  { id: "1", value: "100" },
  { id: "2", value: "105" },
  { id: "3", value: "110" },
  { id: "4", value: "115" },
  { id: "5", value: "120" },
  { id: "6", value: "125" },
  { id: "7", value: "130" },
  { id: "8", value: "135" },
  { id: "9", value: "140" },
  { id: "10", value: "145" },
  { id: "11", value: "150" },
  { id: "12", value: "155" },
  { id: "13", value: "160" },
  { id: "14", value: "165" },
  { id: "15", value: "170" },
  { id: "16", value: "175" },
  { id: "17", value: "180" },
  { id: "18", value: "185" },
  { id: "19", value: "190" },
  { id: "20", value: "195" },
  { id: "21", value: "200" },
  { id: "22", value: "205" },
  { id: "23", value: "210" },
  { id: "24", value: "215" },
  { id: "25", value: "220" },
  { id: "26", value: "225" },
  { id: "27", value: "230" },
  { id: "28", value: "235" },
  { id: "29", value: "240" },
  { id: "30", value: "245" },
  { id: "31", value: "250" },
  { id: "32", value: "255" },
  { id: "33", value: "260" },
  { id: "34", value: "265" },
  { id: "35", value: "270" },
  { id: "36", value: "275" },
  { id: "37", value: "280" },
  { id: "38", value: "285" },
  { id: "39", value: "290" },
  { id: "40", value: "295" },
  { id: "41", value: "300" },
  { id: "42", value: "305" },
  { id: "43", value: "310" },
  { id: "44", value: "315" },
  { id: "45", value: "320" },
  { id: "46", value: "325" },
  { id: "47", value: "330" },
  { id: "48", value: "335" },
  { id: "49", value: "340" },
  { id: "50", value: "345" },
  { id: "51", value: "350" },
  { id: "52", value: "355" },
  { id: "53", value: "360" },
  { id: "54", value: "365" },
  { id: "55", value: "370" },
  { id: "56", value: "375" },
  { id: "57", value: "380" },
  { id: "58", value: "385" },
  { id: "59", value: "390" },
  { id: "60", value: "395" },
  { id: "61", value: "400" },
];
export const weightListKG = [
  { id: "1", value: "45" },
  { id: "2", value: "50" },
  { id: "3", value: "55" },
  { id: "4", value: "60" },
  { id: "5", value: "65" },
  { id: "6", value: "70" },
  { id: "7", value: "75" },
  { id: "8", value: "80" },
  { id: "9", value: "85" },
  { id: "10", value: "90" },
  { id: "11", value: "95" },
  { id: "12", value: "100" },
  { id: "13", value: "105" },
  { id: "14", value: "110" },
  { id: "15", value: "115" },
  { id: "16", value: "120" },
  { id: "17", value: "125" },
  { id: "18", value: "130" },
  { id: "19", value: "135" },
  { id: "20", value: "140" },
  { id: "21", value: "145" },
  { id: "22", value: "150" },
  { id: "23", value: "155" },
  { id: "24", value: "160" },
  { id: "25", value: "165" },
  { id: "26", value: "170" },
  { id: "27", value: "175" },
  { id: "28", value: "180" },
  { id: "29", value: "185" },
];
export const cockSizeListInches = [
  { id: "1", value: "3" },
  { id: "2", value: "3.1" },
  { id: "3", value: "3.2" },
  { id: "4", value: "3.3" },
  { id: "5", value: "3.4" },
  { id: "6", value: "3.5" },
  { id: "7", value: "3.6" },
  { id: "8", value: "3.7" },
  { id: "9", value: "3.8" },
  { id: "10", value: "3.9" },
  { id: "11", value: "4" },
  { id: "12", value: "4.1" },
  { id: "13", value: "4.2" },
  { id: "14", value: "4.3" },
  { id: "15", value: "4.4" },
  { id: "16", value: "4.5" },
  { id: "17", value: "4.6" },
  { id: "18", value: "4.7" },
  { id: "19", value: "4.8" },
  { id: "20", value: "4.9" },
  { id: "21", value: "5" },
  { id: "22", value: "5.1" },
  { id: "23", value: "5.2" },
  { id: "24", value: "5.3" },
  { id: "25", value: "5.4" },
  { id: "26", value: "5.5" },
  { id: "27", value: "5.6" },
  { id: "28", value: "5.7" },
  { id: "29", value: "5.8" },
  { id: "30", value: "5.9" },
  { id: "31", value: "6" },
  { id: "32", value: "6.1" },
  { id: "33", value: "6.2" },
  { id: "34", value: "6.3" },
  { id: "35", value: "6.4" },
  { id: "36", value: "6.5" },
  { id: "37", value: "6.6" },
  { id: "38", value: "6.7" },
  { id: "39", value: "6.8" },
  { id: "40", value: "6.9" },
  { id: "41", value: "7" },
  { id: "42", value: "7.1" },
  { id: "43", value: "7.2" },
  { id: "44", value: "7.3" },
  { id: "45", value: "7.4" },
  { id: "46", value: "7.5" },
  { id: "47", value: "7.6" },
  { id: "48", value: "7.7" },
  { id: "49", value: "7.8" },
  { id: "50", value: "7.9" },
  { id: "51", value: "8" },
  { id: "52", value: "8.1" },
  { id: "53", value: "8.2" },
  { id: "54", value: "8.3" },
  { id: "55", value: "8.4" },
  { id: "56", value: "8.5" },
  { id: "57", value: "8.6" },
  { id: "58", value: "8.7" },
  { id: "59", value: "8.8" },
  { id: "60", value: "8.9" },
  { id: "61", value: "9" },
  { id: "62", value: "9.1" },
  { id: "63", value: "9.2" },
  { id: "64", value: "9.3" },
  { id: "65", value: "9.4" },
  { id: "66", value: "9.5" },
  { id: "67", value: "9.6" },
  { id: "68", value: "9.7" },
  { id: "69", value: "9.8" },
  { id: "70", value: "9.9" },
  { id: "71", value: "10" },
  { id: "72", value: "10.1" },
  { id: "73", value: "10.2" },
  { id: "74", value: "10.3" },
  { id: "75", value: "10.4" },
  { id: "76", value: "10.5" },
  { id: "77", value: "10.6" },
  { id: "78", value: "10.7" },
  { id: "79", value: "10.8" },
  { id: "80", value: "10.9" },
  { id: "81", value: "11" },
  { id: "82", value: "11.1" },
  { id: "83", value: "11.2" },
  { id: "84", value: "11.3" },
  { id: "85", value: "11.4" },
  { id: "86", value: "11.5" },
  { id: "87", value: "11.6" },
  { id: "88", value: "11.7" },
  { id: "89", value: "11.8" },
  { id: "90", value: "11.9" },
  { id: "91", value: "12" },
  { id: "92", value: "12.1" },
  { id: "93", value: "12.2" },
  { id: "94", value: "12.3" },
  { id: "95", value: "12.4" },
  { id: "96", value: "12.5" },
  { id: "97", value: "12.6" },
  { id: "98", value: "12.7" },
  { id: "99", value: "12.8" },
  { id: "100", value: "12.9" },
  { id: "101", value: "13" },
  { id: "102", value: "13.1" },
  { id: "103", value: "13.2" },
  { id: "104", value: "13.3" },
  { id: "105", value: "13.4" },
  { id: "106", value: "13.5" },
  { id: "107", value: "13.6" },
  { id: "108", value: "13.7" },
  { id: "109", value: "13.8" },
  { id: "110", value: "13.9" },
  { id: "111", value: "14" },
  { id: "112", value: "14.1" },
  { id: "113", value: "14.2" },
  { id: "114", value: "14.3" },
  { id: "115", value: "14.4" },
  { id: "116", value: "14.5" },
  { id: "117", value: "14.6" },
  { id: "118", value: "14.7" },
  { id: "119", value: "14.8" },
  { id: "120", value: "14.9" },
  { id: "121", value: "15" },
];

export const cockSizeListCM = [
  { id: "1", value: "7" },
  { id: "2", value: "7.5" },
  { id: "3", value: "8" },
  { id: "4", value: "8.5" },
  { id: "5", value: "9" },
  { id: "6", value: "9.5" },
  { id: "7", value: "10" },
  { id: "8", value: "10.5" },
  { id: "9", value: "11" },
  { id: "10", value: "11.5" },
  { id: "11", value: "12" },
  { id: "12", value: "12.5" },
  { id: "13", value: "13" },
  { id: "14", value: "13.5" },
  { id: "15", value: "14" },
  { id: "16", value: "14.5" },
  { id: "17", value: "15" },
  { id: "18", value: "15.5" },
  { id: "19", value: "16" },
  { id: "20", value: "16.5" },
  { id: "21", value: "17" },
  { id: "22", value: "17.5" },
  { id: "23", value: "18" },
  { id: "24", value: "18.5" },
  { id: "25", value: "19" },
  { id: "26", value: "19.5" },
  { id: "27", value: "20" },
  { id: "28", value: "20.5" },
  { id: "29", value: "21" },
  { id: "30", value: "21.5" },
  { id: "31", value: "22" },
  { id: "32", value: "22.5" },
  { id: "33", value: "23" },
  { id: "34", value: "23.5" },
  { id: "35", value: "24" },
  { id: "36", value: "24.5" },
  { id: "37", value: "25" },
  { id: "38", value: "25.5" },
  { id: "39", value: "26" },
  { id: "40", value: "26.5" },
  { id: "41", value: "27" },
  { id: "42", value: "27.5" },
  { id: "43", value: "28" },
  { id: "44", value: "28.5" },
  { id: "45", value: "29" },
  { id: "46", value: "29.5" },
  { id: "47", value: "30" },
  { id: "48", value: "30.5" },
  { id: "49", value: "31" },
  { id: "50", value: "31.5" },
  { id: "51", value: "32" },
  { id: "52", value: "32.5" },
  { id: "53", value: "33" },
  { id: "54", value: "33.5" },
  { id: "55", value: "34" },
  { id: "56", value: "34.5" },
  { id: "57", value: "35" },
  { id: "58", value: "35.5" },
  { id: "59", value: "36" },
  { id: "60", value: "36.5" },
  { id: "61", value: "37" },
  { id: "62", value: "37.5" },
  { id: "63", value: "38" },
];

export const loadingLabels = [
  "Just a moment...",
  "Loading content...",
  "Please wait...",
  "Getting things ready...",
  "Preparing your content...",
  "Processing request...",
  "Almost there...",
  "Fetching content...",
];

export const LanguagesList = [
  { name: "Albanian", localName: "shqiptar", code: "sq" },
  { name: "Arabic", localName: "العربية", code: "ar" },
  { name: "Bengali", localName: "বাংলা", code: "bn" },
  { name: "Chinese", localName: "中文", code: "ch" },
  { name: "Dutch", localName: "Nederlandse", code: "nl" },
  { name: "English", localName: "English", code: "en" },
  { name: "French", localName: "Français", code: "fr" },
  { name: "German", localName: "German", code: "de" },
  { name: "Greek", localName: "ελληνική", code: "gr" },
  { name: "Guarani", localName: "Avañe'ẽ", code: "gu" },
  { name: "Hindi", localName: "हिंदुस्तानी", code: "hi" },
  { name: "Italian", localName: "Italiano", code: "it" },
  { name: "Korean", localName: "한국어", code: "ko" },
  { name: "Malay", localName: "Melayu", code: "ms" },
  { name: "Persian", localName: "پارسی", code: "fa" },
  { name: "Portuguese", localName: "Português", code: "pt" },
  { name: "Romanian", localName: "Română", code: "ro" },
  { name: "Russian", localName: "русский", code: "ru" },
  { name: "Serbo-Croatian", localName: "Српско-хрватски", code: "sr" },
  { name: "Spanish", localName: "Español", code: "es" },
  { name: "Swahili", localName: "Kiswahili", code: "sw" },
  { name: "Swedish", localName: "Swedish", code: "sv" },
  { name: "Tamil", localName: "தமிழ்", code: "ta" },
  { name: "Turkish", localName: "Türk", code: "tr" },
];
