"use strict";

import PubSub from "../lib/pubsub";

export default class Store {
    constructor(params) {
        this.self = this;

        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';

        self.events = new PubSub();

        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }

        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }
    }


}