import {
    StyleRenderBox,
    StyleRenderWraper,
    StyleRenderParagrap,
    StyleRenderSpan,
} from "./StyleExpense";
import { useContext } from "react";
import { BackExpenses } from "../../functuon/Local-Store/LocalStrage";
import { ExpensesFeedContext } from "../expenses-feed/ExpensesFeedContext";

const RenderList = (props) => {
    const { filters, setFilters } = useContext(ExpensesFeedContext);

    if (BackExpenses() === undefined) {
        console.log("not have expense");
    } else {
        return (
            <StyleRenderWraper>
                {props.posts.map((e, index) => (
                    <StyleRenderBox key={index}>
                        <StyleRenderParagrap>
                            date :<StyleRenderSpan> {e.date}</StyleRenderSpan>
                        </StyleRenderParagrap>
                        <StyleRenderParagrap>
                            type :<StyleRenderSpan>{e.type}</StyleRenderSpan>
                        </StyleRenderParagrap>
                        <StyleRenderParagrap>
                            category :
                            <StyleRenderSpan>{e.category}</StyleRenderSpan>
                        </StyleRenderParagrap>
                        <StyleRenderParagrap>
                            total :<StyleRenderSpan>{e.money}</StyleRenderSpan>
                        </StyleRenderParagrap>
                    </StyleRenderBox>
                ))}
            </StyleRenderWraper>
        );
    }
};
export default RenderList;
