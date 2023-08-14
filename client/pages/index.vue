<template>
    <div>C1 Dashboard  test - {{ counter }}</div>
</template>

<script setup lang="ts">
    const counter = ref(1);
    const { data, pending, error, refresh } = await useFetch('http://localhost:8080/count');
    counter.value = data.value?.count;
    // async function getCount() {
    //     // const { data, pending, refresh, error } = await $c1api('count')
    //     const { data, pending, error, refresh } = await useFetch('http://localhost:8080/count');
    //     counter.value = data.value?.count;

    // };
    // getCount();
</script>