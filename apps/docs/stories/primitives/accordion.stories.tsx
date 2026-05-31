import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@qeetrix/ui";

const meta: Meta<typeof Accordion> = {
  title: "Primitives/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

const ITEMS: Array<[string, string, string]> = [
  [
    "passkeys",
    "What is a passkey?",
    "A passkey is a phishing-resistant credential bound to your device, replacing passwords with biometrics or a PIN.",
  ],
  [
    "mfa",
    "Can I require MFA for everyone?",
    "Yes — tenant admins can enforce MFA org-wide, with per-role exceptions where needed.",
  ],
  [
    "sso",
    "Which SSO protocols are supported?",
    "Qeet ID speaks both SAML 2.0 and OpenID Connect for inbound and outbound federation.",
  ],
];

export const Default: Story = {
  render: () => (
    <Accordion defaultValue={["passkeys"]} className="w-96">
      {ITEMS.map(([value, q, a]) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple defaultValue={["passkeys", "mfa"]} className="w-96">
      {ITEMS.map(([value, q, a]) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
