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
          <p>{{ state.listData.length }} Tasks</p>
        </div>
        <div>
          <div class="flex items-center rounded-md bg-transparent">
            <!-- <button type="button"
              class="p-2 inline-flex justify-center rounded-lg cursor-pointer text-white hover:text-gray-400">
              <svg t="1738913384824" class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="13662" width="200" height="200">
                <path
                  d="M423.88 159.5h176.25c20.99 0.01 40.39-11.2 50.89-29.37a58.791 58.791 0 0 0 0-58.76A58.78 58.78 0 0 0 600.12 42H423.88a58.763 58.763 0 0 0-50.89 29.37 58.743 58.743 0 0 0 0 58.76c10.49 18.17 29.9 29.37 50.89 29.37zM512 218.25c-210.91 0-381.88 170.96-381.88 381.88C130.12 811.04 301.09 982 512 982s381.88-170.96 381.88-381.88c0-210.91-170.97-381.87-381.88-381.87z m128.38 527.23c-7.5 7.52-17.49 11.67-28.13 11.67-10.63 0-20.62-4.15-28.13-11.67l-95.93-96.77c-11.14-11.15-17.26-25.96-17.26-41.68V385.37c0-21.96 17.85-39.82 39.8-39.82 21.95 0 39.8 17.86 39.8 39.82v213.08l89.86 90.73c7.53 7.53 11.67 17.52 11.67 28.15-0.01 10.64-4.16 20.63-11.68 28.15z"
                  fill="currentColor" p-id="13663"></path>
              </svg>
            </button> -->
            <input
              class="block mx-1 p-2 w-full text-sm bg-transparent text-white input-border-bottom placeholder-gray-200"
              placeholder="Add a new task..." v-model="state.taskValue"></input>
            <button type="submit" @click="onSubmit"
              class="p-2 inline-flex justify-center text-white rounded-full cursor-pointer hover:text-gray-400">
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
    <div class="flex justify-around gap-4 px-2 pt-2">
      <div class="cursor-pointer flex gap-1" :class="[state.tabSign === 'incomplete' ? 'underline' : '']"
        @click="onChangeTab('incomplete')">
        <div>Incomplete</div>
        <div v-if="incompleteCount" class="text-white text-xs flex justify-center items-center"
          style="border-radius: 50%; width: 8px; height: 8px;">{{ incompleteCount }}</div>
      </div>
      <div class="cursor-pointer flex gap-1" :class="[state.tabSign === 'completed' ? 'underline' : '']"
        @click="onChangeTab('completed')">
        <div>Completed</div>
        <div v-if="completedCount" class="text-white text-xs flex justify-center items-center"
          style="border-radius: 50%; width: 8px; height: 8px;">{{ completedCount }}</div>
      </div>
      <div class="cursor-pointer flex gap-1" :class="[state.tabSign === 'deleted' ? 'underline' : '']"
        @click="onChangeTab('deleted')">
        <div>Deleted</div>
        <div v-if="deletedCount" class="text-white text-xs flex justify-center items-center"
          style="border-radius: 50%; width: 8px; height: 8px;">{{ deletedCount }}</div>
      </div>
    </div>
    <div class="p-4 pt-2" style="flex: 1; overflow: auto">
      <div class="p-2 mb-2 cursor-pointer rounded-xl custom-border" v-for="item in state.showData" :key="item.id"
        draggable="true" @dragstart="dragStart($event, item)" @dragover.prevent @drop="drop($event, item)">
        <div class="flex justify-between" style="padding-bottom: 2px;">
          <div class="text-gray-300 text-xs">
            {{ item.time }}
          </div>
          <div class="flex gap-2">
            <!-- <button v-if="item.isTip" type="button"
              class="inline-flex justify-center cursor-pointer text-gray-300 hover:text-gray-400">
              <svg t="1738913384824" style="width: 14px; height: 14px;" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="13662" width="200" height="200">
                <path
                  d="M423.88 159.5h176.25c20.99 0.01 40.39-11.2 50.89-29.37a58.791 58.791 0 0 0 0-58.76A58.78 58.78 0 0 0 600.12 42H423.88a58.763 58.763 0 0 0-50.89 29.37 58.743 58.743 0 0 0 0 58.76c10.49 18.17 29.9 29.37 50.89 29.37zM512 218.25c-210.91 0-381.88 170.96-381.88 381.88C130.12 811.04 301.09 982 512 982s381.88-170.96 381.88-381.88c0-210.91-170.97-381.87-381.88-381.87z m128.38 527.23c-7.5 7.52-17.49 11.67-28.13 11.67-10.63 0-20.62-4.15-28.13-11.67l-95.93-96.77c-11.14-11.15-17.26-25.96-17.26-41.68V385.37c0-21.96 17.85-39.82 39.8-39.82 21.95 0 39.8 17.86 39.8 39.82v213.08l89.86 90.73c7.53 7.53 11.67 17.52 11.67 28.15-0.01 10.64-4.16 20.63-11.68 28.15z"
                  fill="currentColor" p-id="13663"></path>
              </svg>
            </button> -->
            <dropdown-menu :data="item" @edit="onEdit" @delete="onDelete" @markComplete="onMarkComplete"
              @cancelComplete="onCancelComplete" @restore="onRestore"></dropdown-menu>
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="font-medium truncate text-ellipsis text-xs">
            <div v-if="item.id === state.editId">
              <div class="flex justify-between"
                :class="[item.isCompleted ? 'line-through text-blue-100' : 'text-white']">
                <input class="block mx-1 p-1 w-full text-xs bg-transparent text-white input-border-bottom"
                  placeholder="Edit Task..." v-model="state.editData.task"></input>
              </div>
              <div class="flex justify-between pt-2">
                <button type="button" @click="onCancelEdit"
                  class="p-1 inline-flex justify-center rounded-lg cursor-pointer text-white hover:text-red-400">
                  Cancel
                </button>
                <button type="button" @click="onCompleteEdit"
                  class="p-1 inline-flex justify-center rounded-lg cursor-pointer text-white hover:text-green-400">
                  Complete
                </button>
              </div>
            </div>
            <span v-else :class="[item.isCompleted ? 'line-through text-blue-100' : 'text-white']">{{ item.task
              }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import dayjs from 'dayjs';
import DropdownMenu from './components/DropdownMenu/index.vue';

const state = reactive({
  currentDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  taskValue: '',
  editId: '',
  tabSign: 'incomplete',
  editData: {},
  listData: [
    {
      id: 1,
      sort: 0,
      task: '便签待完成任务1：这是一个待完成的任务,等你来完成',
      time: '2021-10-10 10:10:10',
      isCompleted: false,
      isTip: true,
      isDeleted: false,
    },
    {
      id: 2,
      sort: 1,
      task: '便签已完成任务2：这是一个已完成的任务',
      time: '2021-10-10 10:10:10',
      isCompleted: true,
      isTip: false,
      isDeleted: false,
    },
    {
      id: 3,
      sort: 2,
      task: '便签已完成任务3：这是一个已完成的任务',
      time: '2021-10-10 10:10:10',
      isCompleted: true,
      isTip: false,
      isDeleted: false,
    },
    {
      id: 4,
      sort: 3,
      task: '便签已完成任务4：这是一个已完成的任务',
      time: '2021-10-10 10:10:10',
      isCompleted: true,
      isTip: false,
      isDeleted: false,
    }
  ],
  showData: []
})

const dragStart = (event, item) => {
  event.dataTransfer.setData('text/plain', JSON.stringify(item));
};

const drop = (event, item) => {
  event.preventDefault();
  const draggedItem = JSON.parse(event.dataTransfer.getData('text/plain'));

  const draggedIndex = state.showData.findIndex(i => i.id === draggedItem.id);
  const targetIndex = state.showData.findIndex(i => i.id === item.id);
  if (draggedIndex !== -1 && targetIndex !== -1) {
    state.showData.splice(draggedIndex, 1);
    state.showData.splice(targetIndex, 0, draggedItem);

    // 更新draggedIndex与targetIndex范围内的sort
    const sortList = state.showData.slice(Math.min(draggedIndex, targetIndex), Math.max(draggedIndex, targetIndex) + 1);
    sortList.forEach((i, index) => {
      const sortIndex = state.listData.findIndex(j => j.id === i.id);
      state.listData[sortIndex].sort = index + Math.min(draggedIndex, targetIndex);
    });
  }
};

const onSubmit = () => {
  if (!state.taskValue) return;
  state.listData.push({
    id: state.listData.length + 1,
    sort: state.listData.length + 1,
    task: state.taskValue,
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    isCompleted: false,
    isTip: true,
    isDeleted: false,
  });
  state.taskValue = '';
  state.tabSign = 'incomplete';
  state.showData = state.listData.filter(i => !i.isCompleted && !i.isDeleted).sort((a, b) => a.sort - b.sort);
};

const onChangeTab = (sign) => {
  state.tabSign = sign;
  switch (sign) {
    case 'incomplete':
      state.showData = state.listData.filter(i => !i.isCompleted && !i.isDeleted).sort((a, b) => a.sort - b.sort);
      break;
    case 'completed':
      state.showData = state.listData.filter(i => i.isCompleted && !i.isDeleted).sort((a, b) => a.sort - b.sort);
      break;
    case 'deleted':
      state.showData = state.listData.filter(i => i.isDeleted).sort((a, b) => a.sort - b.sort);
      break;
    default:
      state.showData = state.listData.sort((a, b) => a.sort - b.sort);
  }
}

// 写一个计算属性，分别计算未完成、已完成、已删除的任务数量
const incompleteCount = computed(() => state.listData.filter(i => !i.isCompleted && !i.isDeleted).length);
const completedCount = computed(() => state.listData.filter(i => i.isCompleted && !i.isDeleted).length);
const deletedCount = computed(() => state.listData.filter(i => i.isDeleted).length);


const onEdit = (item) => {
  // 更新原数据
  state.editId = item.id
  state.editData = item
};

const onCancelEdit = () => {
  state.editId = ''
}

const onCompleteEdit = () => {
  const index = state.listData.findIndex(i => i.id === state.editId);
  state.listData[index].task = state.editData.task;
  state.editId = ''
}

const onDelete = (item) => {
  const index = state.listData.findIndex(i => i.id === item.id);
  state.listData[index].isDeleted = true;
  state.tabSign = 'deleted';
  state.showData = state.listData.filter(i => i.isDeleted);
};

const onMarkComplete = (item) => {
  const index = state.listData.findIndex(i => i.id === item.id);
  state.listData[index].isCompleted = true;
  state.showData = state.listData.filter(i => !i.isCompleted && !i.isDeleted);
};

const onCancelComplete = (item) => {
  const index = state.listData.findIndex(i => i.id === item.id);
  state.listData[index].isCompleted = false;
  state.showData = state.listData.filter(i => i.isCompleted && !i.isDeleted);
};

const onRestore = (item) => {
  const index = state.listData.findIndex(i => i.id === item.id);
  state.listData[index].isDeleted = false;
  state.showData = state.listData.filter(i => i.isDeleted);
};

onMounted(() => {
  state.showData = state.listData.filter(i => !i.isCompleted && !i.isDeleted);
})
</script>