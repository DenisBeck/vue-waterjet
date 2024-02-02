<script setup>
defineProps({
    idName: String,
    label: String,
    noCheck: Boolean,
    value: Boolean
})
const emit = defineEmits(['update:value'])
</script>

<template>
    <div class="flex items-center gap-3">
        <input 
            class="hidden" 
            type="checkbox" 
            :id="idName" 
            :value="value"
            @change="emit('update:value', $event.target.checked)" 
        />
        <label :class="{'custom-checkbox': !noCheck, 'no-check': noCheck}" class="text-sm order-1 flex items-center gap-3 cursor-pointer" :htmlFor="idName">{{ label }}</label>
    </div>
</template>

<style scoped>
.custom-checkbox::before {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #C4C4C4;
    content: '';
    color: white;
    width: 14px;
    height: 14px;
    transition: all 0.3s ease 0s;
}
.no-check {
    color: #BDBEC2;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    padding-inline: 15px;
    text-transform: uppercase;
    background: #F0F0F4;
    transition: all 0.3s ease 0s;
}
input:checked + .custom-checkbox::before {
    background: #1C62CD;
    content: '\2713';
    border-color: #1C62CD;
}
input:checked + .no-check {
    color: white;
    background: #1C62CD;
}
</style>