<template>
    <div class=" p-10 h-full">
        <PageTitle text="Tambah Rencana" :withBack="true" />

        <div class=" flex flex-col gap-3 h-4/5 overflow-y-scroll 
            scrollbar pr-2 transition duration-150 ease-in-out">
            <div class=" flex flex-col">
                <label for="ide" class=" uppercase font-semibold">Ide Rakitan<span
                        class=" text-red-500">*</span></label>
                <select name="ide" class="mt-1 rounded-lg
                        border-gray-300 shadow-sm focus:border-emerald-500
                        transition duration-150 ease-in-out text-sm">
                    <option selected="true" disabled="disabled">Pilih Ide</option>
                    <option>INTEL</option>
                    <option>AMD</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="processor" class=" uppercase font-semibold">Harga<span
                        class=" text-red-500">*</span></label>
                <input type="text" class=" mt-1 rounded-lg border-gray-300 
                    shadow-sm focus:border-emerald-500 text-sm text-gray-500
                    bg-gray-100" readonly value="Rp. 3.000.000,00">
            </div>
            <div class=" flex flex-col">
                <label for="processor" class=" uppercase font-semibold">Rencana Tanggal Beli<span
                        class=" text-red-500">*</span></label>
                <input type="date" class=" mt-1 rounded-lg border-gray-300 
                    shadow-sm focus:border-emerald-500 text-sm">
            </div>
            <div class=" flex flex-col">
                <label for="processor" class=" uppercase font-semibold">Dana Awal<span
                        class=" text-red-500">*</span></label>
                <input type="text" class=" mt-1 rounded-lg border-gray-300 
                    shadow-sm focus:border-emerald-500 text-sm"
                    data-type="currency" placeholder="Rp. 1.000.000,00"
                    v-model="form.initial_budget" @blur="addRupiah()" @focusin="removeRupiah()">
            </div>
            <button type="button" class="
                    max-w-max mx-auto mt-5
                    px-8 py-2 bg-emerald-500 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg
                    focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    transition duration-150 ease-in-out
                    tracking-wider">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/Text/PageTitle.vue';

export default {
    name: 'TambahRencanaView',
    components: {
        PageTitle
    },
    data() {
        return {
            form: {
                ide: null,
                budget_needs: 0,
                buying_date: null,
                initial_budget: null,
            }
        }
    },
    watch: {
        'form.initial_budget'(budget) {
            if (budget.indexOf(',00') === -1) {
                this.form.initial_budget = 'Rp. ' + this.formatNumber(budget);
            }

        }
    },
    methods: {
        formatNumber(num) {
            return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        addRupiah() {
            this.form.initial_budget = this.form.initial_budget + ',00';
        },
        removeRupiah() {
            this.form.initial_budget = this.form.initial_budget.replace(',00', '');
        }
    }
}
</script>