import { Layout, ProtectedRoute, SignInForm } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<SignInForm />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <></>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
