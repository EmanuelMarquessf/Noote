<script setup lang="ts">
import { ref, defineEmits } from "vue";

const typedNote = ref("");
const emit = defineEmits(["addNote"]);

const emitAddNote = () => {
  if (!typedNote.value) return;
  emit("addNote", addNote(typedNote.value));
  typedNote.value = "";
};


function addNote(typedText: string) {
  if (typedText) {
    const id = new Date().getTime().toString(36);
    const annotation = "";
    const createdAtDate = new Date().toLocaleDateString("en-us");
    const createdAtTime = new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const images: string[] = [];

    const note = {
      id,
      subject: typedText,
      annotation,
      createdAtDate,
      createdAtTime,
      images,
    };

    typedNote.value = "";

    return note;
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 rounded-lg bg-background2/60 p-2">
    <div>
      <label class="text-secondary font-semibold text-lg" for="">Subject</label>
      <input
        placeholder="Type a subject"
        id="subject"
        class="w-full py-2 px-2 mt-2 bg-customBlue-450/80 rounded focus:border-none text-customBlue-50 focus:outline-none"
        type="text"
        v-model="typedNote"
        @keyup.enter="emitAddNote"
      />
    </div>
    <button
      class="bg-accent disabled:opacity-80 rounded w-full py-2 px-4 text-background text-lg font-medium"
      @click="emitAddNote"
    >
      Add
    </button>
  </div>
</template>
