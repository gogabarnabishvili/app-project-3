import { StyleLabelInputBox, StyleLabel, StyleInput } from "./StyleLabelInput";

const LabelInput = (props) => {
    return (
        <StyleLabelInputBox>
            <StyleLabel id={props.id} name={props.name}>
                {props.text}
            </StyleLabel>
            <StyleInput
                name={props.name}
                placeholder={props.text}
                type={props.type}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                // checked={this.state.selectedOption === "income"}
            ></StyleInput>
        </StyleLabelInputBox>
    );
};
export default LabelInput;
