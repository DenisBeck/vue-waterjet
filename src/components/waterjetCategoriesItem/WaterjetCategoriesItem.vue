<script setup>
defineProps({
    item: Object
})
</script>

<template>
    <div v-if="item" class="category-item border border-slate-300 h-full flex justify-between">
        <div class="flex flex-col justify-between">
            <h3 class="title font-bold text-2xl">{{ item.category_name }}</h3>
            <router-link class="category-link text-slate-100" :to="`/catalog?filteredId=${item.id}`">Подробнее></router-link>
        </div>
        <div>
            <img class="w-32 h-24 object-contain" :src="item.image_url" :alt="item.category_name">
        </div>
    </div>
</template>

<style scoped>
.category-item {
    padding: 15px;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
}
.category-item .title {
    font-family: 'Roboto';
    transition: all 0.3s ease 0s;
}
.category-link {
    color: #C4C4C4;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.category-link:hover {
    color: #949494;
}
.category-item:hover {
    box-shadow: 3px 3px 20px 0px rgba(50, 50, 50, 0.25);
}
.category-item:hover .title {
    color: #1C62CD;
}
</style>