"use strict";
const utlis_request = require("../utlis/request.js");
const getSearch = (keyword) => utlis_request.instance.get("/community/search/topics", {
  params: {
    keyword
  }
});
const getTopics = () => utlis_request.instance.get("/community/popular/topics");
exports.getSearch = getSearch;
exports.getTopics = getTopics;
