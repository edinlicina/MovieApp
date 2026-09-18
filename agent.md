# MovieApp Agent Instructions

## Project

MovieApp is a cross-platform mobile application.

### Technology Stack

- Ionic
- Angular
- TypeScript
- Capacitor
- Android
- iOS planned

Angular uses standalone components.

---

## General Development Rules

- Use strict TypeScript.
- Never use `any` unless explicitly approved.
- Prefer Angular's modern APIs and patterns.
- Follow the existing project structure and conventions.
- Keep components focused on presentation and UI logic.
- Move reusable business logic and external data access into services.
- Use Ionic components for mobile UI where appropriate.
- Keep implementations simple and maintainable.
- Do not over-engineer solutions.

## Scope Control

Only modify files required for the assigned task.

Do not:

- refactor unrelated code
- rename unrelated files
- change project-wide configuration without approval
- install or remove dependencies without approval
- modify native Android/iOS configuration unless required by the task

If a task appears to require one of these actions, explain why before proceeding.

## Git

The developer controls version control.

The agent must NOT:

- commit changes
- push changes
- force push
- create or delete branches
- modify Git configuration

The agent may use read-only Git commands such as:

git status
git diff

## Validation

After implementing a task:

1. Check TypeScript errors.
2. Run the relevant tests when available.
3. Run:

ionic build

4. Fix errors caused by the implementation.
5. Report any remaining errors.

## Completion Report

After every implementation task, report:

- Files created
- Files modified
- What was implemented
- Architectural decisions made
- Tests/build commands executed
- Remaining issues or assumptions

Do not perform additional work beyond the requested task.