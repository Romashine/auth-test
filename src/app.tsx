import * as React from "react";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { FormFinish } from "./forms/finish";
import { FormQuests } from "./forms/quests";
import { FormStart } from "./forms/start";

enum AppSteps {
    Begin,
    Question,
    Finish,
}

export interface IAppProps {
}
export interface IAppState {
    step?: number;
}

export class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            step: AppSteps.Begin,
        };
    }

    public render() {
        return (
            <div className="w3-card-4 in-form-container">
                <Header />
                <div className="in-form-quest w3-theme-white w3-display-container">
                    {this.state.step === AppSteps.Begin ?
                        <FormStart onGoClick={() => { this.setState({ step: AppSteps.Question }); }} />
                        : null}
                    {this.state.step === AppSteps.Question ?
                        <FormQuests
                            questions={inFormConfig.questions}
                            onFinish={() => this.setState({ step: AppSteps.Finish })}
                        />
                        : null}
                    {this.state.step === AppSteps.Finish ?
                        <FormFinish
                            config={inFormConfig}
                        />
                        : null}
                </div>
                <Footer />
            </div>
        );
    }
}
