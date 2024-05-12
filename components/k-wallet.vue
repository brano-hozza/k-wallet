<template>
  <button id="connect-wallet" v-if="!isConnected" @click="connectionModal = true">
    Connect wallet
  </button>
  <button id="disconnect-wallet" v-else @click="disconnect()">
    Disconnect wallet
  </button>
  <teleport to="body">
    <k-wallet-modal v-if="connectionModal" v-model="connectionModal"/>
  </teleport>
</template>

<script lang="ts" setup>
const { isConnected } = useAccount()
const { disconnect } = useDisconnect()

const connectionModal = ref(false)

</script>
<style scoped>
#connect-wallet{
  @apply border rounded-md p-2 bg-primary hover:bg-primary-hover text-primary-foreground border-primary-foreground transition ease-in-out
}

#disconnect-wallet{
  @apply border rounded-md p-2 bg-destructive hover:bg-destructive-hover text-destructive-foreground transition ease-in-out
}
</style>