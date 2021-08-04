<template>
  <div>
    <show-rewards v-if="!isAuthen()"></show-rewards>>
  </div>
</template>

<script>
import ShowRewards from '@/components/ShowRewards.vue'
import AuthUser from "@/store/AuthUser";
export default {
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
  components: {
    ShowRewards
  }
}
</script>

<style>
</style>