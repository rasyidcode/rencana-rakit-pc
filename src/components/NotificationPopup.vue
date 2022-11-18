<template>
    <div class="absolute bg-white shadow-lg
        top-0 left-0 right-0 bottom-0 z-20 max-w-max max-h-max
        m-auto flex flex-col rounded-sm">
        <div class="py-6 px-5 flex flex-col gap-3">
            <font-awesome-icon :icon="notifIcon" class="
                    border p-2 w-5 h-5 rounded-full mx-auto"
                    :class="notifIconColor" />
            <p class="text-base tracking-wide text-gray-700">{{ message }}</p>
            <button class="w-20 rounded-md border bg-red-500 text-white 
                    font-semibold hover:bg-red-700 transition duration-150 ease-in-out
                    mx-auto" @click.prevent="$emit('close')">
                Tutup
            </button>
        </div>
        <Transition appear @before-appear="beforeEnter" @after-appear="enter">
            <div class="w-full h-1 transition duration-500 ease-linear" :class="timerBarColor"></div>
        </Transition>
    </div>
</template>

<script>
import { Transition } from 'vue';

export default {
    name: 'NotificationPopup',
    props: {
        message: {
            type: String,
            required: true,
            default: 'Default message'
        },
        type: {
            type: String, // success, error, warning, info, unknown
            required: true,
            default: ''
        }
    },
    data() {
        return {
            isTimerFinished: false
        }
    },
    computed: {
        notifIcon() {
            switch(this.type) {
                case 'success':
                    return 'fa-solid fa-check';
                case 'error':
                    return 'fa-solid fa-close';
                case 'warning':
                    return 'fa-solid fa-warning';
                case 'info':
                    return 'fa-solid fa-info';
                default:
                    return 'fa-solid fa-question';
            }
        },
        notifIconColor() {
            switch(this.type) {
                case 'success':
                    return {'border-green-600 text-green-600': true};
                case 'error':
                    return {'border-red-600 text-red-600': true};
                case 'warning':
                    return {'border-orange-600 text-orange-600': true};
                case 'info':
                    return {'border-blue-600 text-blue-600': true};
                default:
                    return {'border-gray-600 text-gray-600': true};
            }
        },
        timerBarColor() {
            switch(this.type) {
                case 'success':
                    return {'bg-green-500': true};
                case 'error':
                    return {'bg-red-500': true};
                case 'warning':
                    return {'bg-orange-500': true};
                case 'info':
                    return {'bg-blue-500': true};
                default:
                    return {'bg-gray-500': true};
            }
        }
    },
    watch: {
        isTimerFinished(val) {
            if (val) {
                this.$emit('timerFinished');
            }
        }
    },
    components: {
        Transition,
    },
    methods: {
        beforeEnter(el) {
            el.style.width = 100;
        },
        enter(el) {
            el.style.width = '0%';
            el.style.transition = 'width 3s linear';
            setTimeout(() => {
                this.isTimerFinished = true;
            }, 3000);
        }
    },
    emits: ['timerFinished']
}
</script>