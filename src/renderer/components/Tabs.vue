<template>
  <div>
    <md-tabs>
      <md-tab id="tab-account" md-label="New Account" to="/" exact>
          <Account/>
      </md-tab>

      <md-tab id="tab-pickup" md-label="Cash Pickup" to="/Tabs/Pickup">
        <Pickup/>
      </md-tab>

      <md-tab id="tab-delivery" md-label="Cash Delivery" to="/Tabs/Delivery">
        <Delivery/>
      </md-tab>

      <md-tab id="tab-transactions" md-label="Transactions" to="/Tabs/Transactions" v-on:click="getTransactions()">
        <Transactions/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Account from './Account'
import Pickup from './Pickup'
import Delivery from './Delivery'
import Transactions from './Transactions'
import Store from '../store';
export default {
  name: 'TabContent',
  components: {
    Account,
    Pickup,
    Delivery,
    Transactions
  },
  methods: {
    getTransactions(){
      console.log(Store.getters.organization)
      console.log(Store.getters.transactions);
    }
    }
}
</script>
