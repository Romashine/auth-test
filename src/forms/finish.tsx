import * as React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export interface IFormFinishProps {
    config: IInteractiveFormConfig;
}
export interface IFormFinishState { }

export class FormFinish extends React.Component<IFormFinishProps, IFormFinishState> {

    constructor(props: IFormFinishProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="w3-container w3-text-theme w3-cell-middle w3-center">
                <h1>
                    Congratulations!
                </h1>
                <h4>
                    You answered all the questions!
                </h4>
                <p>
                    We can send survey results as a JSON object by reference specified in the parameters
                </p>
                <button
                    className="w3-btn w3-theme-action"
                    onClick={() => alert(`Your report is uploading on server ${this.props.config.server}!`)}
                >Send</button>
            </div>
        );
    }
}