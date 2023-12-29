export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "",
    children: [
      {
        label: "Details",
        to: "",
        children: [
          {
            label: "Location",
            to: "",
            children: [
              {
                label: "City",
                to: "//www.google.com", // "//" absolute path, which means it open the path alone, if not, it will be a relative path.
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "",
    children: [
      {
        label: "Account",
        to: "",
      },
      {
        label: "Security",
        to: "",
        children: [
          {
            label: "Login",
            to: "",
          },
          {
            label: "Register",
            to: "",
            children: [
              {
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
