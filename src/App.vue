<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import draggable from "vuedraggable";

import NoteInput from "./components/NoteInput.vue";
import NoteList from "./components/NoteList.vue";
import Divider from "./components/Divider.vue";
import ImageLoader from "./components/ImageLoader.vue";
import DateInput from "./components/DateInput.vue";

const notesArray = ref<Note[]>([]);
const selectedNote = ref<Note>();
let previousLength = 0;


interface Note {
  id: string;
  subject: string;
  annotation: string;
  createdAtDate: string;
  createdAtTime: string;
  images: string[];
}

onMounted(() => {
  let storageValue = localStorage.getItem("notesArray");
  if(storageValue){
    notesArray.value = JSON.parse(storageValue);
    selectedNote.value = notesArray.value[notesArray.value.length-1]
    previousLength = notesArray.value.length;
  }
})


watch(notesArray, () => {
  if (notesArray.value.length > previousLength) {
    selectedNote.value = notesArray.value[notesArray.value.length - 1];
  }
  previousLength = notesArray.value.length;
  localStorage.setItem("notesArray", JSON.stringify(notesArray.value));
}, { deep: true });


function excludeNote(id: string) {
  notesArray.value = notesArray.value.filter((item) => item.id != id);
  selectedNote.value = notesArray.value[0];
}
</script>

<template>
  <div class="bg-background w-full md:h-[100vh] grid grid-cols-2 md:grid-cols-12 py-4 px-4  xl:px-72 gap-8">
    <div class="flex flex-col gap-8 h-full rounded-lg col-span-2 md:col-span-3">
      <NoteInput @addNote="(note : Note) => notesArray.push(note)" />
      <div class="flex flex-col gap-1 bg-background2/60 flex-1 rounded-lg">
        <label class="text-secondary font-semibold text-lg py-2 px-2 bg-customBlue-400 rounded" >Note List</label>
        <draggable v-model="notesArray" tag="ul" item-key="id" :animation="300">
          
          <template #item="{ element: note }">
            
            <NoteList
              :note="note"
              :selectedNote="selectedNote"
              @selectNote="(note) => (selectedNote = note)"
              @excludeNote="excludeNote"
            />
          </template>
        </draggable>
      </div>
    </div>
    <div class="p-4 px-6 bg-background2/60 h-full rounded-lg col-span-2 md:col-span-9">
      <div v-if="selectedNote" class="flex flex-col gap-8">
        <div class="flex flex-row flex-wrap md:flex-nowrap gap-1">
          <input
            class="w-full py-2 mt-2 bg-background2/0 text-accent text-2xl font-bold border-2 border-background2/0 focus:outline-none"
            type="text"
            id="selectedSubject"
            v-model="selectedNote.subject"
          />
          <DateInput
            :createdAtDate="selectedNote?.createdAtDate"
            :createdAtTime="selectedNote?.createdAtTime"
          />
        </div>
        <Divider />
        <div class="flex flex-col gap-2">
          <label for="note" class="text-secondary font-bold text-lg"
            >Description</label
          >
          <textarea
            class="w-full h-56 p-3 text-zinc-300 bg-darkColdBlue-700 rounded focus:outline-none resize-none shadow-md placeholder-gray-400 bg-customBlue-450/80"
            placeholder="Type tou notation..."
            name=""
            id="note"
            v-model="selectedNote.annotation"
          ></textarea>
        </div>
        <Divider />
        <div class="flex flex-col gap-4">

          <ImageLoader
            :selectedNote="selectedNote"
            @addImage="(url : string) => selectedNote?.images.push(url)"
          />

          <draggable
            v-model="selectedNote.images"
            tag="div"
            item-key="id"
            :animation="500"
            class="grid grid-cols-4 gap-4"
          >
            <template #item="{ element }">
              <img class="rounded" :src="element" alt="" />
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
