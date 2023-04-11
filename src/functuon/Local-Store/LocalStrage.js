const saveExpenses = (expense, storageKey = "expenses") => {
    const exisiting_expenses = localStorage.getItem(storageKey);
    // console.log("items", exisiting_expenses);
    if (exisiting_expenses === null) {
        const expenses = [expense];
        localStorage.setItem(storageKey, JSON.stringify(expenses));
    } else {
        const expenses_parsed = JSON.parse(exisiting_expenses);
        expenses_parsed.push(expense);
        localStorage.setItem(storageKey, JSON.stringify(expenses_parsed));
    }
};
export default saveExpenses;

export const BackExpenses = (strogekey = "expenses") => {
    const exisitingExpenses = localStorage.getItem(strogekey);
    if (exisitingExpenses !== null) {
        const exisitingParsed = JSON.parse(exisitingExpenses);
        return exisitingParsed;
    } else {
    }
};

export const ValidSiginIn = () => {
    BackExpenses("user").map((e) => {
        const BackPasswordName = e;
        return BackPasswordName;
    });
};
ValidSiginIn();
