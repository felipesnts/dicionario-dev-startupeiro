<template>
  <div>
    <div class="relative py-4">
      <div v-for="data in json.data" :key="data.group" class="py-4">
        <div class="z-10 sticky top-0 border-t border-b bg-indigo-800 px-6 py-4 text-xl uppercase font-medium text-white">
          <h2>{{ data.group }}</h2>
        </div>
        <ul role="list" class="relative z-0 divide-y divide-indigo-900">
          <li class="bg-white">
            <div class="relative">
              <div v-for="term, index in data.terms" :key="term" class="px-6 py-5" :class="{ 'bg-gray-50': index % 2 !== 0 }">
                <h3 class="text-lg">{{ term.name }}</h3>
                <div v-html="term.definition"></div>

                <div v-for="example, index in term.examples" :key="index">
                  <p v-html="example"></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, reactive } from 'vue'
import json from '~/data/terms.json'

export default {
    setup() {
        const test = ref("test")
        // const test2 = reactive({ test: '123' })
        
        return {
            test,
            json,
        }
    },
}

</script>
