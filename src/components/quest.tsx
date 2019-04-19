import * as React from "react";

type OnValueChangeHandler = (value: number) => void;

export interface IQuestProps {
    question: IQuestion;
    onValueChanged: OnValueChangeHandler;
    className?: string;
}
export interface IQuestState {
}

export class Quest extends React.Component<IQuestProps, IQuestState> {

    constructor(props: IQuestProps) {
        super(props);

        this.state = {};
    }

    public render() {
        const { question } = this.props;
        return (
            <div className={`${this.props.className}`}>
                <p className="w3-padding-large w3-center w3-xlarge w3-text-theme">{question.text}</p>
                <div>
                    {question.variants.map((item, index) =>
                    // Шаблон для каждой кнопки
                        <p key={`${item}-${index}`} className="w3-row">
                            <div className="w3-col s1 m2 l4">&nbsp;</div>
                            <div className="w3-col s10 m8 l4">
                                <button
                                    className={`w3-btn w3-block ${question.answer === item.value ? "w3-theme-btn" : "w3-theme-btnon"}`}
                                    onClick={() => {
                                        question.answer = item.value;
                                        this.props.onValueChanged(item.value);
                                    }}
                                >{item.text}</button>
                            </div>
                            <div className="w3-col s1 m2 l4">&nbsp;</div>
                        </p>,
                    )}
                </div>
            </div>
        );
    }
}