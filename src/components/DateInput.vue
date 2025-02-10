<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps<{
    createdAtDate: string;
    createdAtTime: string;
  }>();
</script>

<template>
    <input
    class="text-center text-secondary font-medium text-md py-2 px-2 mt-3 w-36 bg-customBlue-450/60 rounded-lg"
    type="text"
    disabled
    :value="
    props.createdAtDate + ' - ' + props.createdAtTime
    "
  />
</template>