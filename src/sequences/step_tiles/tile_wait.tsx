import * as React from "react";
import { StepParams } from "./index";
import { StepTitleBar } from "./step_title_bar";
import { Help } from "../../ui";
import { copy, remove } from "./index";
import { t } from "i18next";
import { StepInputBox } from "../inputs/step_input_box";

export function TileWait({dispatch, step, index}: StepParams) {
    return (<div>
        <div className="step-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <div className="step-header wait-step">
                        <StepTitleBar index={index}
                            dispatch={dispatch}
                            step={step} />
                        <i className="fa fa-arrows-v step-control" />
                        <i className="fa fa-clone step-control"
                            onClick={() => copy({ dispatch, step })} />
                        <i className="fa fa-trash step-control"
                            onClick={() => remove({ dispatch, index })} />
                        <Help text={(`The Wait step instructs FarmBot to wait 
                            for the specified amount of time. Use it in 
                            combination with the Pin Write step to water for a 
                            length of time.`)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="step-content wait-step">
                        <div className="row">
                            <div className="col-xs-6 col-md-3">
                                <label>{t("Time in milliseconds")}</label>
                                <StepInputBox dispatch={dispatch}
                                    step={step}
                                    index={index}
                                    field="milliseconds" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

}
