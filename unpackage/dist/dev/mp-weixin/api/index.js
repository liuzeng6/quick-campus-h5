"use strict";
const utlis_request = require("../utlis/request.js");
const getSearch = (keyword) => utlis_request.instance.get("/community/search/topics", {
  params: {
    keyword
  }
});
const getTopics = () => utlis_request.instance.get("/community/popular/topics");
const getTags = () => utlis_request.instance.get("/community/tags");
const getTopiceAll = (pageInfo, tag_id) => {
  return utlis_request.instance.get(`/community/topics`, {
    params: {
      page: pageInfo.page,
      pageSize: pageInfo.pageSize,
      tag_id
    }
  });
};
exports.getSearch = getSearch;
exports.getTags = getTags;
exports.getTopiceAll = getTopiceAll;
exports.getTopics = getTopics;
