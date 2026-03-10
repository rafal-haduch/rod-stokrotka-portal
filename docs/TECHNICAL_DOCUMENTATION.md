# Technical Documentation

### Contents:
<a name="contents"></a>
1. [Key Technical Decisions](#1-key-technical-decisions)
2. [Application Architecture](#2-application-architecture)
3. [Feature-Based Structure](#3-feature-based-structure)
4. [Backend Logic and Structure](#4-backend-logic-and-structure)
5. [Data Layer](#5-data-layer)
6. [Validation and Data Parsing](#6-validation-and-data-parsing)
7. [API Contracts and Data Mapping](#7-api-contracts-and-data-mapping)
8. [Error Handling](#8-error-handling)
9. [Styling and Design System](#9-styling-and-design-system)
10. [Application Areas](#10-application-areas)
11. [Blog System](#11-blog-system)

---

# 1. Key Technical Decisions
- Feature-based architecture
- Server Actions used instead of traditional REST API
- Prisma ORM for database access
- Custom design integrated with TailwindCSS
- NextAuth for authentication

[↑ Back to contents](#contents)

---

# 2. Application Architecture

The application is built with **Next.js** and follows a **feature-based architecture**. Contains src directory with that structure:

```
/src
├── /app
├── /components
├── /content
├── /features
├── /shared
└── /styles
```

### `/app`

Contains the **Next.js App Router structure**.

This directory defines:
- application routes
- layouts
- server components
- page-level logic

Each route represents a specific application area such as marketing pages, public information pages, authenticated user pages, or CMS sections.

### `/components`

Contains **reusable UI components** that are not tied to any specific feature.

These components are typically used across multiple features or application areas (for example layout components, navigation elements, or shared UI primitives).

### `/content`

//TODO: write e.g.
Contains static content used by the application e.g.

This directory is primarily used for **Markdown-based blog posts**, which are later processed and rendered as HTML pages.

### `/features`

Contains all **application features**, each organized as an isolated module. This directory will be described in detail later.

### `/shared`

Contains utilities and modules shared across multiple features.

//TODO: write more examples
Examples include:
- shared helpers
- common types
- shared domain utilities
- reusable logic that does not belong to a single feature

### `/styles`

Contains globals.css

---

Instead of separating the project by technical layers (components, services, etc.), the application is organized around **features**.

Each feature contains its own:
- UI
- business logic

This approach improves:
- maintainability
- feature isolation
- scalability of the project

All features are located in */src/features*

[↑ Back to contents](#contents)

---

# 3. Feature-Based Structure

Each feature follows a consistent internal structure.

Example:
```
/feature
├── /ui
└── /domain
```
### `/ui`

Contains React components strictly related to the feature.

### `/domain`

Contains business logic and backend communication.

[↑ Back to contents](#contents)

---

# 4. Backend Logic and Structure

Backend logic is implemented using **Next.js Server Actions**. Two categories are used:

## 1. Queries (read-only)

Used for retrieving data from the database.

## 2. Actions (mutable operations)

Used for operations that modify data, such as:
- creating users
- updating plots
- adding payments
- publishing announcements

All backend logic is in */src/features/feature/domain*. Each that directory follows a consistent internal structure.

Example:
```
/domain
    ├── /actions
    ├── /queries
    ├── feature.api-contracts.ts
    ├── feature.constants.ts
    ├── feature.db-types.ts
    ├── feature.helpers.ts
    ├── feature.input-parse.ts
    ├── feature.mappers.ts
    ├── feature.read-models.ts
    ├── feature.repository.ts
    └── feature.validation.ts
```
### `/actions` and `/queries `

Is an API for entry endpoint to server action.

### `feature.api-contracts.ts`

Defines data shapes returned to the frontend.

### `feature.constants.ts`

Contains feature-specific constants such as default values, configuration values, and reusable static definitions used within the feature.

### `feature.db-types.ts`

Defines database-related TypeScript types used inside the feature.

These types usually represent database entities or Prisma result types used internally by the repository layer.

### `feature.helpers.ts`

Contains small reusable utility functions used within the feature domain logic.

These helpers typically handle small transformations, formatting, or domain-related utility operations.

### `feature.input-parse.ts`

Responsible for:
- extracting data from `FormData`
- calling validation functions
- returning a clean input object

### `feature.mappers.ts`

Responsible for mapping:
- database models → API contracts
- action results → frontend payloads

### `feature.read-models.ts`

Defines data models used for read operations.

Read models represent structured data returned by queries and are optimized for frontend consumption.

### `feature.repository.ts`

The repository layer is responsible for:
- querying the database
- writing data
- returning database models

### `feature.validation.ts`

Responsible for validating individual fields submitted from the frontend.

[↑ Back to contents](#contents)

---

# 5. Data Layer

Database access is implemented using **Prisma ORM**.
All database operations are located in: */src/features/feature/feature.repository.ts*

Repositories act as the data access layer of the application.

Each repository exposes a set of functions responsible for interacting with the database.

Example:

```
userRepository.create()
userRepository.update()
userRepository.findById()
```

This abstraction isolates database logic from business logic and makes the domain layer easier to maintain.

[↑ Back to contents](#contents)

---

# 6. Validation and Data Parsing

Data sent from forms is processed in two steps:

## 1. Input parsing 
/src/features/feature/feature.input-parse.ts
This step extracts raw values from `FormData` and prepares them for validation.


## 2. Validation
/src/features/feature/feature.validation.ts
Validation functions verify individual input fields and ensure that the data meets required constraints before it is processed further.

[↑ Back to contents](#contents)

---

# 7. API Contracts and Data Mapping

To keep the frontend independent from database models, the project uses **API contracts** and **mapping functions**.

### API Contracts
/src/features/feature/feature.api-contracts.ts

### Mappers
/src/features/feature/feature.mappers.ts

[↑ Back to contents](#contents)

---

# 8. Error Handling

Basic error handling is implemented through a shared domain error system.

The system includes:

- custom error class
- error codes
- message mapping

Error messages returned to the frontend are generated from predefined error codes.

[↑ Back to contents](#contents)

---

# 9. Styling and Design System

The application uses a custom styling approach based on **semantic CSS classes**.

A simple design system was implemented to support multiple visual themes.

### Theme system

The system includes:
- default theme
- seasonal theme

The seasonal theme automatically changes depending on the current season:
- spring
- summer
- autumn
- winter

Themes are implemented using:
- base color palettes
- global CSS variables
- semantic class names used directly in JSX

[↑ Back to contents](#contents)

---

# 10. Application Areas

The application is divided into several functional areas.

//TODO: write directory structure in /app

### Marketing

Public pages available to all visitors.

Contains general information about the garden association.

### Public

Also public, but focused on information relevant to garden members.

Compared to the marketing pages, this section has a simplified layout without decorative elements like banners or pre-footers.

### Auth

Accessible only after login.

#### User Panel

A lightweight panel where users can view:

- their personal data
- owned garden plots
- payments
- surveys

#### CMS

An administrative interface used by the association board.

The CMS allows managing:
- users
- plots
- fees
- payments
- announcements
- surveys
- documents

[↑ Back to contents](#contents)

---

# 11. Blog System

The blog system is implemented using **Markdown files**.

Posts are stored as `.md` files and processed during rendering.

The system converts Markdown content into HTML and supports images referenced inside the Markdown files.

Blog posts are **not managed through the CMS** and are not stored in the database.  
They are intended mainly for archival or commemorative content.

[↑ Back to contents](#contents)

---