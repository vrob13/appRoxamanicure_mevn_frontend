<script setup>
    import { onMounted, inject } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AuthAPI from '../../api/AuthAPI'

    const toast = inject('toast')
    const router = useRouter()
    const route = useRoute()
    const { token } = route.params

    onMounted(async() => {
        try {
            const { data } = await AuthAPI.verifyAccount(token)
            toast.open({
                message: data.msg,
                type: 'success'
            })
            
        } catch (error) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
            setTimeout(() => {
                router.push({name: 'login'})
            }, 5000);
            
        }
    })
</script>

<template>
    <h1 class="text-5xl font-extrabold text-white text-center mt-10">Verificar cuenta</h1>
</template>