<template>
<md-table>
    <md-table-row>
      <md-table-head>Type</md-table-head>
      <md-table-head>Organization</md-table-head>
      <md-table-head>Amount</md-table-head>
    </md-table-row>
    <md-table-row v-for= 'i in getTransactions'>
      <md-table-cell>{{i.type}}</md-table-cell>
      <md-table-cell>{{i.organization}}</md-table-cell>
      <md-table-cell md-numeric>{{i.amount}}</md-table-cell>
    </md-table-row>

</md-table>
</template>
<script>
import Store from '../store';
export default {
  name: 'Transactions',
  computed: {
    getTransactions(){
      var Arr = [];
      Store.getters.transactions.forEach(e=> {
        Arr.push(e)
      })
      return Arr
    }
  },

}
</script>
