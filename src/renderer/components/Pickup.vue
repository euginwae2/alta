<template>
  <div>
  <md-field>
    <label>Enter Amount Pickup amount for {{getOrg}}</label>
    <md-input v-model="type" type="number"></md-input>

  </md-field>
  <md-button class="md-dense md-raised md-primary" type="submit" @click="savePickup(type)">Schedule Pickup</md-button>
  </div>
</template>
<script>
import Store from '../store';
export default {
  name: 'Pickup',
  methods: {
    savePickup(amount){
      Store.dispatch('add_pickup',amount);
      console.log(amount);
    }
  },
  computed: {
    getOrg() {
    return Store.getters.organization;
    }
  }
}
</script>
