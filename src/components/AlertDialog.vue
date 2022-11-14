<template>
    <div v-if="showing" class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
        @click.self="close">
        <div class="relative w-8/12 max-w-2xl bg-white shadow-md rounded-lg p-5">
            <button aria-label="close"
                class="absolute top-2 right-2 text-gray-500 hover:bg-gray-200 p-1 rounded-full flex transition duration-150 ease-in-out"
                @click.prevent="close">
                <font-awesome-icon icon="fa-solid fa-close" class="w-3.5 h-3.5" />
            </button>
            <div class="flex flex-col gap-3">
                <font-awesome-icon icon="fa-solid fa-warning" class="w-10 h-10 text-center mx-auto text-gray-800" />
                <p class="text-center text-gray-800">{{ message }}</p>
                <div class="flex justify-evenly">
                    <button
                        class="bg-red-500 w-20 rounded-md text-white font-semibold hover:bg-red-700 transition duration-150 ease-in-out"
                        @click.prevent="yes">
                        Ya
                    </button>
                    <button
                        class="w-20 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-200 transition duration-150 ease-in-out"
                        @click.prevent="close">
                        Batal
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlertDialog",
    props: {
        showing: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        yes() {
            this.$emit("yes");
        },
    },
};
</script>
