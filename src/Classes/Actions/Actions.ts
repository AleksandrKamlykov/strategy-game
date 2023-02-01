export enum ACTION {
    ATTACK = "ATTACK",
    BOOST = "BOOST",
    DEFAULT = "DEFAULT",
    LOADING = "LOADING",
}

export class Action {

    currentAction: ACTION;
    timer: number;

    constructor() {
        this.currentAction = ACTION.DEFAULT;
        this.timer = 1000; //ms
    }

    setAttackAction() {
        this.setActions(ACTION.ATTACK);
    }
    setBoostkAction() {
        this.setActions(ACTION.BOOST);
    }
    setDefaultAction() {
        this.setActions(ACTION.DEFAULT);
    }

    setActions(action: ACTION) {
        this.currentAction = action;
        const timerAction = setTimeout(() => {
            this.currentAction = ACTION.DEFAULT;
            clearTimeout(timerAction);
        }, this.timer);
    }

    get getCurrentAction(): ACTION {
        return this.currentAction;
    }
}