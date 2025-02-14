<template>
  <div class="pt-2 flex flex-col" style="height: 100vh;">
    <div class="px-4 pb-2">
      <div class="flex justify-between">
        <div class="pb-2 drag-area text-sm flex-1">
          <div>stickyNotes</div>
        </div>
        <div class="flex justify-between pb-2 text-sm gap-2">
          <div>
            <button @click="onIsTop" type="button" class="inline-flex justify-center cursor-pointer hover:text-gray-400"
              :class="[state.isTop ? 'text-green-700' : 'text-gray-100']">
              <svg t="1739415222980" style="width: 16px; height: 16px;" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="7749" width="200" height="200">
                <path
                  d="M228.416 493.184l284.010667 145.493333 283.968-145.493333-283.989334-145.514667-283.989333 145.493334z m283.989333 211.050667c-8.021333 0-16.064-1.856-23.381333-5.589334L177.301333 538.88A51.2 51.2 0 0 1 149.333333 493.141333a51.157333 51.157333 0 0 1 27.968-45.674666l311.701334-159.722667a51.434667 51.434667 0 0 1 46.869333 0l311.658667 159.722667a51.114667 51.114667 0 0 1 27.925333 45.653333c0.021333 19.392-10.666667 36.906667-27.904 45.76h-0.021333l-311.722667 159.744c-7.338667 3.754667-15.36 5.610667-23.402667 5.610667z"
                  p-id="7750" fill="currentColor"></path>
                <path
                  d="M512.384 875.029333c-8.021333 0-16.064-1.877333-23.381333-5.589333L177.28 709.653333A51.178667 51.178667 0 0 1 149.333333 663.957333a51.157333 51.157333 0 0 1 27.946667-45.674666l126.933333-65.066667a32 32 0 0 1 29.226667 56.96l-105.024 53.824 283.968 145.493333 284.010667-145.493333-107.178667-54.933333a32 32 0 1 1 29.162667-56.96l129.130666 66.176a51.072 51.072 0 0 1 27.946667 45.653333c0.021333 19.392-10.666667 36.906667-27.925333 45.738667l-311.722667 159.765333a51.669333 51.669333 0 0 1-23.424 5.610667zM533.248 153.813333l326.186667 150.186667c9.621333 4.437333 15.637333 13.056 15.637333 22.464 0 9.386667-6.016 18.026667-15.637333 22.442667l-326.186667 150.165333a50.453333 50.453333 0 0 1-41.706667 0l-326.186666-150.186667c-9.6-4.394667-15.616-13.034667-15.616-22.421333 0-9.408 5.994667-18.026667 15.616-22.464l326.186666-150.186667a50.602667 50.602667 0 0 1 41.706667 0z"
                  p-id="7751" fill="currentColor"></path>
              </svg>
            </button>
          </div>
          <div>
            <button @click="state.isOpenConfig = true" type="button"
              class="inline-flex justify-center cursor-pointer text-gray-100 hover:text-gray-400">
              <svg style="width: 16px; height: 16px;" t="1739324580903" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2603" width="200" height="200">
                <path
                  d="M509.387755 666.122449c-83.591837 0-151.510204-67.918367-151.510204-151.510204s67.918367-151.510204 151.510204-151.510204 151.510204 67.918367 151.510204 151.510204-67.918367 151.510204-151.510204 151.510204z m0-261.22449c-60.604082 0-109.714286 49.110204-109.714286 109.714286s49.110204 109.714286 109.714286 109.714286 109.714286-49.110204 109.714286-109.714286-49.110204-109.714286-109.714286-109.714286z"
                  fill="currentColor" p-id="2604"></path>
                <path
                  d="M556.408163 929.959184h-83.591836c-47.542857 0-86.204082-38.661224-86.204082-86.204082v-22.987755c0-1.044898-0.522449-2.089796-1.567347-2.612245h-0.522449c-1.044898-0.522449-2.089796 0-3.134694 0.522449l-14.628571 15.15102c-16.195918 16.195918-37.093878 25.077551-59.559184 25.077551-22.465306 0-43.363265-8.881633-59.036735-24.555102l-59.036734-59.036734c-32.391837-32.391837-32.391837-85.159184 0-118.07347l15.673469-15.15102c1.044898-1.044898 1.044898-2.089796 0.522449-3.134694v-0.522449c-0.522449-1.044898-1.567347-1.567347-2.612245-1.567347h-22.987755c-47.542857 0-86.204082-38.661224-86.204082-86.204082v-78.367346c0.522449-47.020408 39.183673-85.681633 86.726531-85.681633h21.420408c1.044898 0 2.089796-0.522449 2.612245-2.089796 0.522449-1.044898 1.044898-2.612245 1.567347-3.657143 0.522449-1.044898 0-2.089796-0.522449-3.134694l-16.195918-16.718367C156.734694 329.142857 156.734694 275.853061 189.126531 243.461224l59.036734-59.036734c15.673469-15.673469 36.571429-24.555102 59.036735-24.555102 22.465306 0 43.363265 8.881633 59.036735 24.555102l15.15102 15.673469c0.522449 1.044898 2.089796 1.044898 3.134694 0.522449h0.522449c1.044898-0.522449 1.567347-1.567347 1.567347-2.612245v-17.763265C386.612245 132.702041 425.273469 94.040816 472.816327 94.040816h83.591836c44.408163 0 80.979592 36.571429 80.979592 80.979592v21.420408c0 1.044898 0.522449 2.089796 2.089796 2.612245 1.567347 0.522449 2.612245 1.044898 3.657143 1.567347 1.044898 0.522449 2.089796 0 3.134694-0.522449l16.718367-16.195918c32.391837-32.391837 85.159184-32.391837 118.073469 0.522449l59.036735 59.036734c15.673469 15.673469 24.555102 36.571429 24.555102 59.036735 0 22.465306-8.881633 43.363265-24.555102 59.036735l-15.673469 16.195918c-0.522449 0.522449-1.044898 2.089796-0.522449 2.612245 0.522449 1.044898 1.044898 2.612245 1.567347 3.657143 0.522449 1.044898 1.567347 2.089796 2.612245 2.089796h21.420408c44.408163 0 80.979592 36.571429 80.979592 80.979592v88.816326c0 44.408163-36.571429 80.979592-80.979592 80.979592h-22.987755c-1.044898 0-2.089796 0.522449-2.612245 1.567347-0.522449 1.567347-0.522449 2.612245 0.522449 3.657143l15.15102 14.628571c16.195918 16.195918 25.077551 37.093878 24.555102 59.559184 0 22.465306-8.881633 43.363265-24.555102 59.036735l-59.036734 59.036734c-15.673469 15.673469-36.571429 24.555102-59.036735 24.555102s-43.363265-8.881633-59.036735-24.555102l-16.195918-15.673469c-0.522449-0.522449-2.089796-1.044898-2.612245-0.522449-1.044898 0.522449-2.612245 1.044898-3.657143 1.567347-1.044898 0.522449-2.089796 1.567347-2.089796 2.612245v26.644898C637.387755 893.387755 600.816327 929.959184 556.408163 929.959184zM402.285714 780.538776c16.195918 7.314286 26.122449 22.987755 26.122449 40.75102v22.987755c0 24.555102 19.853061 44.408163 44.408164 44.408163h83.591836c21.420408 0 39.183673-17.763265 39.183674-39.183673v-26.644898c0-18.285714 10.971429-34.481633 28.212245-41.27347 1.044898-0.522449 1.567347-0.522449 2.612245-1.044897 16.718367-7.314286 35.526531-3.657143 48.587755 8.881632l16.195918 15.67347c16.718367 16.718367 43.363265 16.718367 59.559184 0l59.036734-59.036735c7.836735-7.836735 12.016327-18.285714 12.016327-29.779592 0-10.971429-4.179592-21.420408-12.016327-29.779592l-14.628571-14.106122c-13.583673-13.061224-17.763265-32.914286-9.926531-50.155102v-0.522449c6.791837-15.673469 22.987755-26.122449 40.751021-26.122449h22.987755c21.420408 0 39.183673-17.763265 39.183673-39.183674v-88.816326c0-21.420408-17.763265-39.183673-39.183673-39.183674h-21.420408c-18.285714 0-34.481633-10.971429-41.27347-28.212245-0.522449-1.044898-0.522449-1.567347-1.044898-2.612245-7.314286-16.718367-3.657143-35.526531 8.881633-48.587755l15.673469-16.195918c7.836735-7.836735 12.538776-18.808163 12.538776-29.779592 0-11.493878-4.179592-21.942857-12.016327-29.779592L751.281633 214.204082c-16.195918-16.195918-42.840816-16.195918-59.036735 0l-17.240816 16.195918c-13.061224 12.538776-32.391837 15.673469-48.587755 8.881633-0.522449-0.522449-1.567347-0.522449-2.612245-1.044898-17.240816-6.791837-28.212245-22.987755-28.212245-41.27347v-21.420408c0-21.420408-17.763265-39.183673-39.183674-39.183673h-83.591836c-24.555102 0-44.408163 19.853061-44.408164 44.408163V198.530612c0 17.763265-10.44898 33.436735-26.644898 40.751021-17.240816 7.836735-37.093878 3.657143-50.155102-9.404082l-15.15102-15.673469c-7.836735-7.836735-18.285714-12.016327-29.257143-12.016327-10.971429 0-21.420408 4.179592-29.257143 12.016327L218.906122 272.718367c-16.195918 16.195918-16.195918 42.840816 0 59.036735l16.195919 17.240816c12.538776 13.061224 16.195918 32.391837 8.881632 48.587755-0.522449 0.522449-0.522449 1.567347-1.044897 2.612245-6.791837 17.240816-22.987755 28.212245-41.27347 28.212245h-21.420408c-24.555102 0-44.408163 19.853061-44.408163 44.408164v78.367346c0 24.555102 19.853061 44.408163 44.408163 44.408164h22.987755c17.763265 0 33.436735 10.44898 40.75102 26.644898v0.522449c7.314286 16.718367 3.657143 37.093878-9.404081 49.632653l-15.67347 15.15102c-16.195918 16.195918-16.195918 42.318367 0 58.514286l59.036735 59.036735c7.836735 7.836735 18.285714 12.016327 29.257143 12.016326 10.971429 0 21.420408-4.179592 29.779592-12.538775l14.106122-14.628572c13.061224-13.583673 32.914286-17.763265 50.155102-9.92653l1.044898 0.522449z"
                  fill="currentColor" p-id="2605"></path>
              </svg>
            </button>
          </div>
        </div>
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
      <div v-if="incompleteCount" class="cursor-pointer flex gap-1"
        :class="[state.tabSign === 'incomplete' ? 'underline' : '']" @click="onChangeTab('incomplete')">
        <div>Incomplete</div>
        <div class="text-white text-xs flex justify-center items-center"
          style="border-radius: 50%; width: 8px; height: 8px;">{{ incompleteCount }}</div>
      </div>
      <div v-if="completedCount" class="cursor-pointer flex gap-1"
        :class="[state.tabSign === 'completed' ? 'underline' : '']" @click="onChangeTab('completed')">
        <div>Completed</div>
        <div class="text-white text-xs flex justify-center items-center"
          style="border-radius: 50%; width: 8px; height: 8px;">{{ completedCount }}</div>
      </div>
      <div v-if="deletedCount" class="cursor-pointer flex gap-1"
        :class="[state.tabSign === 'deleted' ? 'underline' : '']" @click="onChangeTab('deleted')">
        <div>Deleted</div>
        <div class="text-white text-xs flex justify-center items-center"
          style="border-radius: 50%; width: 8px; height: 8px;">{{ deletedCount }}</div>
      </div>
    </div>
    <div class="p-4 pt-2" style="flex: 1; overflow: auto">
      <div class="p-2 mb-2 cursor-pointer rounded-xl custom-border" v-for="item in state.showData" :key="item.id"
        draggable="true" @dragstart="dragStart($event, item)" @dragover.prevent @drop="drop($event, item)">
        <div class="flex justify-between" style="padding-bottom: 2px;">
          <div class="text-gray-100 text-xs">
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
    <ConfigComp v-if="state.isOpenConfig" v-model:is-show="state.isOpenConfig" v-model:bg-color="state.bgColor"
      v-model:transparency="state.transparency" @close="onCloseEvent" @color="onUpdateColor"></ConfigComp>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, watch } from "vue";
import dayjs from 'dayjs';
import DropdownMenu from './components/DropdownMenu/index.vue';
import ConfigComp from './components/ConfigComp/index.vue';

const state = reactive({
  currentDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  taskValue: '',
  editId: '',
  tabSign: 'incomplete',
  editData: {},
  listData: [],
  showData: [],
  isOpenConfig: false,
  isTop: false,
  bgColor: '#000000',
  transparency: 0,
})

const onIsTop = () => {
  state.isTop = !state.isTop
}

const onGetAllTodo = async () => {
  await electronAPI.getAllTodo().then((item) => {
    state.listData = Object.values(item);
  })
}

watch(() => state.isTop, (newVal) => {
  electronAPI.setIsTop(state.isTop)
});

const onCloseEvent = () => {
  state.isOpenConfig = false
}

const onUpdateColor = (item) => {
  state.bgColor = item.color
  state.transparency = item.transparency
}

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
  if (state.listData[index].isCompleted) {
    state.tabSign = 'completed';
    state.showData = state.listData.filter(i => i.isCompleted && !i.isDeleted).sort((a, b) => a.sort - b.sort);
  } else {
    state.tabSign = 'incomplete';
    state.showData = state.listData.filter(i => !i.isCompleted && !i.isDeleted).sort((a, b) => a.sort - b.sort);
  }
};

onMounted(async () => {
  await onGetAllTodo();
  state.showData = state.listData.filter(i => !i.isCompleted && !i.isDeleted);
})
</script>