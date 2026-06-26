# QA Report

## Unit Tests
- **addTask**: verifies a task is added correctly.
- **deleteTask**: ensures deletion by ID works.
- Both tests run automatically in the CI pipeline.

## Linting Results
- Initial linting found 3 issues: missing semicolons and unused variables.
- All issues were resolved. The linter now passes with zero warnings.

## Code Review Summary
- Pull request #1 (`feature/delete-task`) was reviewed by @classmate.
- Feedback: improved variable naming and added edge case test for deleting non‑existent task.
- All comments addressed before merging.