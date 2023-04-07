import logo from "./logo.svg";
import "./App.css";
import Filter from "./components/filters/Filters";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* <Route path="/" element={<SgnIn />} />
          <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/" element={<Filter />} />
            {/* <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
        </>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
