import {
    StyleRenderWraper,
    StyleRenderBox,
    StyleRenderParagrap,
    StyleRenderSpan,
} from "../expense/StyleExpense";
import { useContext } from "react";
import { ExpensesFeedContext } from "../expenses-feed/ExpensesFeedContext";
import { BackExpenses } from "../../functuon/Local-Store/LocalStrage";
const LisenEpense = (e) => {
    if (e.type === "income") {
        return e.type;
    } else {
        return 0;
    }
};
// const getSumOfAmounts = (type = "") => {
//     // Retrieve and parse the expenses from localStorage
//     const expensesJSON = localStorage.getItem("expenses");
//     const expenses = expensesJSON ? JSON.parse(expensesJSON) : [];

//     const filteredExpenses = expenses.filter(
//         (expense) => expense.type === type
//     );
//     const sum = filteredExpenses.reduce(
//         (total, expense) => total + parseFloat(expense.amount),
//         0
//     );

//     return sum;
// };
const TotalRender = (props) => {
    const { totalAmounts } = useContext(ExpensesFeedContext);
    if (BackExpenses() === undefined) {
        console.log("not have expense");
    } else {
        return (
            <StyleRenderWraper>
                {props.posts.map((e, index) => (
                    <StyleRenderBox key={index}>
                        <StyleRenderParagrap>
                            income :
                            <StyleRenderSpan>{LisenEpense(e)}</StyleRenderSpan>
                        </StyleRenderParagrap>
                        <StyleRenderParagrap>
                            total :<StyleRenderSpan>{e.money}</StyleRenderSpan>
                        </StyleRenderParagrap>
                        <StyleRenderParagrap>
                            expense :
                            <StyleRenderSpan>{e.money}</StyleRenderSpan>
                        </StyleRenderParagrap>
                    </StyleRenderBox>
                ))}
            </StyleRenderWraper>
        );
    }
};
export default TotalRender;
//
