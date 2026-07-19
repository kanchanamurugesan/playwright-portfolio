# Playwright Portfolio

End-to-end test automation framework built with *Playwright + TypeScript*, demonstrating the framework design patterns I use in my day-to-day work as an automation test analyst: Page Object Model, custom fixtures, externalised test data, and CI execution via GitHub Actions.

## Stack

- Playwright (TypeScript)
- Page Object Model with custom fixtures
- Data-driven tests via externalised JSON test data
- GitHub Actions CI — tests run on every push to main

## Project structure


├── .github/workflows/   # CI pipeline (Playwright Tests)
├── e2e/                 # Test specs
├── pages/               # Page Object classes
├── fixtures/            # Custom Playwright fixtures
├── data/                # Externalised test data
└── playwright.config.ts # Config: projects, retries, reporters, trace


## What's covered

- UI end-to-end journeys built on Page Object Model, so specs stay readable and locators live in one place
- Custom fixtures for setup/teardown and shared page objects, keeping tests independent and parallel-safe
- Data-driven scenarios sourced from data/, separating test logic from test inputs

## Run tests

bash
npm install
npx playwright install
npx playwright test


View the HTML report after a run:

bash
npx playwright show-report


## CI

Tests run automatically on every push via GitHub Actions (see badge above). Failed runs capture traces and the HTML report as build artifacts for debugging.

## About

Built and maintained by Kanchana Murugesan — Senior Test Analyst (Brisbane). Test scaffolding is accelerated with AI-assisted development tools (GitHub Copilot / Amazon Q Developer), with all framework design, review and refactoring done manually.
