"use strict";
const utlis_request = require("../utlis/request.js");
const getTopics = () => utlis_request.instance.get("/community/popular/topics");
exports.getTopics = getTopics;
