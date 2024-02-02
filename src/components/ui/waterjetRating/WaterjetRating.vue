<script setup>
import { ref } from 'vue'
const props = defineProps({
    itemRating: Number
})

const activeSize = ref(props.itemRating / 0.05)

const handleMouseEnter = (e) => {
	activeSize.value = e.target.value / 0.05;
} 
const handleMouseLeave = () => {
	activeSize.value = props.itemRating / 0.05
}
</script>


<template>
    <div class="rating rating_set">
        <div class="rating__body">
            <div class="rating__active" :style="{width: `${activeSize}%`}"></div>
            <div class="rating__items">
                <input type="radio" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="rating__item" value="1" name="rating">
                <input type="radio" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="rating__item" value="2" name="rating">
                <input type="radio" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="rating__item" value="3" name="rating">
                <input type="radio" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="rating__item" value="4" name="rating">
                <input type="radio" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="rating__item" value="5" name="rating">
            </div>
        </div>
        <div class="rating__value">{{ itemRating }}</div>
    </div>
</template>

<style scoped>
.rating {
	display: flex;
	align-items: flex-end;
	font-size: 30px;
	line-height: 0.75;
	transition: opacity 0.3s ease 0s;
}
.rating.rating_sending {
	opacity: 0.2;
}
.rating.rating_set .rating__active,
.rating.rating_set .rating__item {
	cursor: pointer;
}

.rating__body {
	position: relative;
}
.rating__body::before {
	content: "★★★★★";
	display: block;
    color: #C4C4C4;
}
.rating__active {
	position: absolute;
	width: 0%;
	height: 100%;
	top: 0;
	left: 0;
	overflow: hidden;
}
.rating__active::before {
	content: "★★★★★";
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	color: #1C62CD;
}

.rating__items {
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.rating__item {
	flex: 0 0 20%;
	height: 100%;
	opacity: 0;
}
.rating__value {
	font-size: 0;
	line-height: 1;
	padding: 0px 0px 0px 10px;
}
</style>