<template>
    <div id="app">
        <headers></headers>
        <sidebar></sidebar>
        <router-view/>
        <footers></footers>
    </div>
</template>

<script>
import Headers from './components/common/Headers.vue'
import Sidebar from './components/common/Sidebar.vue'
import Footers from './components/common/Footers.vue'
export default {
    name: 'App',
    components: {
        Headers, Sidebar, Footers
    }
}
</script>

<style>
    body, ul, li {
        padding: 0;
        margin: 0;
    }
    ul li {
        list-style: none;
    }
</style>
