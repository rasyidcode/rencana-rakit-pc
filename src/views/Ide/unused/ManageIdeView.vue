<template>
    <div class=" p-10 h-full">
        <div class=" flex items-center mb-8">
            <button class=" text-emerald-500 py-1 px-2 mr-2">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-1" />
            </button>
            <h1 class=" font-semibold flex-1 uppercase text-xl">Tambah Rencana</h1>
        </div>

        <div class=" flex flex-col gap-3 h-4/5 overflow-y-scroll 
            scrollbar pr-2 transition duration-150 ease-in-out">
            <div>
                <label for="processor" class=" uppercase font-semibold">Processor <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-4">
                    <select name="processor" class="mt-1 rounded-tl-lg rounded-bl-lg 
                        border-gray-300 shadow-sm focus:border-emerald-500
                        transition duration-150 ease-in-out text-sm focus:border-r-2">
                        <option selected="true" disabled="disabled">Brand</option>
                        <option>INTEL</option>
                        <option>AMD</option>
                    </select>
                    <select name="processor" class="mt-1 
                        border-gray-300 shadow-sm focus:border-emerald-500
                        transition duration-150 ease-in-out text-sm
                        border-0 border-t border-b focus:border-r-2 focus:border-l">
                        <option selected="true" disabled="disabled">Gen</option>
                        <option>Gen 1 - Haswell</option>
                    </select>
                    <select name="processor" class=" col-span-2 mt-1 rounded-tr-lg rounded-br-lg 
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm">
                        <option selected="true" disabled="disabled">Pilih Processor</option>
                        <option>Intel Core I7 7770K - 7.5jt</option>
                    </select>
                </div>
            </div><!-- end of Processor Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">Motherboard <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-4">
                    <select name="processor" class="mt-1 block w-full rounded-tl-lg rounded-bl-lg 
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm focus:border-r-2">
                        <option selected="true" disabled="disabled">Socket</option>
                        <option>LGA 775</option>
                    </select>
                    <select name="processor" class="mt-1 block w-full
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm
                        border-0 border-t border-b focus:border-r-2 focus:border-l">
                        <option selected="true" disabled="disabled">Chipset</option>
                        <option>H110M</option>
                    </select>
                    <select name="processor" class=" col-span-2 mt-1 block w-full rounded-tr-lg rounded-br-lg
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm">
                        <option selected="true" disabled="disabled">Pilih Motherboard</option>
                        <option>Asus Motherboard LGA 1150 H110M</option>
                    </select>
                </div>
            </div><!-- end of Motherboard Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">Ram <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-4">
                    <select name="processor" class="mt-1 rounded-tl-lg rounded-bl-lg 
                        border-gray-300 shadow-sm focus:border-emerald-500
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        border-r-0">
                        <option selected="true" disabled="disabled">Tipe</option>
                        <option>DDR 2</option>
                        <option>DDR 3</option>
                        <option>DDR 4</option>
                    </select>
                    <select name="processor" class=" col-span-2 mt-1
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        border-0 border-t border-b border-l">
                        <option selected="true" disabled="disabled">Pilih RAM</option>
                        <option>Team Elite 4 GB</option>
                    </select>
                    <select name="processor" class=" mt-1 rounded-tr-lg rounded-br-lg
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm">
                        <option>1</option>
                    </select>
                </div>
            </div><!-- end of RAM Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">VGA <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-4">
                    <select name="processor" class="mt-1 rounded-tl-lg rounded-bl-lg 
                        border-gray-300 shadow-sm focus:border-emerald-500
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        border-r-0">
                        <option selected="true" disabled="disabled">Brand</option>
                        <option>NVIDIA</option>
                        <option>AMD</option>
                        <option>INTEL ARC</option>
                    </select>
                    <select name="processor" class=" col-span-3 mt-1
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm
                        rounded-tr-lg rounded-br-lg">
                        <option selected="true" disabled="disabled">Pilih VGA</option>
                        <option>RTX 4090</option>
                    </select>
                </div>
            </div><!-- end of VGA Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">Power Supply <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-1">
                    <select name="processor" class=" col-span-2 mt-1
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        rounded-lg">
                        <option selected="true" disabled="disabled">Pilih Power Supply</option>
                        <option>Team Elite 650 WATT 80+ Bronze</option>
                    </select>
                </div>
            </div><!-- end of Power Supply Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">SSD <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-1">
                    <select name="processor" class=" col-span-2 mt-1
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        rounded-lg">
                        <option selected="true" disabled="disabled">Pilih SSD</option>
                        <option>CDT 256 GB</option>
                        <option>CDT 512 GB</option>
                    </select>
                </div>
            </div><!-- end of SSD Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">HDD <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-1">
                    <select name="processor" class=" col-span-2 mt-1
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        rounded-lg">
                        <option selected="true" disabled="disabled">Pilih HDD</option>
                        <option>Seagate 500 GB</option>
                        <option>Seagate 1 TB</option>
                    </select>
                </div>
            </div><!-- end of HDD Input -->
            <div>
                <label for="processor" class=" uppercase font-semibold">Casing <span class=" text-red-500">*</span></label>
                <div class=" grid grid-cols-1">
                    <select name="processor" class=" col-span-2 mt-1
                        border-gray-300 shadow-sm focus:border-emerald-500 
                        transition duration-150 ease-in-out text-sm focus:border-r-2
                        rounded-lg">
                        <option selected="true" disabled="disabled">Pilih Casing</option>
                        <option>Gaming Case OG</option>
                        <option>Gaming Case Kimi Hime</option>
                    </select>
                </div>
            </div><!-- end of Casing Input -->
            <button type="button" class="
                    max-w-max mx-auto mt-5
                    px-9 py-1.5 bg-emerald-500 text-white font-medium text-xs 
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
export default {
    name: 'ManageIdeView'
}
</script>