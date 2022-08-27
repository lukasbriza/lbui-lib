export const buttonsBaseDescription = {
  label: {
    default: "Button",
    description: "Button text",
  },
  size: {
    options: ["small", "medium", "large", 50],
    control: { type: "select" },
    description: "Default sizes of button (can change with number or modificationClass property",
  },
  textColor: {
    description: "Select custom text color",
  },
  modificationClickClass: {
    description: "Custom class applied to button on click event",
  },
  modificationClickClassDelay: {
    description:
      "Optional for mobile optimalization. On mobile hoverClass is played and after delay modificationClickClassDelay is added",
  },
  color: {
    description: "Select custom background color",
  },
  hoverClass: {
    description: "Custom class applied on button on mouse enter and removed on mouse leave",
  },
  modificationClass: {
    description: "Custom class applied to root of component for it´s customization",
  },
  startIcon: {
    description: "Pass icon on left side",
  },
  endIcon: {
    description: "Pass icon on right side",
  },
  onClick: {
    description: "Callback called on click event",
  },
};
