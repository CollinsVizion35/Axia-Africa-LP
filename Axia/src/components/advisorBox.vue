<script>
export default {
  props: {
    showDiv: {
      type: Boolean,
      required: true,
    },
  },
};
</script>


<template>
    <div class="h-screen w-screen fixed bg-black bg-opacity-10 left-0 top-0 flex items-center z-[9999999999999999999]"  v-if="showDiv">
        <div class="bg-white relative h-[470px] w-[580px] bg-opacity-100 opacity-100 mx-auto flex flex-col py-[48px] px-[40px]">
            <font-awesome-icon icon="fa-solid fa-xmark" class="flex justify-end absolute top-4 right-4 text-xl"  v-if="showDiv" @click="$emit('hide-div')"/>
            <div class="flex flex-col text-center items-center space-y-4 mb-4">
                <div class="font-medium text-xl ">Speak with an Advisor</div>
                <div>
                    You can reach out to an Advisor on our platform<br> either via a direct phone call or by booking an<br> appointment.
                </div>
            </div>

            <div class="flex flex-row p-4 mb-8 space-x-4 bg-[#FAF5EE] before:bg-transparent before:border-2 before:w-[100%] before:border-black before:border-r-0 before:border-t-0 relative before:absolute before:top-5 before:right-3 before:h-[95%] before:z-[-1] z-[2]">
                <font-awesome-icon icon="fa-solid fa-phone" class="text-inherit border-black border-2"/>
                <div class="flex flex-col space-y-0">
                    <div>Call Us directly on</div>
                    <div class="text-2xl font-black">09015558035</div>
                </div>
            </div>

            <div class="flex flex-col  p-4  space-y-0 bg-[#FAF5EE]  before:bg-transparent before:border-2 before:w-[100%] before:border-black before:border-r-0 before:border-t-0 relative before:absolute before:top-5 before:right-3 before:h-[95%] before:z-[-1] z-[2]">
                <div>Book an Appointment</div>
                <div class="text-2xl font-black">Set a Time & Date to speak with Us</div>
                <div id="arrowDiv8" class=" cursor-default underline">Book now <font-awesome-icon
            icon="fa-solid fa-arrow-right" id="arrow8"
            class="transform scale-x-150 inline-block align-middle ml-4 no-underline " /></div>
      
            </div>

        </div>
    </div>
</template>
<!-- left-[calc(100vw_-_1160px)] -->