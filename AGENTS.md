# MovieApp – Agent Instructions

## Development Environment

The primary development environment is Windows using PowerShell.

When executing terminal commands:

- Use PowerShell-compatible commands.
- Do not assume Unix/Linux utilities such as `sed`, `awk`, `touch`, `rm`,
  or other Unix-specific commands are available.
- Prefer native PowerShell commands.
- If Continue's native file editing tools fail, PowerShell commands may be
  used to create or modify files.
- After modifying files through the terminal, inspect the resulting files
  and use `git diff` to verify the changes.
  
## 1. Project Goal

MovieApp is a deliberately lightweight cross-platform mobile application
for Android and iOS.

The primary goal of this project is to learn and experience the complete
mobile development and deployment process, including:

- Cross-platform development
- Android builds and testing
- iOS builds and testing
- Google Play Store deployment
- Apple App Store deployment

The goal is NOT monetization, scalability, or building a production-scale
platform.

Keep the application small and simple.

---

## 2. Technology Stack

Frontend / Mobile:

- Ionic
- Angular
- TypeScript
- Capacitor

Platforms:

- Android
- iOS

External Data:

- TMDB API

Local Persistence:

- Capacitor Preferences or another explicitly approved lightweight
  local-storage solution

Angular uses standalone components.

There is no backend.

---

## 3. Application Scope

MovieApp contains only the following core functionality.

### Movies

The application retrieves movie data from the TMDB API.

Users can:

- View movies
- Select a movie
- Navigate to a movie detail page

### Movie Details

The detail page displays relevant information such as:

- Movie title
- Poster
- Description
- TMDB rating
- Release information where appropriate

Users can add or remove the movie from their local watchlist.

### Watchlist

The watchlist is stored locally on the device.

Users can:

- View watchlisted movies
- Remove movies from the watchlist
- Give watchlisted movies a personal rating from 1 to 5 stars

The personal rating is separate from the TMDB rating.

---

## 4. Explicitly Out of Scope

Do NOT introduce any of the following unless explicitly requested:

- User accounts
- Authentication
- Backend services
- Spring Boot
- Databases
- Cloud synchronization
- Firebase
- Analytics
- Advertisements
- Monetization
- Social features
- Recommendation systems
- Complex state-management libraries
- Microservices
- Server-side infrastructure

Do not expand the product scope without explicit approval.

---

## 5. Privacy

MovieApp should collect no user data.

There are:

- no user accounts
- no profiles
- no cloud-stored watchlists
- no analytics unless explicitly introduced later

Watchlist information and personal movie ratings remain local to the device.

Do not introduce tracking, telemetry, analytics, or user-data collection
without explicit approval.

---


## 6. Architecture

Keep the architecture simple.

Preferred structure:

src/app/
├── models/
├── services/
├── pages/
└── components/

### Pages

Pages handle:

- presentation
- user interaction
- navigation
- page-specific UI state

Pages should not directly implement external API communication or
persistence logic.

### Services

Services handle reusable application logic.

Examples:

MovieService
- communicates with TMDB
- retrieves movie data

WatchlistService
- manages the local watchlist
- manages personal ratings
- handles local persistence

### Models

Use strongly typed TypeScript models.

Example domain concepts:

Movie

- id
- title
- overview
- posterPath
- releaseDate
- rating

WatchlistEntry

- movie
- userRating

Do not use `any` unless explicitly approved.

---

## 7. Development Principles

Prefer:

- simple solutions
- readable code
- strict TypeScript
- Angular standalone components
- modern Angular APIs
- Ionic UI components
- small focused services
- small focused components

Avoid:

- unnecessary abstractions
- premature optimization
- unnecessary design patterns
- excessive layers
- speculative functionality
- over-engineering

When two solutions provide the same functionality, prefer the simpler one.

---

## 8. Dependencies

Do not install, update, or remove dependencies without explicit approval.

Before suggesting a new dependency:

1. Check whether Angular, Ionic, Capacitor, or the browser platform already
   provides the required functionality.
2. Explain why the dependency would be useful.
3. Wait for approval before installing it.

---

## 9. TMDB

TMDB is the external source for movie data.

TMDB-specific HTTP communication belongs in MovieService or another
explicitly approved TMDB-related service.

Do not expose API credentials in committed source code.

Do not commit API keys, access tokens, secrets, or credentials.

When implementing TMDB functionality, keep external API response structures
separate from the application's domain models where doing so improves
clarity.

Do not add unnecessary API abstraction layers.

---

## 10. Local Persistence

Watchlist information and personal ratings are stored locally.

Persistence logic belongs in WatchlistService or a similarly focused
service.

Pages and UI components should not directly manipulate the persistence
mechanism.

The persistence solution should remain lightweight.

---

## 11. Scope Control

Only modify files required for the assigned task.

Do NOT:

- refactor unrelated code
- rename unrelated files
- rewrite working functionality without reason
- change project-wide configuration without approval
- modify native Android configuration unless required
- modify native iOS configuration unless required
- implement features that were not requested

If a task appears to require broader changes, explain the requirement
before making them.

---

## 12. Git Rules

The human developer controls version control.

The agent MUST NOT:

- create commits
- push commits
- force push
- create branches
- delete branches
- modify Git configuration
- modify remote repositories

The agent MAY use read-only commands such as:

git status
git diff
git log

Never discard existing user changes.

---

## 13. Validation

After implementing a task:

1. Check the changed code for TypeScript errors.
2. Run relevant tests when tests exist.
3. Run:

ionic build

4. Fix errors caused by the implementation.
5. Do not hide or ignore build failures.

If an existing unrelated error prevents validation, report it.

---

## 14. Completion Report

After completing an implementation task, report:

### Files Created
List newly created files.

### Files Modified
List modified files.

### Implementation
Briefly explain what was implemented.

### Architecture
Mention relevant architectural decisions.

### Validation
Report commands executed and their results.

### Assumptions / Issues
Report assumptions, unresolved issues, or limitations.

Do not perform additional work after the requested task has been completed.

---

## 15. Core Principle

MovieApp is intentionally small.

Do not attempt to turn it into a large-scale application.

The priority is:

Correctness → Simplicity → Readability → Maintainability

not:

Feature count → Complexity → Scalability