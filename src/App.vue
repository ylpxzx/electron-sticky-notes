<template>
  <div class="pt-2 flex flex-col" style="height: 100vh;">
    <div class="operation-area px-4 pb-2">
      <div class="flex justify-between pb-2 drag-area text-sm">
        <div>electron sticky notes</div>
        <div></div>
      </div>
      <div>
        <div class="py-6">
          <div class="font-bold text-2xl pb-2">{{ state.currentDate }}</div>
          <p>2 Tasks</p>
        </div>
        <div>
          <div class="flex items-center rounded-md bg-transparent">
            <button type="button"
              class="p-2 inline-flex justify-center rounded-lg cursor-pointer text-white hover:text-blue-600">
              <svg t="1738913384824" class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="13662" width="200" height="200">
                <path
                  d="M423.88 159.5h176.25c20.99 0.01 40.39-11.2 50.89-29.37a58.791 58.791 0 0 0 0-58.76A58.78 58.78 0 0 0 600.12 42H423.88a58.763 58.763 0 0 0-50.89 29.37 58.743 58.743 0 0 0 0 58.76c10.49 18.17 29.9 29.37 50.89 29.37zM512 218.25c-210.91 0-381.88 170.96-381.88 381.88C130.12 811.04 301.09 982 512 982s381.88-170.96 381.88-381.88c0-210.91-170.97-381.87-381.88-381.87z m128.38 527.23c-7.5 7.52-17.49 11.67-28.13 11.67-10.63 0-20.62-4.15-28.13-11.67l-95.93-96.77c-11.14-11.15-17.26-25.96-17.26-41.68V385.37c0-21.96 17.85-39.82 39.8-39.82 21.95 0 39.8 17.86 39.8 39.82v213.08l89.86 90.73c7.53 7.53 11.67 17.52 11.67 28.15-0.01 10.64-4.16 20.63-11.68 28.15z"
                  fill="currentColor" p-id="13663"></path>
              </svg>
            </button>
            <input class="block mx-1 p-2 w-full text-sm bg-transparent text-white input-border-bottom"
              placeholder="Add a new task..."></input>
            <button type="submit"
              class="p-2 inline-flex justify-center text-white rounded-full cursor-pointer hover:text-blue-600">
              <svg class="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4" style="flex: 1; overflow: auto">
      <div class="overflow-hidden max-w-2xl p-2 mb-2 mx-auto cursor-pointer rounded-xl custom-border"
        v-for="item in state.listData" :key="item.id" draggable="true" @dragstart="dragStart($event, item)"
        @dragover.prevent @drop="drop($event, item)">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" style="width: 20px;"
            :class="[item.isCompleted ? 'text-blue-600' : 'text-white']" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg> -->
        <div class="flex justify-between" style="padding-bottom: 2px;">
          <div class="text-gray-300 text-xs">
            {{ item.time }}
          </div>
          <div class="flex gap-2">
            <button v-if="item.isTip" type="button" class="inline-flex justify-center cursor-pointer text-gray-300">
              <svg t="1738913384824" style="width: 14px; height: 14px;" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="13662" width="200" height="200">
                <path
                  d="M423.88 159.5h176.25c20.99 0.01 40.39-11.2 50.89-29.37a58.791 58.791 0 0 0 0-58.76A58.78 58.78 0 0 0 600.12 42H423.88a58.763 58.763 0 0 0-50.89 29.37 58.743 58.743 0 0 0 0 58.76c10.49 18.17 29.9 29.37 50.89 29.37zM512 218.25c-210.91 0-381.88 170.96-381.88 381.88C130.12 811.04 301.09 982 512 982s381.88-170.96 381.88-381.88c0-210.91-170.97-381.87-381.88-381.87z m128.38 527.23c-7.5 7.52-17.49 11.67-28.13 11.67-10.63 0-20.62-4.15-28.13-11.67l-95.93-96.77c-11.14-11.15-17.26-25.96-17.26-41.68V385.37c0-21.96 17.85-39.82 39.8-39.82 21.95 0 39.8 17.86 39.8 39.82v213.08l89.86 90.73c7.53 7.53 11.67 17.52 11.67 28.15-0.01 10.64-4.16 20.63-11.68 28.15z"
                  fill="currentColor" p-id="13663"></path>
              </svg>
            </button>
            <!-- <button type="button" class="inline-flex justify-center cursor-pointer text-gray-300">
              <svg t="1738981416387" style="width: 14px; height: 14px;" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="21331" width="200" height="200">
                <path
                  d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z"
                  fill="currentColor" p-id="21332"></path>
                <path
                  d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z"
                  fill="currentColor" p-id="21333"></path>
                <path
                  d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z"
                  fill="currentColor" p-id="21334"></path>
              </svg>
            </button> -->
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="font-medium truncate text-ellipsis text-xs"
            :class="[item.isCompleted ? 'line-through text-blue-100' : 'text-white']">
            {{ item.task }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import dayjs from 'dayjs';

const state = reactive({
  currentDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  taskValue: '',
  checkboxValue: true,
  listData: [
    {
      id: 1,
      sort: 1,
      task: '便签待完成任务1：这是一个待完成的任务,等你来完成',
      time: '2021-10-10 10:10:10',
      isCompleted: false,
      isTip: true,
    },
    {
      id: 2,
      sort: 2,
      task: '便签已完成任务2：这是一个已完成的任务',
      time: '2021-10-10 10:10:10',
      isCompleted: true,
      isTip: false,
    },
    {
      id: 3,
      sort: 3,
      task: '便签已完成任务3：这是一个已完成的任务',
      time: '2021-10-10 10:10:10',
      isCompleted: true,
      isTip: false,
    },
    {
      id: 4,
      sort: 4,
      task: '便签已完成任务4：这是一个已完成的任务',
      time: '2021-10-10 10:10:10',
      isCompleted: true,
      isTip: false,
    }
  ]
})

const dragStart = (event, item) => {
  event.dataTransfer.setData('text/plain', JSON.stringify(item));
};

const drop = (event, item) => {
  event.preventDefault();
  const draggedItem = JSON.parse(event.dataTransfer.getData('text/plain'));

  const draggedIndex = state.listData.findIndex(i => i.id === draggedItem.id);
  const targetIndex = state.listData.findIndex(i => i.id === item.id);

  if (draggedIndex !== -1 && targetIndex !== -1) {
    state.listData.splice(draggedIndex, 1);
    state.listData.splice(targetIndex, 0, draggedItem);

    // Update sort field values
    state.listData.forEach((item, index) => {
      item.sort = index + 1;
    });
    console.log(state.listData);

  }
};
</script>