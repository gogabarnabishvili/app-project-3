import { StyleLabelInputBox, StyleLabel, StyleInput } from "./StyleLabelInput";

const LabelInput = (props) => {
    return (
        <StyleLabelInputBox>
            <StyleLabel id={props.id} name={props.name}>
                {props.text}
                <StyleInput
                    name={props.name}
                    type={props.type}
                    id={props.id}
                    onChange={props.onChange}
                    value={props.value}
                    checked={props.checked}
                    onClick={props.onClick}
                    // checked={this.state.selectedOption === "income"}
                ></StyleInput>
            </StyleLabel>
        </StyleLabelInputBox>
    );
};
export default LabelInput;
