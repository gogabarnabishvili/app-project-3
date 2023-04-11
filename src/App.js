import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/sign-in/SignIn";
import ExpenseFeed from "./components/expenses-feed/ExoensesFeed";
import AddExpense from "./components/addExpense/AddExpense";
import SignUp from "./components/sign-up/SiginUp";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ExpenseFeed" element={<ExpenseFeed />} />
            <Route path="/" element={<AddExpense />} />
            {/* <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
        </>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
