<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["addImage"]);

const props = defineProps({
  selectedNote: Object,
});

const typedAux = ref("");

const addImage = () => {
  if (typedAux.value.trim() && props.selectedNote && props.selectedNote.images.length < 8) {
    emit("addImage", typedAux.value.trim());
    typedAux.value = ""; 
  }
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <label for="note" class="text-secondary font-bold text-lg">Gallery</label>
    <div class="grid grid-cols-12 gap-4">
      <input
        v-model="typedAux"
        placeholder="Image URL"
        type="text"
        class="py-2 px-4 col-span-10 bg-customBlue-450/80 rounded focus:border-none text-customBlue-50 focus:outline-none"
      />
      <button
        :disabled="!typedAux || props.selectedNote?.images.length > 7"
        @click="addImage"
        class="bg-secondary py-3 col-span-2 rounded disabled:opacity-40"
      >
        Load
      </button>
    </div>
  </div>
</template>