import * as React from "react";

export interface IMainContainerProps {}
export interface IMainContainerState {}

export class MainContainer extends React.Component<IMainContainerProps, IMainContainerState> {

    constructor(props: IMainContainerProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
        <div className="in-form-container">
            {this.props.children}
        </div>
    );
    }
}
