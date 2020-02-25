<template>
<div>
  <md-field>
      <label>Enter Account Name</label>
      <md-input v-model="type"></md-input>
    </md-field>
    <md-button class="md-dense md-raised md-primary" type="submit" @click="saveOrg(type)">
    Create Account
    </md-button>
</div>
</template>

<script>
import store from '../store'
export default {
  name: 'Account',
  methods: {
    saveOrg(name) {
      store.dispatch('set_org',{name},{root:true})
    }
  }
}
</script>
