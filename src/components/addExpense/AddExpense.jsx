import LabelInput from "../label-input/LabelInput";
import SelectOption from "../select/Select";
import { StyleAddExpenseForm } from "./StyleAddExpense";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SaveExpenses from "../../functuon/Local-Store/LocalStrage.js";

const income = ["income", "invois"];
const expense = ["expense", "market"];
const sendExpense = [];
const AddExpense = () => {
    const [date, setDate] = useState("");
    const [type, setType] = useState("income");
    const [category, setCategory] = useState("expense");
    const [money, setMoney] = useState("");

    const onChangeDate = (e) => setDate(e.target.value);
    const onChangeCategory = (e) => setCategory(e.target.value);
    const onChangeType = (e) => setType(e.target.value);
    const onChangeMoney = (e) => setMoney(e.target.value);
    console.log(category);

    const resetForm = () => {
        setDate("");
        setCategory("expense");
        setType("income");
        setMoney("");
    };
    const SaveExpenseLocal = () => {
        resetForm();
        if (date !== "" && money !== "") {
            const sendExpense = {
                id: 1,

                date: date,
                type: type,
                category: category,
                money: parseFloat(money),
            };
            SaveExpenses(sendExpense);
            sendExpense.length = 0;
        } else {
            alert("need more detal");
        }
    };
    return (
        <StyleAddExpenseForm>
            <LabelInput text="date" type="date" onChange={onChangeDate} />

            <LabelInput
                type="radio"
                text="income"
                name="type"
                checked={type === "expense"}
                onChange={(e) => {
                    if (type === "income") {
                        setType("expense");
                    }
                }}
            />
            <LabelInput
                type="radio"
                text="expense"
                name="type"
                checked={type === "income"}
                onChange={() => {
                    if (type === "expense") {
                        setType("income");
                    }
                }}
            />

            <SelectOption
                text="category"
                onChange={onChangeCategory}
                options={type === "expense" ? income : expense}
            />
            <LabelInput type="number" text="money" onChange={onChangeMoney} />
            <LabelInput
                type="button"
                value="add axpense"
                onClick={SaveExpenseLocal}
            />
            <Link to={"/ExpenseFeed"}>
                <LabelInput type="button" value="expense" />
            </Link>
        </StyleAddExpenseForm>
    );
};
export default AddExpense;
