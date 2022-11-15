<template>
    <div class=" pb-2" :class="{'pt-3': id != 1}">
        <h4 class=" font-semibold bg-emerald-700 max-w-max
                    py-0 px-3 text-sm rounded-full text-white mb-1">Processor</h4>
        <div class=" flex flex-row justify-between ">
            <p class=" uppercase font-thin">Intel Core I7 7900K</p>
            <p class=" font-bold text-emerald-700">5jt - 7jt</p>
        </div>
    </div>

            <!-- <table class=" table-auto w-full border-collapse border">
            <thead>
                <tr>
                    <th class="border-b font-medium p-2 text-left">No.</th>
                    <th class="border-b font-medium p-2 text-left">Nama</th>
                    <th colspan="2" class="border-b font-medium p-2 text-left">Harga</th>
                    <th class="border-b font-medium p-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="1" class="border-b p-2 text-left">1.</td>
                    <td rowspan="1" class="border-b p-2 text-left">GTX 770 2GB DDR5</td>
                    <td class="border-b p-2 text-left">500k</td>
                    <td class="border-b p-2 text-left">
                        27/11/22
                    </td>
                    <td rowspan="1" class="border-b p-2 text-left">

                    </td>
                </tr> -->
                <!-- <tr>
                    <td class="border-b p-2 text-left">500k</td>
                    <td class="border-b p-2 text-left">
                        27/11/22
                    </td>
                </tr>
                <tr>
                    <td class="border-b p-2 text-left">500k</td>
                    <td class="border-b p-2 text-left">
                        27/11/22
                    </td>
                </tr> -->
            <!-- </tbody>
        </table> -->
</template>

<script>
export default {
    name: 'ItemKomponen',
    props: {
        id: Number
    }
}
</script>