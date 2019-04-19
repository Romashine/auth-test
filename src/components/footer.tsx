import * as React from "react";

export interface IFooterProps {
}
export interface IFooterState { }

export class Footer extends React.Component<IFooterProps, IFooterState> {

    constructor(props: IFooterProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="in-form-footer w3-border-top w3-them w3-col w3-small">
                <div className="w3-row">
                    <div className="w3-cell w3-padding in-form-partner"><img height="72px" src="https://myleads.leadpops.com/ckfinder/userfiles/1/1699/images/BBB.png" alt=""/></div>
                    <div className="w3-cell w3-padding">Texas Mortgage Banker Disclosure</div>
                    <div className="w3-cell w3-padding">Amcap Mortgage, LTD.  16000 Stuebner Airline, Suite 285  Spring, TX 77379</div>
                </div>
                <div className="w3-row">

                </div>
            </div>
        );
    }
}