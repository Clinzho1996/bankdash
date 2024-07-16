import {
  IconHomeFilled,
  IconCoinMonero,
  IconUserFilled,
  IconGraphFilled,
  IconCreditCardFilled,
  IconBuildingBank,
  IconDrone,
  IconBulbFilled,
  IconSettingsFilled,
  IconBrandPaypal,
  IconCreditCardRefund,
  IconMessageDollar,
} from "@tabler/icons-react";

export const sidebarLinks = [
  {
    icon: IconHomeFilled,
    route: "/",
    label: "Dashboard",
  },
  {
    icon: IconCoinMonero,
    route: "/transactions",
    label: "Transactions",
  },
  {
    icon: IconUserFilled,
    route: "/accounts",
    label: "Accounts",
  },
  {
    icon: IconGraphFilled,
    route: "/investment",
    label: "Investment",
  },
  {
    icon: IconCreditCardFilled,
    route: "/credit-cards",
    label: "Credit Cards",
  },
  {
    icon: IconBuildingBank,
    route: "/loans",
    label: "Loans",
  },
  {
    icon: IconDrone,
    route: "/services",
    label: "Services",
  },
  {
    icon: IconBulbFilled,
    route: "/my-privileges",
    label: "My Privileges",
  },
  {
    icon: IconSettingsFilled,
    route: "/settings",
    label: "Settings",
  },
];

export const transactionLinks = [
  {
    id: "1",
    icon: IconCreditCardRefund,
    type: "Deposit from my card",
    amount: "$10,000",
    date: "10th July, 2024",
  },
  {
    id: "2",
    icon: IconBrandPaypal,
    type: "Deposit Paypal",
    amount: "+$2,500",
    date: "15th July, 2024",
  },
  {
    id: "3",
    icon: IconMessageDollar,
    type: "Withdrawal",
    amount: "-$5,400",
    date: "9th July, 2024",
  },
];
