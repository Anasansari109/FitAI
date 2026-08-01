import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  OnboardingProvider,
} from "./context/OnboardingContext";

import {
  UserPlanProvider,
} from "./context/UserPlanContext";

import {
  ProgressProvider,
} from "./context/ProgressContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OnboardingProvider>
          <UserPlanProvider>
            <ProgressProvider>
              <AppRoutes />
            </ProgressProvider>
          </UserPlanProvider>
        </OnboardingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;