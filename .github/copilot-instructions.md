# Stock Smart AI repository guidance

## Commands

- Start the full containerized application from the repository root: `docker-compose up -d`. It serves the UI on port 80, the API on port 8080, and PostgreSQL on port 5432. On a new database, load `database/seed.sql` using the commands in the root README.
- Backend (requires the Java 17 toolchain specified in `backend/build.gradle`):
  - Run all tests: `cd backend && ./gradlew test`
  - Run one test class or method: `cd backend && ./gradlew test --tests 'com.meshtier.ExampleTest'` or `cd backend && ./gradlew test --tests 'com.meshtier.ExampleTest.methodName'`
  - Build: `cd backend && ./gradlew build`
- Frontend:
  - Start development server: `cd frontend && npm start`
  - Build: `cd frontend && npm run build`
  - Run all tests non-interactively: `cd frontend && CI=true npm test -- --watchAll=false`
  - Run one test file: `cd frontend && CI=true npm test -- --watchAll=false App.test.tsx`
- The frontend has no standalone lint script. Create React App's ESLint configuration runs as part of its development and build tooling.

## Architecture

- The application has a React 18/Create React App frontend in `frontend/`, a Spring Boot 3 API in `backend/`, and PostgreSQL. Docker Compose uses published backend/UI images; the frontend and backend Dockerfiles build their respective services locally when needed.
- Backend endpoints are rooted at `/api/`. Controllers delegate to `I*Service` interfaces and their service implementations; services coordinate JPA repositories and entities. Create/update payloads use DTOs, while read endpoints return entities directly. OpenAPI UI is exposed at `/swagger-ui.html`.
- Inventory is centered on `Product`. Creating or updating inbound and outbound stock records also updates the associated product quantity. Updates first reverse the prior movement, then apply the replacement quantity; outbound changes must not reduce quantity below zero. Preserve this coupled behavior when changing stock flows.
- The dashboard aggregates repository counts and monthly stock movements. A scheduled backend task runs at 08:00 daily, creates inbox messages for products with quantity at or below 10, and the frontend renders these via its inbox service.
- `frontend/src/routes/routes.tsx` defines React Router routes. `App` supplies `UserProvider`, and all application pages except login/register are wrapped by `ProtectedRoutes`. Page components compose reusable UI components, while `src/services/` owns axios calls and `src/helpers/declarations.tsx` defines the shared client-side API shapes.
- The flow page obtains inbound and outbound records separately, then `IOMapper` in `src/helpers/formatters.tsx` merges and date-sorts them for display. Keep its `IOStock` shape synchronized with either stock API response.

## Repository conventions

- Keep backend code in the existing `com.meshtier` layer structure: controllers, DTOs, models, repositories, and feature-scoped `services/<feature>/` interfaces plus implementations. Reuse the JPA repositories for entity lookups and the existing DTOs for mutation requests.
- Maintain the established endpoint paths and response shapes. Frontend service modules currently use the hard-coded `http://localhost:8080` API base and convert request failures into logged empty arrays or `null`; callers rely on those return shapes.
- Authentication responses expose `accessToken`. `UserProvider` persists the token and user profile in `localStorage`, and protected client routes use token presence rather than backend role checks.
- For frontend additions, place route-level screens in `src/pages/`, reusable feature UI in `src/components/`, API calls in `src/services/`, and shared API interfaces/formatters in `src/helpers/`. Existing screens combine component-specific CSS with Tailwind utility classes and Material UI components.
