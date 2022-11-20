<template>
    <div class=" flex items-center">
        <button @click="navBack" v-if="withBack" class=" text-emerald-500 p-2 mr-2
            hover:bg-emerald-50 flex items-center justify-center
            rounded-full">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-1" />
        </button>
        <div class=" max-w-max">
            <h1 class="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide">{{ text }}</h1>
            <div class=" h-1 w-full bg-emerald-500 mt-1"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        text: {
            type: String,
            required: true
        },
        withBack: {
            type: Boolean,
            default: false
        },
        path: {
            type: String,
            default: ''
        }
    },
    methods: {
        navBack() {
            if (this.path.length > 0) {
                this.$router.push(this.path);
            } else {
                this.$router.back();
            }
        }
    }
}
</script>