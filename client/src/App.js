import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { loadUser } from "./action/auth";
import Landing from "./pages/landing";
import PrivateRoute from "./pages/routing/PrivateRoute";
import SignIn from "./pages/login";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Landing />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
