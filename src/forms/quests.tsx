import * as React from "react";
import { Progress } from "../components/process";
import { Quest } from "../components/quest";

export interface IFormQuestsProps {
    questions: IQuestion[];
    onFinish: () => void;
}
export interface IFormQuestsState {
    /**
     * Индекс текущего вопроса
     */
    step?: number;
}

export class FormQuests extends React.Component<IFormQuestsProps, IFormQuestsState> {

    constructor(props: IFormQuestsProps) {
        super(props);

        this.state = {
            step: 0,
        };
    }

    public render() {
        const question = this.props.questions[this.state.step!]!;
        const progress = this.state.step! / this.props.questions.length * 100;

        return (
            <div className="">
                <Progress value={progress} />
                <div className="w3-right-align w3-margin-right w3-text-theme">{`${this.state.step} of ${this.props.questions.length} questions`}</div>
                <Quest
                    className="w3-container"
                    question={question}
                    onValueChanged={this.onValueChanged.bind(this)}
                />
                {this.state.step ?
                    <button
                        className="w3-margin-left w3-button w3-circle w3-theme-action w3-xlarge w3-opacity w3-grey w3-display-left w3-padding-small"
                        onClick={this.onBackClick.bind(this)}
                        style={{width: "50px", height: "50px"}}
                    >{"<"}</button>
                    : null}
            </div>
        );
    }

    public onValueChanged(value: number) {
        if (this.state.step === this.props.questions.length - 1) {
            // Закончить опрос
            this.props.onFinish();
        } else {
            // Перейти к следующему вопросу
            this.setState({ step: this.state.step! + 1 });
        }
    }
    public onBackClick() {
        if (this.state.step! > 0) {
            // Перейти к следующему вопросу
            this.setState({ step: this.state.step! - 1 });
        }
    }
}
