import dialog = require("plugins/dialog");
import dialogViewModelBase = require("viewmodels/dialogViewModelBase");

import nodeConnectionInfo = require("models/database/cluster/nodeConnectionInfo");

class editNodeConnectionInfoDialog extends dialogViewModelBase {

    private nextTask = $.Deferred<nodeConnectionInfo>();

	nodeConnectionInfo = ko.observable<nodeConnectionInfo>();
    isUpdate = ko.observable<boolean>();
    isUnsafe = ko.observable<boolean>();

    constructor(node: nodeConnectionInfo, isUpdate: boolean, isUnsafe: boolean) {
        super();
		this.nodeConnectionInfo(node);
        this.isUpdate(isUpdate);
        this.isUnsafe(isUnsafe);
    }

    onExit(): JQueryPromise<nodeConnectionInfo> {
        return this.nextTask.promise();
    }

    cancel() {
        this.nextTask.reject();
        dialog.close(this);
    }

    ok() {
        this.nextTask.resolve(this.nodeConnectionInfo());
        dialog.close(this);
    }

}

export = editNodeConnectionInfoDialog;
