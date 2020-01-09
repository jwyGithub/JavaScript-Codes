let mutations = {
    ADD_ITEM: (state, payload) => {
        state.goodsinfo = payload;  //
    },
    LOADING: (state, payload) => state.lodingStatus = payload,
};
export default mutations;