<template>
  <div>
  <md-field >
    <label>Enter Delivery Amount for {{getOrg}}</label>
    <md-input v-model="type" type="number"></md-input>
  </md-field>
  <md-button class="md-dense md-raised md-primary" type="submit" @click="saveDelivery(type)">Schedule Delivery</md-button>
  </div>
</template>

<script>
import Store from '../store';
export default {
  name: 'Delivery',
  methods: {
  saveDelivery(amount){
    Store.dispatch('add_delivery',amount);
    },
  },
  computed: {
    getOrg() {
      return Store.getters.organization
    }
  }
}
</script>
