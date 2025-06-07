import { v4 as uuid } from "uuid";

export const DashboardMenu = [
  {
    id: uuid(),
    title: "Dashboard",
    icon: "home",
    link: "/",
  },
  {
    id: uuid(),
    title: "LAYOUTS & PAGES",
    grouptitle: true,
  },
  {
    id: uuid(),
    title: "Pages",
    icon: "layers",
    children: [
      { id: uuid(), link: "/pages/profile", name: "Profile" },
      { id: uuid(), link: "/pages/settings", name: "Settings" },
      { id: uuid(), link: "/pages/billing", name: "Billing" },
      { id: uuid(), link: "/pages/pricing", name: "Pricing" },
      { id: uuid(), link: "/404", name: "404 Error" },
    ],
  },
  {
    id: uuid(),
    title: "Authentication",
    icon: "lock",
    children: [
      { id: uuid(), link: "/auth/sign-in", name: "Sign In" },
      { id: uuid(), link: "/auth/sign-up", name: "Sign Up" },
      {
        id: uuid(),
        link: "/auth/forget-password",
        name: "Forget Password",
      },
    ],
  },
  {
    id: uuid(),
    title: "Layouts",
    icon: "layout",
    link: "/components/layouts/layout-vertical",
  },
  {
    id: uuid(),
    title: "UI COMPONENTS",
    grouptitle: true,
  },
  {
    id: uuid(),
    title: "Components",
    icon: "monitor",
    children: [
      { id: uuid(), link: "/components/accordions", name: "Accordions" },
      { id: uuid(), link: "/components/alerts", name: "Alerts" },
      { id: uuid(), link: "/components/badges", name: "Badges" },
      { id: uuid(), link: "/components/breadcrumbs", name: "Breadcrumbs" },
      { id: uuid(), link: "/components/buttons", name: "Buttons" },
      { id: uuid(), link: "/components/button-group", name: "ButtonGroup" },
      { id: uuid(), link: "/components/cards", name: "Cards" },
      { id: uuid(), link: "/components/carousels", name: "Carousel" },
      { id: uuid(), link: "/components/close-button", name: "Close Button" },
      { id: uuid(), link: "/components/collapse", name: "Collapse" },
      { id: uuid(), link: "/components/dropdowns", name: "Dropdowns" },
      { id: uuid(), link: "/components/list-group", name: "Listgroup" },
      { id: uuid(), link: "/components/modal", name: "Modal" },
      { id: uuid(), link: "/components/navs", name: "Navs" },
      { id: uuid(), link: "/components/navbar", name: "Navbar" },
      { id: uuid(), link: "/components/offcanvas", name: "Offcanvas" },
      { id: uuid(), link: "/components/overlays", name: "Overlays" },
      { id: uuid(), link: "/components/pagination", name: "Pagination" },
      { id: uuid(), link: "/components/popovers", name: "Popovers" },
      { id: uuid(), link: "/components/progress", name: "Progress" },
      { id: uuid(), link: "/components/spinners", name: "Spinners" },
      { id: uuid(), link: "/components/tables", name: "Tables" },
      { id: uuid(), link: "/components/toasts", name: "Toasts" },
      { id: uuid(), link: "/components/tooltips", name: "Tooltips" },
    ],
  },
  {
    id: uuid(),
    title: "Menu Level",
    icon: "corner-left-down",
    children: [
      {
        id: uuid(),
        link: "#",
        title: "Two Level",
        children: [
          { id: uuid(), link: "#", name: "NavItem 1" },
          { id: uuid(), link: "#", name: "NavItem 2" },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Three Level",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "NavItem 1",
            children: [
              { id: uuid(), link: "#", name: "NavChildItem 1" },
              { id: uuid(), link: "#", name: "NavChildItem 2" },
            ],
          },
          { id: uuid(), link: "#", name: "NavItem 2" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    title: "Documentation",
    grouptitle: true,
  },
  {
    id: uuid(),
    title: "Docs",
    icon: "clipboard",
    link: "/documentation",
  },
  {
    id: uuid(),
    title: "Changelog",
    icon: "git-pull-request",
    link: "/changelog",
  },
  {
    id: uuid(),
    title: "Download",
    icon: "download",
    link: "https://codescandy.gumroad.com/l/dashui-nextjs",
  },
];

export const SidebarMenu = [
  {
    id: uuid(),
    title: "Dashboard",
    icon: "home",
    link: "/",
  },
  {
    id: uuid(),
    title: "Pharmacy Products",
    icon: "user",
    children: [
      {
        id: uuid(),
        link: "/all-products",
        name: "All Products",
      },
      {
        id: uuid(),
        link: "/categories-management",
        name: "Category Management",
      },
      {
        id: uuid(),
        link: "/offers",
        name: "Offers",
      },
    ],
  },
  {
    id: uuid(),
    title: "Patient Management",
    icon: "user",
    children: [
      {
        id: uuid(),
        link: "/patients",
        name: "All Patient",
      },
      // {
      //   id: uuid(),
      //   link: "/appointments",
      //   name: "Scheduled Appointments",
      // },
    ],
  },
  {
    id: uuid(),
    title: "Doctor Management",
    icon: "users",
    children: [
      { id: uuid(), link: "/doctors", name: "All Doctors" },
      { id: uuid(), link: "/doctor-clinic", name: "Doctor Clinic" },
    ],
  },
  {
    id: uuid(),
    title: "Appointments",
    icon: "home",
    link: "/appointments",
  },
  {
    id: uuid(),
    title: "Settings",
    icon: "layout",
    children: [
      { id: uuid(), link: "/settings", name: "Manage Site Settings" },
      { id: uuid(), link: "/policy", name: "Privacy Policy" },
    ],
  },
  {
    id: uuid(),
    title: "Analytics",
    icon: "layout",
    children: [{ id: uuid(), link: "/user-growth", name: "User Growth" }],
  },
];
