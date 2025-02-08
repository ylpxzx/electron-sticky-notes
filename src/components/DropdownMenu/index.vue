<template>
  <div class="relative" :id="`id-${data.id}`">
    <button @click="onDropdownEvent(item)" type="button"
      class="inline-flex justify-center cursor-pointer text-gray-300 hover:text-gray-400">
      <svg t="1738986183731" style="width: 14px; height: 14px;" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="21927" width="200" height="200">
        <path
          d="M867.995 459.647h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z"
          p-id="21928" fill="currentColor"></path>
        <path
          d="M867.995 763.291h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z"
          p-id="21929" fill="currentColor"></path>
        <path
          d="M156.005 260.709h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353z"
          p-id="21930" fill="currentColor"></path>
      </svg>
    </button>
    <div v-show="state.isDropdownVisible" class="absolute right-0 rounded-md bg-white"
      style="z-index: 1; width: 160px;">
      <div class="p-1">
        <a @click="onEditEvent" v-if="!data.isDeleted"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738986918257" style="width: 12px; height: 12px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="33030" width="200" height="200">
            <path
              d="M894.077526 903.008784c0 31.839794-25.471835 57.311629-63.679588 57.311629L123.554516 960.320412C91.714722 960.320412 66.242887 934.848577 66.242887 903.008784L66.242887 196.165361c0-31.839794 25.471835-63.679588 57.311629-63.679588L639.359175 132.485773 639.359175 68.806186 123.554516 68.806186C59.874928 68.806186 2.563299 126.117815 2.563299 196.165361l0 706.843422C2.563299 966.688371 59.874928 1024 123.554516 1024L830.397938 1024c70.047546 0 127.359175-57.311629 127.359175-120.991216L957.757113 387.204124l-63.679588 0L894.077526 903.008784z"
              p-id="33031"></path>
            <path
              d="M1002.332825 68.806186l-44.575711-44.575711C938.653237 5.126598 925.917319-7.609319 913.181402 5.126598L894.077526 30.598433 995.964866 132.485773l19.103876-19.103876C1027.80466 94.278021 1015.068742 81.542103 1002.332825 68.806186z"
              p-id="33032"></path>
            <path
              d="M378.272866 540.035134 365.536948 552.771052 333.697155 692.866144 467.424289 661.026351 480.160206 641.922474 964.125072 164.325567 855.869773 62.438227Z"
              p-id="33033"></path>
          </svg>Edit
        </a>
        <!-- <a @click="onToUpEvent"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738997420661" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="35013" width="200" height="200">
            <path
              d="M855.866698 106.426915c0 23.451108-19.010983 42.463114-42.463114 42.463114L203.435319 148.890029c-23.451108 0-42.463114-19.010983-42.463114-42.463114l0 0c0-23.451108 19.010983-42.463114 42.463114-42.463114l609.968266 0C836.855716 63.963801 855.866698 82.974783 855.866698 106.426915L855.866698 106.426915zM511.826038 264.35069c-23.451108 0-42.463114 19.010983-42.463114 42.463114l0 609.968266c0 23.451108 19.010983 42.463114 42.463114 42.463114l0 0c23.451108 0 42.463114-19.010983 42.463114-42.463114L554.289152 306.812781C554.288129 283.361673 535.277146 264.35069 511.826038 264.35069L511.826038 264.35069zM541.961382 233.023194c-16.582677-16.582677-42.517349-17.534352-57.927317-2.124384L171.253362 543.67849c-15.408945 15.408945-14.458293 41.343617 2.124384 57.926294l0 0c16.582677 16.582677 42.517349 17.534352 57.926294 2.124384L544.085766 290.949488C559.494711 275.540544 558.544059 249.605871 541.961382 233.023194L541.961382 233.023194zM481.696834 233.023194c-16.582677 16.582677-17.534352 42.517349-2.124384 57.926294l312.780703 312.780703c15.408945 15.408945 41.343617 14.458293 57.926294-2.124384l0 0c16.582677-16.582677 17.534352-42.517349 2.124384-57.926294L539.623128 230.897787C524.214183 215.488843 498.27951 216.440517 481.696834 233.023194L481.696834 233.023194z"
              fill="currentColor" p-id="35014"></path>
          </svg>To Up
        </a>
        <a @click="onDeleteEvent"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738997618326" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="37174" width="200" height="200">
            <path
              d="M512 128h0.810667a35.029333 35.029333 0 0 1 5.546666 0.469333l2.218667 0.384c0.938667 0.170667 1.877333 0.426667 2.773333 0.64a26.368 26.368 0 0 1 1.962667 0.597334c0.853333 0.256 1.664 0.597333 2.517333 0.896a34.858667 34.858667 0 0 1 4.821334 2.304l1.536 0.896a40.874667 40.874667 0 0 1 7.936 6.272l-3.84-3.413334 0.384 0.298667 3.498666 3.114667 256 256a42.624 42.624 0 1 1-60.330666 60.330666L554.666667 273.664V853.333333a42.666667 42.666667 0 0 1-37.674667 42.368L512 896a42.666667 42.666667 0 0 1-42.666667-42.666667V273.664l-183.168 183.168a42.666667 42.666667 0 0 1-56.32 3.541333l-4.010666-3.541333a42.624 42.624 0 0 1 0-60.330667l256-256 3.498666-3.114666 0.384-0.298667 0.896-0.682667a32.085333 32.085333 0 0 1 3.2-2.133333c0.512-0.298667 1.024-0.64 1.578667-0.896a49.536 49.536 0 0 1 4.821333-2.261333l2.56-0.938667 1.962667-0.597333 2.773333-0.682667 2.218667-0.384A37.333333 37.333333 0 0 1 512 128l-3.797333 0.170667 3.029333-0.170667H512z"
              fill="currentColor" p-id="37175"></path>
          </svg>Move up
        </a>
        <a @click="onDeleteEvent"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738997646229" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="38116" width="200" height="200">
            <path
              d="M512 128a42.666667 42.666667 0 0 1 42.666667 42.666667v579.626666l183.168-183.125333a42.666667 42.666667 0 0 1 56.32-3.541333l4.010666 3.541333a42.624 42.624 0 0 1 0 60.330667l-256 256a48.725333 48.725333 0 0 1-3.84 3.413333l-0.896 0.682667a32.085333 32.085333 0 0 1-3.2 2.133333c-0.512 0.298667-1.024 0.64-1.578666 0.896a49.536 49.536 0 0 1-4.821334 2.261333l-2.56 0.938667-1.962666 0.597333a65.621333 65.621333 0 0 1-2.773334 0.682667l-2.218666 0.384A38.229333 38.229333 0 0 1 512 896l3.626667-0.170667-2.218667 0.128L512 896l-1.408-0.042667-2.261333-0.128a51.754667 51.754667 0 0 1-2.688-0.298666l-2.218667-0.384c-0.938667-0.170667-1.877333-0.426667-2.773333-0.64a26.368 26.368 0 0 1-1.962667-0.597334c-0.853333-0.256-1.664-0.597333-2.517333-0.896a34.858667 34.858667 0 0 1-4.821334-2.304l-1.536-0.896a40.874667 40.874667 0 0 1-7.936-6.272l3.84 3.413334a42.112 42.112 0 0 1-3.84-3.413334l-256-256a42.624 42.624 0 1 1 60.330667-60.330666L469.333333 750.293333V170.666667a42.666667 42.666667 0 0 1 37.674667-42.368L512 128z"
              fill="currentColor" p-id="38117"></path>
          </svg>Move down
        </a>
        <a @click="onToBottomEvent"
          class="flex items-center p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738997483713" style="width: 15px; height: 15px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="36056" width="200" height="200">
            <path
              d="M768 938.624a42.688 42.688 0 0 0 0-85.312H256a42.688 42.688 0 1 0 0 85.312h512z m-225.856-183.104a42.688 42.688 0 0 1-60.288 0l-256-256a42.688 42.688 0 1 1 60.288-60.352l183.04 182.976V127.936a42.688 42.688 0 1 1 85.312 0v494.528l183.36-183.296a42.688 42.688 0 1 1 60.288 60.352l-256 256z"
              fill="currentColor" p-id="36057"></path>
          </svg>To Bottom
        </a> -->
        <a @click="onMarkCompleteEvent" v-if="!data.isCompleted && !data.isDeleted"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738997779760" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="39109" width="200" height="200">
            <path
              d="M910.7 302.7L408.4 805c-23.1 23.1-60.6 23.1-83.7 0l-41.9-41.9L826.9 219c23.1-23.1 60.6-23.1 83.7 0 23.2 23.1 23.2 60.6 0.1 83.7z"
              p-id="39110" fill="currentColor"></path>
            <path
              d="M324.6 805L115.3 595.7c-23.1-23.1-23.1-60.6 0-83.7s60.6-23.1 83.7 0l251.2 251.2-41.8 41.8c-23.2 23.1-60.6 23.1-83.8 0z"
              p-id="39111" fill="currentColor"></path>
          </svg>Mark Complete
        </a>
        <a @click="onCancelCompleteEvent" v-if="data.isCompleted && !data.isDeleted"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738998036403" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="40083" width="200" height="200">
            <path
              d="M567.011556 512l274.944 274.944a38.912 38.912 0 0 1-55.011556 55.011556L512 567.011556 237.056 841.955556a38.912 38.912 0 0 1-55.011556-55.011556L456.988444 512 182.044444 237.056a38.912 38.912 0 1 1 55.011556-55.011556L512 456.988444 786.944 182.044444a38.912 38.912 0 0 1 55.011556 55.011556L567.011556 512z"
              fill="currentColor" p-id="40084"></path>
          </svg>Cancel Complete
        </a>
        <a @click="onRestoreEvent" v-if="data.isDeleted"
          class="flex items-center w-full p-2 rounded-md text-xs text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1739003678190" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="41195" width="200" height="200">
            <path
              d="M486.464 83.584a424.96 424.96 0 0 0-276.928 102.336 48.256 48.256 0 0 0-6.4 6.528l-6.4-6.016-34.24-31.04-10.88-9.152-22.912-20.736-4.928-3.968c-4.864-3.52-7.68-3.84-9.536 0.384l-0.96 3.072-1.152 6.784-0.896 9.472-1.92 36.864-11.392 165.888-0.512 15.616-1.408 27.776 0.128 7.168c0.64 7.936 3.2 11.008 10.368 11.2l3.904-0.128 7.872-1.088 38.272-7.232 160.896-34.56 39.68-7.232 6.912-1.728c6.4-1.92 8.192-4.224 5.696-8.512l-1.984-2.752-4.928-5.248-88.512-80.384 10.56-8.576a328.768 328.768 0 0 1 201.6-68.736c183.616 0 332.608 150.4 332.608 336 0 185.664-148.992 336-332.608 336a331.52 331.52 0 0 1-282.56-158.656 48 48 0 1 0-81.728 50.368 427.52 427.52 0 0 0 364.288 204.288c236.8 0 428.608-193.472 428.608-432 0-238.464-191.808-432-428.608-432z"
              p-id="41196" fill="currentColor"></path>
          </svg>restore
        </a>
        <a @click="onDeleteEvent"
          class="flex items-center w-full p-2 rounded-md text-xs text-red-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer">
          <svg t="1738987383556" style="width: 14px; height: 14px;" class="mr-2" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="34031" width="200" height="200">
            <path
              d="M880 240H704v-64c0-52.8-43.2-96-96-96H416c-52.8 0-96 43.2-96 96v64H144c-17.6 0-32 14.4-32 32s14.4 32 32 32h48v512c0 70.4 57.6 128 128 128h384c70.4 0 128-57.6 128-128V304h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z m-496-64c0-17.6 14.4-32 32-32h192c17.6 0 32 14.4 32 32v64H384v-64z m384 640c0 35.2-28.8 64-64 64H320c-35.2 0-64-28.8-64-64V304h512v512z"
              fill="currentColor" p-id="34032"></path>
            <path
              d="M416 432c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32s32-14.4 32-32V464c0-17.6-14.4-32-32-32zM608 432c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32s32-14.4 32-32V464c0-17.6-14.4-32-32-32z"
              fill="currentColor" p-id="34033"></path>
          </svg>Delete
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => { },
  },
});

const emit = defineEmits(['edit', 'delete', 'restore', 'markComplete', 'cancelComplete']);

const state = reactive({
  isDropdownVisible: false,
})
const onDropdownEvent = () => {
  state.isDropdownVisible = !state.isDropdownVisible;
};

const closeDropdown = () => {
  state.isDropdownVisible = false;
};

const onEditEvent = () => {
  const dataBack = JSON.parse(JSON.stringify(props.data));
  emit('edit', dataBack);
  closeDropdown();
}

const onDeleteEvent = () => {
  const dataBack = JSON.parse(JSON.stringify(props.data));
  emit('delete', dataBack);
  closeDropdown();
}

const onMarkCompleteEvent = () => {
  const dataBack = JSON.parse(JSON.stringify(props.data));
  dataBack.isCompleted = true;
  emit('markComplete', dataBack);
  closeDropdown();
}

const onCancelCompleteEvent = () => {
  const dataBack = JSON.parse(JSON.stringify(props.data));
  dataBack.isCompleted = false;
  emit('cancelComplete', dataBack);
  closeDropdown();
}

const handleClickOutside = (event) => {
  const dropdown = document.querySelector(`#id-${props.data.id}`);
  if (dropdown && !dropdown.contains(event.target)) {
    closeDropdown();
  }
};

const onRestoreEvent = () => {
  const dataBack = JSON.parse(JSON.stringify(props.data));
  dataBack.isDeleted = false;
  emit('restore', dataBack);
  closeDropdown();
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>