const transactions = [
  {
    monthYear: "Dec 2020",
    totalTaskerEarning: 55000,
    commissionEarned: 2140,
    totalTaskerInvolved: 23,
    approved: false,
    redeem: false,
  },
  {
    monthYear: "Jan 2021",
    totalTaskerEarning: 55000,
    commissionEarned: 2140,
    totalTaskerInvolved: 23,
    approved: true,
    redeem: false,
  },
  {
    monthYear: "Feb 2021",
    totalTaskerEarning: 55000,
    commissionEarned: 2140,
    totalTaskerInvolved: 23,
    approved: true,
    redeem: false,
  },
  {
    monthYear: "Mar 2021",
    totalTaskerEarning: 55000,
    commissionEarned: 2140,
    totalTaskerInvolved: 23,
    approved: false,
    redeem: false,
  },
];

const homeCardArr = [
  {
    name: "Total Profile",
    count: 54792,
    imageName: "home1.svg",
  },
  {
    name: "Active Profile",
    count: 32463,
    imageName: "home2.svg",
  },
  {
    name: "Profile Registered",
    count: 54792,
    imageName: "home3.svg",
  },
  {
    name: "Profile Onboarded",
    count: 54792,
    imageName: "home4.svg",
  },
];

const homeAllProfiles = [
  {
    name: "Anjana Laxanatti",
    jobRole: "Marketing Associate",
    city: "Hyderabad",
    state: "State",
    pincode: "Pincode",
    date: "23",
    month: "April",
    year: "2020",
    time: "14:20",
    status: "Added", // Added, Onboarded, Registered
  },
  {
    name: "Anjana Laxanatti",
    jobRole: "Marketing Associate",
    city: "Hyderabad",
    state: "State",
    pincode: "Pincode",
    date: "23",
    month: "April",
    year: "2020",
    time: "14:20",
    status: "Onboarded", // Added, Onboarded, Registered
  },
  {
    name: "Anjana Laxanatti",
    jobRole: "Marketing Associate",
    city: "Hyderabad",
    state: "State",
    pincode: "Pincode",
    date: "23",
    month: "April",
    year: "2020",
    time: "14:20",
    status: "Registered", // Added, Onboarded, Registered
  },
  {
    name: "Anjana Laxanatti",
    jobRole: "Marketing Associate",
    city: "Hyderabad",
    state: "State",
    pincode: "Pincode",
    date: "23",
    month: "April",
    year: "2020",
    time: "14:20",
    status: "Added", // Added, Onboarded, Registered
  },
];

const reportDetails=[
  {
    name:"Onboard Merchant",
    totalTaskerInvolved:1000,
    totalTaskerEarnings:5000,
    totalCommission:8000
  },
  {
    name:"FSE",
    totalTaskerInvolved:300,
    totalTaskerEarnings:3000,
    totalCommission:5000
  },
  {
    name:"Promoter",
    totalTaskerInvolved:800,
    totalTaskerEarnings:8000,
    totalCommission:4000
  },
  {
    name:"Marketing",
    totalTaskerInvolved:150,
    totalTaskerEarnings:8000,
    totalCommission:300
  }
]

const MyReportDetailsData={
  name:"Onboard Merchant",
  startDate:"01/02/2021",
  endDate:"21/03/2021",
  details:[
    {
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Jio Mart",
      startDate:"18/03/2021",
      endDate:"21/03/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    },{
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Amazon Fruit",
      startDate:"14/03/2021",
      endDate:"17/03/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    },{
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Phonepe",
      startDate:"05/03/2021",
      endDate:"13/03/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    },{
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Amazon Fruit",
      startDate:"01/03/2021",
      endDate:"04/03/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    },{
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Phone Pe",
      startDate:"22/02/2021",
      endDate:"28/02/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    },{
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Jio Mart",
      startDate:"16/02/2021",
      endDate:"22/02/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    },{
      fseId:"FSE ID",
      fseName:"Abhijit Mohanty",
      projectName:"Jio Mart",
      startDate:"07/02/2021",
      endDate:"15/02/2021",
      totalTaskerEarnings:25000,
      totalCommission:5000
    }
  ]
}
export { homeCardArr, homeAllProfiles, reportDetails, MyReportDetailsData };
export default transactions;
