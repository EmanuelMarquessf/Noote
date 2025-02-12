<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

defineProps({
  note: Object,
  selectedNote: Object,
});

const emit = defineEmits(["selectNote", "excludeNote"]);
</script>

<template>
  <li
    class="flex flex-row justify-between items-center px-6 p-2 capitalize w-full select-none cursor-pointer rounded-b-none rounded-lg text-lg font-medium"
    :class="{
      'bg-customBlue-400 border-b-2 border-b-primary/70 text-secondary':
        selectedNote?.id === note?.id,
      'border-b-2 border-background2 text-secondary/50':
        selectedNote?.id !== note?.id,
    }"
  >
    <span @click="$emit('selectNote', note)" class="block flex-1">
      {{ note?.subject }}
    </span>

    <v-icon
      v-if="selectedNote && note?.id === selectedNote.id"
      @click="$emit('excludeNote', note?.id)"
      class="text-customBlue-300/80 cursor-pointer w-6 h-6 transition-colors ease-linear duration-700 col-span-2"
      name="bi-trash-fill"
    />
  </li>
</template>
