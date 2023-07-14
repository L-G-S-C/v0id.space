<script setup>
    useHead({
        title: "Teste"
    })
</script>

<template>
    <div>
        <div class="glass" style="margin: 5rem 5rem 5rem 5rem">
			<p v-for="n in [...Array(100).keys()]">Linha {{n+1}}</p>
		</div>
        <br v-for="n in [...Array(20).keys()]"/>
    </div>
</template> 