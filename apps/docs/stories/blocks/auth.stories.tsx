import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@qeetrix/ui";
import {
  AuthShell,
  LoginForm,
  SignupForm,
  ForgotPasswordForm,
  OtpForm,
} from "@qeetrix/ui/blocks";

const meta: Meta = {
  title: "Blocks/Auth",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Login: Story = {
  render: () => (
    <AuthShell
      title="Welcome back"
      description="Sign in to your Qeet account"
      footer={
        <>
          Don&apos;t have an account? <a href="#">Sign up</a>
        </>
      }
    >
      <LoginForm
        forgotHref="#"
        onSubmit={(v) => console.log("login", v)}
        socialButtons={
          <Button variant="outline" className="w-full" type="button">
            Continue with a passkey
          </Button>
        }
      />
    </AuthShell>
  ),
};

export const Signup: Story = {
  render: () => (
    <AuthShell
      title="Create your account"
      footer={
        <>
          Already registered? <a href="#">Sign in</a>
        </>
      }
    >
      <SignupForm onSubmit={(v) => console.log("signup", v)} />
    </AuthShell>
  ),
};

export const Forgot: Story = {
  render: () => (
    <AuthShell title="Reset your password" description="We'll email you a reset link">
      <ForgotPasswordForm onSubmit={(v) => console.log("forgot", v)} />
    </AuthShell>
  ),
};

export const Otp: Story = {
  render: () => (
    <AuthShell title="Verify it's you" description="Enter the 6-digit code we sent">
      <OtpForm onSubmit={(code) => console.log("otp", code)} onResend={() => {}} />
    </AuthShell>
  ),
};
