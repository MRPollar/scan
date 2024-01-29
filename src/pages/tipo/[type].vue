<template>
    <Page>
        <section>
            <Container>
                {{ route.params.type }}
            </Container>
        </section>
    </Page>
</template>

<script setup lang="ts">
const route = useRoute();
</script>