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
