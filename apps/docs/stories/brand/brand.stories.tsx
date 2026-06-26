import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  IconApiKey,
  IconAuditLog,
  IconCrossDevice,
  IconMfaShield,
  IconOidcConnector,
  IconPasskey,
  IconSamlConnector,
  IconScimSync,
  IconTenant,
  IconWebhook,
  QeetLogo,
} from "@qeetrix/ui/brand";

const meta: Meta = {
  title: "Brand/Logo & Icons",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Logo: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <QeetLogo size={64} />
        <code className="text-xs text-muted-foreground">auto</code>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4">
        <QeetLogo variant="on-light" size={64} />
        <code className="text-xs text-neutral-500">on-light</code>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-lg bg-neutral-900 p-4">
        <QeetLogo variant="on-dark" size={64} />
        <code className="text-xs text-neutral-400">on-dark</code>
      </div>
    </div>
  ),
};

const ICONS = [
  [IconPasskey, "Passkey"],
  [IconMfaShield, "MfaShield"],
  [IconSamlConnector, "Saml"],
  [IconScimSync, "Scim"],
  [IconOidcConnector, "Oidc"],
  [IconWebhook, "Webhook"],
  [IconApiKey, "ApiKey"],
  [IconAuditLog, "AuditLog"],
  [IconTenant, "Tenant"],
  [IconCrossDevice, "CrossDevice"],
] as const;

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-6 text-foreground">
      {ICONS.map(([Icon, name]) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon size={28} />
          <code className="text-xs text-muted-foreground">{name}</code>
        </div>
      ))}
    </div>
  ),
};
