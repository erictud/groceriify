import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AccountPage,
  AddItemPage,
  Authentication,
  CreateListPage,
  Error,
  SharedLayout,
  SharedLayoutSecondary,
  ShoppingListPage,
  ShoppingListsPage,
  UsersPage,
} from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Log in / register page */}
        <Route path="/auth" element={<Authentication />} />
        {/* Dashboard page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="create-list" element={<CreateListPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route
            index
            element={
              <>
                {/* dashboard page - all shopping lists */}
                <ShoppingListsPage />
              </>
            }
          />
          <Route path="/:id" element={<SharedLayoutSecondary />}>
            <Route
              path="/:id/"
              element={
                <>
                  {/* dashboard page for each shopping list */}
                  <ShoppingListPage />
                </>
              }
            />
            <Route
              path="/:id/add-item"
              element={
                <>
                  {/* add item page for the shopping list */}
                  <AddItemPage />
                </>
              }
            />
            <Route
              path="/:id/users"
              element={
                <>
                  {/* users & settings list page  for the shopping list; ONLY FOR THE ADMIN */}
                  <UsersPage />
                </>
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
