import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authentication, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Log in / register page */}
        <Route path="/auth" element={<Authentication />} />
        {/* Dashboard page */}
        <Route path="/" element={<>{/* dashboard page - all shopping lists */}</>}>
          <Route path="/:id" element={<>{/* dashboard page for each shopping list */}</>}>
            <Route path="/:id/" element={<>{/* overview page for the shopping list */}</>} />
            <Route
              path="/:id/add-item"
              element={<>{/* add item page for the shopping list */}</>}
            />
            <Route
              path="/:id/users"
              element={
                <>{/* users & settings list page  for the shopping list; ONLY FOR THE ADMIN */}</>
              }
            />
          </Route>
        </Route>
        {/* Error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
