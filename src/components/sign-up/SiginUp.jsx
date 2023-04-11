import LabelInput from "../label-input/LabelInput";
import { StyleForm, StyleSiginDiv } from "../sign-in/StyleSiginIn";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import saveExpenses from "../../functuon/Local-Store/LocalStrage";

const SignUp = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    // const [addmin, setAddmin] = useState("admin");
    const [user, setUser] = useState("user");

    const onNameChange = (e) => setName(e.target.value);
    const onMLastNameChange = (e) => setLastName(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onRePasswordChange = (e) => setRePassword(e.target.value);
    // const onAddminChange = (e) => setAddmin(e.target.value);
    const onUserChange = (e) => setUser(e.target.value);
    console.log(name, lastName, email, password, rePassword, user);

    const sendUserInfo = () => {
        const users = {
            name: name,
            lastName: lastName,
            email: email,
            password: rePassword,
            role: user,
            id: 1,
        };
        saveExpenses(users, "user");
    };
    return (
        <StyleForm>
            <LabelInput
                name="name"
                type="text"
                id="name"
                text="name"
                onChange={onNameChange}
            />
            <LabelInput
                name="last-name"
                type="text"
                id="lastName"
                text="last name"
                onChange={onMLastNameChange}
            />
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
            <LabelInput
                name="re-password"
                type="password"
                id="rePassword"
                text="re-password"
                onChange={onRePasswordChange}
            />
            <StyleSiginDiv>
                <LabelInput
                    name="userRole"
                    type="radio"
                    id="userRole"
                    text="addmin"
                    checked={user === "addmin"}
                    onChange={onUserChange}
                />
                <LabelInput
                    name="userRole"
                    type="radio"
                    id="userRole"
                    text="user"
                    checked={user === "user"}
                    onChange={onUserChange}
                />
            </StyleSiginDiv>

            <LabelInput type="button" value="seend " onClick={sendUserInfo} />

            <Link to={"/ExpenseFeed"}>
                <LabelInput
                    type="button"
                    value="sigin in"
                    onClick={sendUserInfo}
                />
            </Link>
        </StyleForm>
    );
};

export default SignUp;
