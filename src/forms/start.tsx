import * as React from "react";

export interface IFormStartProps {
    onGoClick: React.MouseEventHandler<any>;
}
export interface IFormStartState { }

export class FormStart extends React.Component<IFormStartProps, IFormStartState> {

    constructor(props: IFormStartProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div>
                <div className="w3-hide-small in-form-image">
                </div>
                <div className="w3-row w3-container">
                    <div className="w3-col s12 m12 l8">
                        <div className="w3-padding-small">
                            <h1 className="w3-text-theme w3-center">
                                Today's FHA Loan Rates and Loan Requirements!
                            </h1>
                            <h4 className="w3-center w3-text-theme">
                                FHA loan rates change daily and vary depending on your unique situation. Get your FREE customized quote here!
                            </h4>
                            <div className="w3-center w3-container">
                                <div className="">
                                    <input className="w3-input w3-border" style={{ maxWidth: "100px", display: "inline-block" }} type="text" placeholder="ZIP Code" />
                                    <button className="w3-btn w3-theme-action w3-margin-left " style={{marginBottom: "4px"}} onClick={this.props.onGoClick}>GO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col w3-hide-small w3-hide-medium  s12 m12 l4">
                        <img src="https://myleads.leadpops.com/images/clients/1/1699/pics/1699_170_1_3_79_85_85_1_fharates.png" />
                    </div>
                </div>
            </div>
        );
    }
}
