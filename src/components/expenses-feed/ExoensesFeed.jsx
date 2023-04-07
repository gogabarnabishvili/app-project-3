import { useState } from "react";
import { useContext } from "react";
import { ExpensesFeedContext } from "./ExpensesFeedContext";

import Filters from "../filters/Filters";

const ExpenseFeed = () => {
    const { filters, setFilters } = useContext(ExpensesFeedContext);
    const { selectedCategory } = filters;

    return (
        <ExpensesFeedContext.Provider
            value={{ filters, setFilters }}
        ></ExpensesFeedContext.Provider>
    );
};
