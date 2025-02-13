<template>
  <div v-if="state.isVisible"
    class="fixed z-50 inset-0 flex items-center justify-center overflow-hidden m-6 text-gray-900">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0"></div>
    </div>
    <div class="px-4 bg-white rounded-md text-left overflow-hidden shadow-xl transform transition-all w-full">
      <div class="pt-2 pb-4 flex justify-between">
        <div class="font-bold leading-6">
          配置
        </div>
        <div>
          <button @click="onCloseShow" type="button" class="inline-flex justify-center cursor-pointer hover:text-black">
            <svg t="1739326331669" style="width: 10px; height: 10px;" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3579" width="200" height="200">
              <path
                d="M512 421.490332 149.590238 59.08057C125.311473 34.801805 84.445226 34.458094 59.45166 59.45166 34.283863 84.619457 34.292235 124.801903 59.08057 149.590238L421.490332 512 59.080706 874.409626C34.801623 898.688709 34.45832 939.555 59.45166 964.54834 84.619683 989.716363 124.801677 989.707991 149.590374 964.919294L512 602.509668 874.409762 964.91943C898.688527 989.198195 939.554774 989.541906 964.54834 964.54834 989.716137 939.380543 989.707765 899.198097 964.91943 874.409762L602.509668 512 964.919294 149.590374C989.198377 125.311291 989.54168 84.445 964.54834 59.45166 939.380317 34.283637 899.198323 34.292009 874.409626 59.080706L512 421.490332Z"
                fill="currentColor" p-id="3580"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-2 pb-4 text-xs text-gray-600">
        <div class="flex justify-between">
          <div>背景颜色</div>
          <div><input type="color" v-model="state.colorValue" /></div>
        </div>
        <div class="flex justify-between">
          <div>透明度</div>
          <div>
            <input class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3" type="range" min="0" max="100"
              step="1" v-model="state.transparency" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => { },
  },
  bgColor: {
    type: String,
    default: '#000000',
  },
  transparency: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits(['close', 'color']);

const state = reactive({
  isDropdown: false,
  isVisible: props.isShow,
  colorValue: props.bgColor,
  transparency: props.transparency,
})

watch(() => props.isShow, (newVal) => {
  state.isVisible = newVal;
});

watch([() => state.transparency, () => state.colorValue], ([newTransparency, newColor]) => {
  const rgba = newColor.replace('#', '');
  const r = parseInt(rgba.substring(0, 2), 16);
  const g = parseInt(rgba.substring(2, 4), 16);
  const b = parseInt(rgba.substring(4, 6), 16);
  const a = 1 - (newTransparency / 100);
  console.log(`rgba(${r}, ${g}, ${b}, ${a})`);

  document.documentElement.style.setProperty('--bg-color', `rgba(${r}, ${g}, ${b}, ${a})`);
  emit('color', { color: newColor, transparency: newTransparency });
});


const onCloseShow = () => {
  state.isVisible = false;
  emit('close');
}


</script>