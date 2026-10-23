# Project Atlas role-based scenario pack

Synthetic material for demonstrating how a mobile agent helps product, operations, and engineering teams while they are away from their desks. No entry represents a real user, customer, or production system.

## Shared project context

Project Atlas is preparing for launch. The public demo site is online, but launch approval is still blocked by three unresolved items:

1. The original plan says October 29, while the latest readiness review recommends October 30.
2. Expired access tokens return 401, but the current client checks for 403.
3. The onboarding FAQ does not yet have a named owner.

The approved authentication policy is: retry once on 401, never retry 403, and never retry more than once. External updates may be drafted automatically but require human confirmation before publishing.

## 1. Product scenario — make a Go/No-Go decision

### Real-world moment

Five minutes before a release review, the product owner is away from their computer and needs a trustworthy decision brief, not another dashboard.

### Mobile prompt

> Review the Project Atlas roadmap, decision log, current GitHub issues and pull requests, and the latest deployment. Give me a Go/No-Go recommendation. Start with the conclusion, list no more than three blockers, cite the source for each claim, and tell me which decisions still need an owner.

### Expected result

- Conclusion: No-Go.
- The authentication fix is not yet verified and merged.
- October 29 versus October 30 has no recorded final decision.
- The onboarding FAQ owner is unassigned.
- The online demo site is deployment evidence, not release approval.

### Follow-up prompt

> Turn the user feedback into a P0/P1/P2 priority list. Link each priority to the relevant issue or decision, and explain the user impact in one sentence.

### Value shown

The agent combines product context and live engineering evidence, exposes contradictions instead of silently choosing an answer, and reduces a multi-tool review to a decision-ready mobile brief.

## 2. Operations scenario — answer users accurately

### Real-world moment

Users are asking whether the release is delayed. Operations needs a concise reply that reflects the latest blocker status and does not overpromise.

### Mobile prompt

> Check the Project Atlas launch plan, FAQ, decision log, GitHub status, and current deployment. Draft a reply for the internal user group: lead with the current status, explain what changed in no more than three points, give one next step, and state any known limitation. Do not publish it without my confirmation.

### Expected result

- The reply says the date is not final rather than claiming October 29 or October 30.
- It explains the 401 token-refresh blocker in plain language.
- It confirms that the demo site is reachable without calling the release approved.
- It routes questions to the launch owner because the FAQ owner is unassigned.
- The final message waits for human approval.

### Daily follow-up prompt

> Every day at 18:00, compare the roadmap, decision log, open GitHub blockers, and latest deployment with yesterday. Send me a short digest containing only what changed, the current launch risk, and the action required tomorrow.

### Value shown

The agent keeps external wording aligned with current source systems, turns change detection into a repeatable daily workflow, and preserves human control over publication.

## 3. Engineering scenario — triage an incident from a phone

### Real-world moment

A developer is away from their desk when operations reports that users are being signed out after token expiry.

### Mobile prompt

> Investigate the Project Atlas authentication incident. Review the incident timeline, related GitHub issue and pull request, code change, and test status. Tell me the likely root cause, whether the proposed fix matches the retry policy, and what still blocks release. Do not change production settings.

### Expected result

- Root cause: the client checks 403, while expired tokens return 401.
- Correct fix: refresh and retry once on 401; do not retry 403.
- All authentication tests must pass before merge and release approval.
- The public site's availability is separate from authentication readiness.

### Release-check follow-up prompt

> Summarize the pull request for a release reviewer. Include the behavior change, affected tests, remaining risk, and a merge recommendation. Keep it under 150 words.

### Value shown

The agent gives an engineer a source-backed first diagnosis and review brief from the phone, while production changes and final merges remain controlled actions.

## Source material index

- Product feedback: docs/product-feedback.md
- Product roadmap: docs/product-roadmap.md
- Decision log: docs/decision-log.md
- Operations launch plan: docs/operations-launch-plan.md
- Operations FAQ: docs/operations-faq.md
- Incident timeline: docs/incident-timeline.md
- Public demo: https://project-atlas-zai-demo.pages.dev/

## Demo guardrails

- Use only synthetic Project Atlas data.
- Do not change real DNS, production configuration, billing, or security settings.
- Do not invent a final launch date or FAQ owner.
- Require human confirmation before any external message is published.
