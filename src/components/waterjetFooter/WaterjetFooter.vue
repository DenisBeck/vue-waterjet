<script setup>
import { ref, reactive, onUnmounted } from 'vue'
import { WaterjetInput } from '../ui/waterjetInput'
import { WaterjetButton } from '../ui/waterjetButton'
import { WaterjetNavList } from '../ui/waterjetNavList'

const size = ref(document.documentElement.clientWidth)

const footerLinks1 = ref([
    { id: 1, value: 'О компании', link: '/shops' },
    { id: 2, value: 'Контакты', link: '/shops' },
    { id: 3, value: 'Акции', link: '/actions' },
    { id: 4, value: 'Магазины', link: '/shops' }
])
const footerLinks2 = ref([
    { id: 1, value: 'Доставка и самовывоз', link: '/delivery' },
    { id: 2, value: 'Оплата', link: '/delivery' },
    { id: 3, value: 'Возврат-обмен', link: '/delivery' },
    { id: 4, value: 'Новости', link: '/' }
])
const socials = ref([
    { id: 1, value: '', link: '', icon: 'WaterjetInstagramIcon' },
    { id: 1, value: '', link: '', icon: 'WaterjetVkIcon' },
    { id: 1, value: '', link: '', icon: 'WaterjetFacebookIcon' },
    { id: 1, value: '', link: '', icon: 'WaterjetYoutubeIcon' }
])

const blocksInfo = reactive({
    link1: {
        open: false,
        height: footerLinks1.value.length * 30
    },
    link2: {
        open: false,
        height: footerLinks2.value.length * 30
    }
})

const toggleOpen1 = () => {
    blocksInfo.link1.open = !blocksInfo.link1.open
}


const toggleOpen2 = () => {
    blocksInfo.link2.open = !blocksInfo.link2.open
}

const setSize = () => {
    size.value = document.documentElement.clientWidth
}

window.addEventListener("resize", setSize)

onUnmounted(() => {
  window.removeEventListener("resize", setSize);
})

</script>

<template>
    <footer class="bg-slate-200 ">
        <div class="max-w-screen-xl mx-auto px-5">
            <div class="py-10 md:flex-row flex-col flex lg:gap-24 gap-10 justify-between">
                <div>
                    <h3 class="font-bold text-sm max-w-56 mb-9">Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h3>
                    <div class="flex h-8 mb-6">
                        <waterjet-input class="border-white h-full mb-4" placeholder="Введите ваш e-mail:" />
                        <waterjet-button class="h-full uppercase text-xs font-semibold tracking-widest" label="Отправить" />
                    </div>
                    <waterjet-nav-list class="lg:hidden flex gap-7" :items="socials" withIcons />
                </div>
                <div>
                    <h3 @click="toggleOpen1" class="font-bold md:text-sm max-w-56 mb-2.5 cursor-pointer md:cursor-default">Информация</h3>
                    <waterjet-nav-list :style="{height: blocksInfo.link1.open || size > 767 ? `${blocksInfo.link1.height}px` : '0'}" class="transition-height gap-1 flex flex-col md:text-sm overflow-hidden" :items="footerLinks1" />
                </div>
                <div>
                    <h3 @click="toggleOpen2" class="font-bold md:text-sm max-w-56 mb-2.5 cursor-pointer md:cursor-default">Интернет-магазин</h3>
                    <waterjet-nav-list :style="{height: blocksInfo.link2.open || size > 767 ? `${blocksInfo.link2.height}px` : '0'}" class="transition-height gap-1 flex flex-col md:text-sm overflow-hidden" :items="footerLinks2" />
                </div>
                <div class="self-center lg:block hidden">
                    <waterjet-nav-list class="flex gap-7" :items="socials" withIcons />
                </div>
            </div>
        </div>
        <div class="mb-5 md:flex items-center justify-center gap-20 px-5 text-slate-700 text-xs">
            <p class="mb-1 md:mb-0"><router-link to="/">Договор оферты</router-link></p>
            <p><router-link to="/">Политика обработки персональных данных</router-link></p>
        </div>
    </footer>
    
</template>

<style scoped>
.transition-height {
    transition: height 0.3s ease 0s
}
</style>