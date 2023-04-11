import LabelInput from "../label-input/LabelInput";
import { StyleForm, StyleSiginDiv } from "./StyleSiginIn";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BackExpenses } from "../../functuon/Local-Store/LocalStrage";

// console.log(BackExpenses("user")[1]);
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const ValidSiginIn = () => {
        return BackExpenses("user").map((e) => {
            if (email === e.email && password === e.password) {
                console.log("join");
            }
        });
    };

    // if(email ===  && password !== "") {

    // }
    return (
        <StyleForm>
            <LabelInput
                name="email"
                type="email"
                id="email"
                text="email"
                onChange={onEmailChange}
            />
            <LabelInput
                name="password"
                type="password"
                id="password"
                text="password"
                onChange={onPasswordChange}
            />

            <Link to={"/ExpenseFeed"}>
                <LabelInput
                    type="button"
                    value="sigin in"
                    onClick={ValidSiginIn}
                />
            </Link>
            <Link to={"/signup"}>
                <LabelInput type="button" value="sigin up" />
            </Link>
        </StyleForm>
    );
};

export default SignIn;
