const state = {
  organization: 'default',
  transactions:[]
}

const mutations = {
  SET_ORG(state,org_name) {
    state.organization = org_name
  },
  ADD_PICKUP(state, amount) {
    state.transactions.push({
      organization: state.organization,
      amount: amount,
      type: 'CASH PICKUP'
    })
  },
  ADD_DELIVERY(state,amount) {
    state.transactions.push({
      organization: state.organization,
      amount: amount,
      type: 'CASH DELIVERY'
    })
  }
}

const getters = {
  organization: (state) => {
    return state.organization
  },
  transactions: (state) => {
      return state.transactions
  }

}
const actions = {
  set_org({commit},{name}) {
    commit('SET_ORG',name)
  },
  add_pickup({commit}, amount) {
    commit('ADD_PICKUP',amount)
  },
  add_delivery({commit}, amount) {
    commit('ADD_DELIVERY',amount)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
