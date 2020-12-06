import React from "react";

const DisplayInfos = props => {
    const { disabled, label, value } = props;
    return (
        <div class="row ml-2">
            <label for="staticEmail" class="col-sm-3 col-form-label font-weight-bold">{label}<span className="float-right">:</span></label>
            <div class="col-sm-9">
                <input type="text" class="form-control-plaintext" id="staticEmail" value={value} disabled={disabled} />
            </div>
        </div>
    )
}

export default DisplayInfos;