<template>
  <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
    <div class="bg-white p-4 rounded-md h-1/3 flex flex-col justify-between">
      <div class="mb-2">
        <h1 class="text-xl font-bold">Connect Wallet</h1>
        <p>Connect through available connectors:</p>
      </div>
      <div v-for="connector in connectors" :key="connector.id">
        <button class="w-full rounded p-2 my-2 border hover:bg-primary hover:text-primary-foreground transition ease-in-out" @click="connectToConnector(connector)">{{connector.name}}</button>
      </div>
      <button class="w-full rounded bg-secondary hover:bg-secondary-hover text-secondary-foreground p-2 my-2 border" @click="$emit('update:modelValue', false)">Close</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Connector } from 'use-wagmi';

withDefaults(defineProps<{
  modelValue: boolean
}>(),{
  modelValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const {connectors, connect} = useConnect()

const connectToConnector = (connector: Connector) => {
  connect({connector})
  emit('update:modelValue', false)
}

</script>

<style>

</style>