import * as React from "react";

export interface IProgressProps {
    /**
     * Значение прогресса [0-100]
     */
    value: number;
}
export interface IProgressState {
}

export class Progress extends React.Component<IProgressProps, IProgressState> {

    constructor(props: IProgressProps) {
        super(props);

        this.state = {};
    }

    public render() {
        const floor = Math.floor(this.props.value);
        return (
            <div className="w3-light-grey">
                <div className="in-form-progress w3-theme-medium w3-center" style={{ width: `${floor}%` }}>&nbsp;</div>
            </div>
        );
    }
}
