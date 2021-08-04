<template>
  <div>
    <show-after-reward v-if="isAhthen()"></show-after-reward>
  </div>
</template>

<script>
import ShowAfterReward from '@/components/ShowAfterReward.vue'
import AuthUser from "@/store/AuthUser";

export default {
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
  components: {
    ShowAfterReward
  }
}
</script>

<style
    
</style>