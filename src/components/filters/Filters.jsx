import { StyleFilterForm, StyleLabelBox } from "./StyleFilters";
import LabelInput from "../label-input/LabelInput";
import SelectOption from "../select/Select";
import { useState } from "react";
import { useContext } from "react";
import { ExpensesFeedContext } from "../expenses-feed/ExpensesFeedContext";

const posts = ["income", "expense", "market", "invois"];

const Filters = () => {
    const { filters, setFilters } = useContext(ExpensesFeedContext);
    console.log("filter", filters);
    const [selectedDate, setSelectedDate] = useState("");
    const [minAmount, setMinAmount] = useState(undefined);
    const [maxAmount, setMaxAmount] = useState(undefined);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedType, setSelectedType] = useState("income");

    const onSelectedDate = (e) => setSelectedDate(e.target.value);
    const onMinAmountChange = (e) => setMinAmount(e.target.value);
    const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
    const onCategoryChange = (e) => setSelectedCategory(e.target.value);
    const onTypeChange = (e) => setSelectedType(e.target.value);

    const onFiltersSubmit = () => {
        setFilters({
            ...filters,
            selectedDate,
            selectedCategory,
            minAmount,
            maxAmount,
        });
    };

    // console.log(
    //     selectedDate,
    //     minAmount,
    //     maxAmount,
    //     selectedCategory,
    //     selectedType
    // );
    return (
        <StyleFilterForm>
            <LabelInput
                id="date"
                type="date"
                name="date"
                text="chose date"
                onChange={onSelectedDate}
            />
            <StyleLabelBox>
                <LabelInput
                    id="income"
                    type="radio"
                    name="type"
                    text="income"
                    // checked={selectedType === "expense"}
                    // onChange={setSelectedType(selectedType === "expense")}
                />
                <LabelInput
                    id="expense"
                    type="radio"
                    name="type"
                    text="expense"
                    // checked={selectedType === "income"}
                    // onChange={setSelectedType("expense")}
                />
            </StyleLabelBox>
            <SelectOption options={posts} onChange={onCategoryChange} />
            <StyleLabelBox>
                <LabelInput
                    id="minAmount"
                    type="number"
                    name="minAmount"
                    text="min-amount"
                    placeholder="min-amount"
                    onChange={onMinAmountChange}
                />
                <LabelInput
                    id="maxAmount"
                    type="numver"
                    name="maxAmount"
                    text="max-amount"
                    placeholder="max-amount"
                    onChange={onMaxAmountChange}
                />
                <LabelInput
                    value="serch"
                    type="button"
                    id="serchBtn"
                    onClick={onFiltersSubmit}
                />
            </StyleLabelBox>
        </StyleFilterForm>
    );
};

export default Filters;
