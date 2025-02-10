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
    class="flex items-center justify-between px-6 p-2 capitalize select-none cursor-pointer rounded-b-none rounded-lg text-lg font-medium"
    :class="{
      'bg-customBlue-400 border-b-2 border-b-primary/70 text-secondary':
        selectedNote?.id === note?.id,
      'border-b-2 border-background2 text-secondary/50':
        selectedNote?.id !== note?.id,
    }"
  >
    <span class="block" @click="$emit('selectNote', note)">
      {{ note?.subject }}
    </span>
    <v-icon
      v-if="selectedNote && note?.id === selectedNote.id"
      @click="$emit('excludeNote', note?.id)"
      class="text-customBlue-300/80 cursor-pointer w-6 h-6 transition-colors ease-linear duration-700"
      name="bi-trash-fill"
    />
  </li>
</template>
