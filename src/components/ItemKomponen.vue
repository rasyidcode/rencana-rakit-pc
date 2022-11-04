<template>
    <div class=" pb-2" :class="{'pt-3': id != 1}">
        <h4 class=" font-semibold bg-emerald-700 max-w-max
                    py-0 px-3 text-sm rounded-full text-white mb-1">Processor</h4>
        <div class=" flex flex-row justify-between ">
            <p class=" uppercase font-thin">Intel Core I7 7900K</p>
            <p class=" font-bold text-emerald-700">5jt - 7jt</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemKomponen',
    props: {
        id: Number
    }
}
</script>