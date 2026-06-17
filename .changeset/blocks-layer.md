---
"@qeetrix/ui": minor
---

Add a **blocks layer** — composed, page-level patterns under the new `@qeetrix/ui/blocks` subpath, so product teams stop rebuilding these by hand:

- **Auth** — `AuthShell` plus `LoginForm`, `SignupForm`, `ForgotPasswordForm`, and `OtpForm` (composing `Field`/`Form`, `OTPInput`, `PasswordStrengthMeter`); library-agnostic, with logo/forgot/social slots.
- **DashboardShell** — the reference app layout (`Sidebar` slot + sticky header + scrollable content) over the `AppShell` primitives.
- **SettingsLayout** / **SettingsSection** — stacked-section settings page (profile / security / danger zone) with header, body, and footer slots.
- **OnboardingWizard** — multi-step flow over `Stepper` with Back/Next→Finish navigation, controlled or uncontrolled.
- **PricingTable** / **PricingTier** — marketing pricing grid with featured highlight, badge, and included/excluded feature lists.
- **PageState** + presets **NotFound** / **ServerError** / **Maintenance** — full-page empty/error/404/maintenance screens.

Import from `@qeetrix/ui/blocks`. Additive; no new dependencies and no breaking changes.
