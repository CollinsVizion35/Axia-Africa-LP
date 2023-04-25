<script>
// for carousel
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
    components: {
        Vue3Marquee,
    },

data() {
  return {
    testis: {
      1: { 
            message: 'Being someone with the passion to learn design, I found it hard to multitask between my days job and my passion for learning. Coupled with this, the fear of learning alone without mentorship made me doubt my ability to learn ui/ux. However, thanks to Axia Africa and their mentorship programs, I have been able to learn what I desired to learn in a convenient space at my own pace. Thanks Axia Africa.', 
            image: 'samuelImg.png',
            name: 'Samuel Ogunshina' ,
            marginLeft: '5vh'
        },
      2: { 
            message: 'I always had a knack for designs but I needed the right platform to put me through and teach me properly, I found that with Axia Africa. At Axia Africa, the tutors are very kind to retake a class for you when you don’t understand a thing. If you are looking for a place where you need an efficient and reliable tutoring then Axia Africa is the right place for you.', 
            image: 'Feyisayo.png',
            name: 'Feyisayo Olakanmi' 
        },
      3: { 
            message: "Axia Africa's product design class has taught me a lot of things regarding designs and how to interact with people. I've learnt a lot about the UX and UI processes. Each class has been a perfect blend of learning and fun. Thanks so much for this opportunity Axia Africa.", 
            image: 'DolapoImg.png',
            name: 'Dolapo Oyegunle' 
        },
      4: { 
            message: 'Finding Axia Africa and being offered a training on product design was a turning point in my career. The lessons were planned properly and were made flexible to accommodate our different schedules.I will a 100% recommend Axia Africa to anyone who plans to take their career to the next level and is looking for a place to start.', 
            image: 'LindaImg.png',
            name: 'Linda Nwodo' 
        },
      5: { 
            message: 'I had no clue where to start in learning Product design, then Axia Africa started an online training and I joined. Within few weeks of coaching I was able to understand both UX & UI. The classes are interesting and gives room to ask questions. Materials provided were helpful. It was a great to learning experience led by the fantastic teachers. I would highly recommend this training if you are a beginner', 
            image: 'blessingImg.png',
            name: 'Blessing Fabilola' 
        },
      6: { 
            message: 'Axia Africa’s product design class has been an eye opener and a good starter for me as someone who is a graphic designer but struggles a lot with UX in particular. I’ve become more confident in my UX process and prowess as a designer and I won’t stop learning!. Thank you Axia.', 
            image: 'samuel2.png',
            name: 'Samuel Osunleke' 
        },
      7: { 
            message: 'Axia Africa has been so helpful to me. I got into tech with zero knowledge of it, didn’t even know my way around a good system. But right now, I know more than I would’ve imagined that I can before I got into the academy. Very helpful, kind, patient and thoughtful teachers too. This training has really helped me! I highly recommend it! Thank youuu.', 
            image: 'Oyinlola.png',
            name: 'Oyinlola Babalola' 
        }
    }
  };
}}
</script>



<template>
    <div class="mx-auto mb-6 w-[960px]">
        <div class="flex flex-col-reverse lg:flex-row py-20 max-w-[1280px]">
            <div class="flex flex-col">

                <div class="w-[960px]">
                    <header class="accel font-medium  text-4xl mb-8">Our success story</header>
                    <div>What our students are saying about their learning experience.</div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="w-[95vw] mx-auto">
                    <Vue3Marquee pauseOnHover :duration="120">
                        <div class="flex space-x-[5vh] mr-[5vh]">
                        <div v-for="testi in testis" :key="testi.id" class="flex flex-col space-y-3 p-8 lg: w-[425px] items-start min-h-[366.51px] bg-[#FAF5EE]">
                            <div class="min-h-[235px]">{{testi.message}}</div>

                            <div class="flex flex-row items-center space-x-5">
                            <img :src=testi.image alt={{testi.name}}/>
                            <div>{{testi.name}}</div>
                        </div>
                    </div>
                        </div>
                    </Vue3Marquee>
                </div>
</template>

