# Contributing Guide

This document defines the Git workflow, branch naming, and PR process for this project.

## 1. Branch Structure
- `main` — production-ready code (protected)
- `develop` — integration branch (protected)

Never push directly to `main` or `develop`. All changes go through a Pull Request.

## 2. Branch Naming Convention
- `feature/TICKET-ID-short-description`
- `fix/TICKET-ID-short-description`
- `hotfix/TICKET-ID-short-description`

Example: `feature/PROJ-142-user-login-page`

## 3. Commit Message Convention
Format: `type(TICKET-ID): short summary`

Types: feat, fix, hotfix, docs, style, refactor, test, chore

Example: `feat(PROJ-142): add login form validation`

Never commit secrets, API keys, passwords, or `.env` files.

## 4. Workflow
Ticket → branch from develop → develop & test → push → open PR → code review → fix comments → approval + CI pass → squash merge into develop → QA → release PR into main → production

## 5. PR Requirements
Every PR must include: Ticket ID, clear title, description of changes, testing performed, screenshots/video for UI changes, known issues.

## 6. Review Rules
- Minimum 1 approval required
- Author cannot approve their own PR
- All CI checks must pass
- All comments resolved before merging
- Use Squash and Merge for feature/fix PRs