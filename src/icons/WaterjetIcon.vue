<script>
import * as icons from './templates'

export default {
    name: 'waterjet-icon',
    components: { ...icons },
    props: {
        name: {
            type: String,
            required: true,
            validator (value) {
                return Object.keys(icons).includes(value)
            }
        }
    }
}
</script>

<template>
    <component :is="name" />
</template>

