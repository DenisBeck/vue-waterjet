<script setup>
import { ref } from 'vue'
import { WaterjetButton } from "../ui/waterjetButton"

defineProps({ 
    tabItems: Array,
    theme: String
})

const activeIndex = ref(0)
</script>

<template>
    <div :class="{'categories': theme}">
        <div class="tab-labels flex gap-2.5 mb-6 overflow-x-auto text-xl">
            <waterjet-button @handle-click="activeIndex = key" v-for="item,key in tabItems" :class="{'active': activeIndex === key}" :key="item.id" :label="item.label" class="tabs-button whitespace-nowrap bg-transparent hover:bg-transparent text-slate-700 md:h-12 md:px-6" />
        </div>
        <div class="tab-texts relative" >
            <div v-for="item,key in tabItems" :key="item.id" :class="{'active': activeIndex === key}" class="tabs-content transition duration-300 h-fit">
               {{ item.text }}
                <slot :name="item.id" />
            </div>
        </div>
    </div>
</template>

<style>
.tabs-button {
    border-radius: 5px;
    transition: all 0.3s ease 0s
}
.tabs-button.active {
    background: #F0F0F4;
}
.tabs-button span {
    color: #2F3035;
    text-transform: none;
    font-size: 20px;
}
.tabs-button.active span {
    font-weight: 700;
} 
.tabs-content {
    display: none;
}
.tabs-content.active {
    display: block;
}
.categories .tab-labels {
    column-gap: 30px;
    row-gap: 10px
}
.categories .tab-labels .tabs-button {
    padding: 0;
    border-radius: 0;
    height: auto;
}
.categories .tab-labels .tabs-button.active {
    background: transparent;
    border-bottom: 1px solid #2F3035;
    font-weight: 400;
}
.categories .tabs-button.active span {
    font-weight: 400;
}
.categories .tab-labels span {
    font-size: 14px;
}
</style>