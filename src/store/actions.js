import axios from 'axios';

let actions = {
  addCarInfo: ({
    commit,
    state
  }, payload) => {
    let arr = [...state.goodsinfo];
    let find = false;

    arr.forEach((item, index) => {
      // 有相同的id则更新拿到的信息
      if (item.id == payload.id) {
        item.buyCount = payload.buyCount;
        item.startDate = payload.startDate;
        item.orderYearCount = payload.orderYearCount;
        item.img = payload.img
        find = true;
      }
    });
    // 没有相同的id就直接push进去
    if (!find) {
      // console.log(payload)
      arr.push(payload);
    }
    commit('ADD_ITEM', arr)

    //计算购物车的总数量
    state.count = state.goodsinfo.reduce((prev, cur) => {
      return prev + cur.buyCount;
    }, 0);

    // 把数据存localstore
    localStorage.setItem("CarGoodInfo", JSON.stringify(arr))

    // 把数据存数据库


    axios({
      url: `${baseUrl}/api/carinfo`,
      method: "post",
      data: {
        carinfo: arr
      }
    }).then(res => {
      console.log(res.data)
    });
  }

};
export default actions;