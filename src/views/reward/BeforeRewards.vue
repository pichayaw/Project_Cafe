<template>
  <div>
    <show-after-reward v-if="isAuthen()"></show-after-reward>
    <show-rewards v-if="!isAuthen()"></show-rewards>
  </div>
</template>

<script>
import ShowRewards from '@/components/ShowRewards.vue'
import AuthUser from "@/store/AuthUser";
import ShowAfterReward from '../../components/ShowAfterReward.vue';
export default {
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
  components: {
    ShowRewards,
    ShowAfterReward
  }
}
</script>

<style>
</style>