<template>
  <div class="pt-2 flex flex-col h-full">
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
          <div class="flex items-center rounded-md bg-white">
            <button type="button"
              class="p-2 inline-flex justify-center rounded-lg cursor-pointer text-gray-500 hover:text-blue-600">
              <svg t="1738913384824" class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="13662" width="200" height="200">
                <path
                  d="M423.88 159.5h176.25c20.99 0.01 40.39-11.2 50.89-29.37a58.791 58.791 0 0 0 0-58.76A58.78 58.78 0 0 0 600.12 42H423.88a58.763 58.763 0 0 0-50.89 29.37 58.743 58.743 0 0 0 0 58.76c10.49 18.17 29.9 29.37 50.89 29.37zM512 218.25c-210.91 0-381.88 170.96-381.88 381.88C130.12 811.04 301.09 982 512 982s381.88-170.96 381.88-381.88c0-210.91-170.97-381.87-381.88-381.87z m128.38 527.23c-7.5 7.52-17.49 11.67-28.13 11.67-10.63 0-20.62-4.15-28.13-11.67l-95.93-96.77c-11.14-11.15-17.26-25.96-17.26-41.68V385.37c0-21.96 17.85-39.82 39.8-39.82 21.95 0 39.8 17.86 39.8 39.82v213.08l89.86 90.73c7.53 7.53 11.67 17.52 11.67 28.15-0.01 10.64-4.16 20.63-11.68 28.15z"
                  fill="currentColor" p-id="13663"></path>
              </svg>
            </button>
            <input class="block mx-1 p-2 w-full text-sm bg-transparent text-gray-400 input-border-bottom"
              placeholder="Add a new task..."></input>
            <button type="submit"
              class="p-2 inline-flex justify-center text-gray-500 rounded-full cursor-pointer hover:text-blue-600">
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
    <div class="p-4 overflow-auto">
      <div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mb-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden flex items-center justify-between max-w-2xl px-4 py-2 mx-auto cursor-pointer rounded-xl custom-border">
          <div class="flex items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px;" class="text-blue-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <div class="mx-4 overflow-hidden">
              <h2 class="font-medium text-white truncate text-ellipsis line-through">
                Basis实打实大苏的身上的打是的是的是撒旦撒的收到c</h2>
              <div class="text-xs text-gray-200">
                Save 20%
              </div>
            </div>
          </div>
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
  checkboxValue: true
})
</script>