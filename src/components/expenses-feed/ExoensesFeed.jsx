import { useState } from "react";
// import { useContext } from "react";
import { ExpensesFeedContext } from "./ExpensesFeedContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Filters from "../filters/Filters";
import RenderList from "../expense/Expense";
import TotalRender from "../total/Total";
import { BackExpenses } from "../../functuon/Local-Store/LocalStrage";
import LabelInput from "../label-input/LabelInput";
const posts = [
    {
        id: 2,
        date: "20-20-10",
        type: "income",
        category: "invoice",
        money: 1200,
    },
];
const ExpenseFeed = () => {
    const [filters, setFilters] = useState({});

    return (
        <ExpensesFeedContext.Provider value={{ filters, setFilters }}>
            <Filters />
            <RenderList posts={BackExpenses()} />
            <TotalRender posts={BackExpenses()} />
            <Link to={"/"}>
                <LabelInput type="button" value="expense" />
            </Link>
            <Link to={"/signin"}>
                <LabelInput type="button" value="signin" />
            </Link>
            <Link to={"/ExpenseFeed"}>
                <LabelInput type="button" value="sigin up" />
            </Link>
        </ExpensesFeedContext.Provider>
    );
};
export default ExpenseFeed;
