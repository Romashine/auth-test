import * as React from "react";

export interface IHeaderProps {
}
export interface IHeaderState { }

export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: IHeaderProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="w3-row in-form-header w3-them">
                <div className="w3-col s4 m6 l6 w3-padding">
                    <img className="in-form-logo" src="http://toplogos.ru/images/logo-opensolaris.png" />
                </div>
                <div className="w3-col w3-container w3-large w3-hide-large s8 m6 l6 w3-padding">
                    <div>
                        (281) 860-2533
                    </div>

                </div>
                <div className="w3-col w3-container w3-large w3-hide-small w3-hide-medium s8 m6 l6 w3-padding">
                    <div>
                        Amcap Mortgage, LTD.
                    </div>
                    <div>
                        Call Today! (281) 860-2533
                    </div>
                </div>
            </div>
        );
    }
}