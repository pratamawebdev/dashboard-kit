export const menuSidebar = [
  {
    id: 1,
    title: "Overview",
    path: "/",
    icon: "../images/icon/chart-pie.svg",
    isAdmin: true,
  },
  {
    id: 2,
    title: "Tickets",
    path: "/tickets",
    icon: "../images/icon/ticket.svg",
    isAdmin: true,
  },
  {
    id: 3,
    title: "Ideas",
    path: "/ideas",
    icon: "../images/icon/light-blub.svg",
    isAdmin: true,
  },
  {
    id: 4,
    title: "Contacts",
    path: "/contacts",
    icon: "../images/icon/chat-bubble-oval-left.svg",
    isAdmin: true,
  },
  {
    id: 5,
    title: "Agents",
    path: "/agents",
    icon: "../images/icon/user-group.svg",
    isAdmin: true,
  },
  {
    id: 6,
    title: "Articles",
    path: "/articles",
    icon: "../images/icon/clipboard-document-list.svg",
    isAdmin: true,
  },
  {
    id: 7,
    title: "Settings",
    path: "/settings",
    icon: "../images/icon/cog-6-tooth.svg",
    isAdmin: true,
  },
  {
    id: 8,
    title: "Subscription",
    path: "/subscription",
    icon: "../images/icon/shield-check.svg",
    isAdmin: true,
  },
];

export const dataThead = [
  "Ticket details",
  "Customer name",
  "Date",
  "Priority",
  "",
];

export const dataPriority = [
  {
    id: 1,
    priority: "normal",
    bgColor: "bg-[#29CC97]",
  },
  {
    id: 2,
    priority: "low",
    bgColor: "bg-[#FEC400]",
  },
  {
    id: 3,
    priority: "high",
    bgColor: "bg-[#F12B2C]",
  },
];

export const dataStatus = [
  {
    id: 1,
    status: "approve",
  },
  {
    id: 2,
    status: "reject",
  },
];

export const dataOtherStatus = [
  {
    id: 1,
    name: "Unresolved",
    otherStatus: "unresolved",
  },
  {
    id: 2,
    name: "Over due",
    otherStatus: "over due",
  },
  {
    id: 3,
    name: "Open",
    otherStatus: "open",
  },
  {
    id: 4,
    name: "On hold",
    otherStatus: "on hold",
  },
  {
    id: 5,
    name: "Received",
    otherStatus: "received",
  },
  {
    id: 6,
    name: "resolved",
    otherStatus: "resolved",
  },
];

export const dataGroups = [
  {
    id: 1,
    name: "Support",
    value: "support",
  },
  {
    id: 2,
    name: "Sales",
    value: "sales",
  },
  {
    id: 3,
    name: "Marketing",
    value: "marketing",
  },
];

export const dataTaskStatus = [
  {
    id: 1,
    status: "urgent",
    bgColor: "bg-[#FEC400] text-white",
  },
  {
    id: 2,
    status: "new",
    bgColor: "bg-[#29CC97] text-white",
  },
  {
    id: 3,
    status: "default",
    bgColor: "bg-[#F0F1F7] text-[#ABADBD]",
  },
];

export const otherData = [
  {
    id: 1,
    name: "Average first response time",
    value: "33m",
  },
  {
    id: 2,
    name: "Average response time",
    value: "3h 8m",
  },
  {
    id: 3,
    name: "Resolution within SLA",
    value: "94%",
  },
];
