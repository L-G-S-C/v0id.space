<script setup>
    const props = defineProps({
        navItem: Object,
        listLength: Number
    })
</script>

<template>
    <li class="navbar-item">
        <a :id="navItem.id_html" href="#" class="navbar-link">
            <font-awesome-icon :icon="[navItem.icon_src, navItem.icon]" size="xl"/>
        </a>
    </li>
    <li v-if="navItem.id < listLength" class="navbar-separator">•</li>
</template>